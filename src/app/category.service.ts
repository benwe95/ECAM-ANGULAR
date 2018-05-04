import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';

import {MessageService} from './message.service';

import { Category } from './category';

@Injectable()
export class CategoryService {

  private baseUrl = 'http://localhost:8000/api/categories';


  constructor(private http: HttpClient,
              private messagesService: MessageService) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl)
      .pipe(
        tap(Categories => this.log('fetched Categories')),
        catchError(this.handleError('getCategories', []))
      );
  }

  getCategory(id: number): Observable<Category> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Category>(url)
      .pipe(
        tap(_ => this.log(`fetched category id=${id}`)),
        catchError(this.handleError<Category>(`getCategory id=${id}`)
        )
      );
  }

  private log(message: string) {
    this.messagesService.add('CategoryService: ' + message);
  }

  /** FROM ANGULAR.IO TUTORIAL
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
