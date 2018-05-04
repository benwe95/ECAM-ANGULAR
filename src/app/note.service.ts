import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Note } from './note';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';

import {MessageService} from './message.service';

@Injectable()
export class NoteService {

  private baseUrl = 'http://localhost:8000/api/notes';

  constructor(private http: HttpClient,
              private messagesService: MessageService) { }

  // WORKING 02/05/2018 17:12
  getNotes(): Observable<Note[]> {
    /*The Http response is converted into an array of note arrays*/
    return this.http.get<Note[]>(this.baseUrl)
      .pipe(
        tap(notes => this.log('fetched notes')),
        catchError(this.handleError('getNotes', []))
      );
  }

  // WORKING 02/05/2018 17:12
  getNote(id: number): Observable<Note> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Note>(url)
      .pipe(
        tap(_ => this.log(`fetched note id=${id}`)),
        catchError(this.handleError<Note>(`getNote id=${id}`)
        )
    );
  }

  /* Makes a POST request to add a new Note */
  addNote (note: Note): Observable<Note> {
    return this.http.post<Note>(this.baseUrl, note)
      .pipe(
        tap(_ => this.log(`added note w/ id=${note.id}`)),
        catchError(this.handleError<Note>('addNote'))
      );
  }

  updateNote (note: Note, id: number): Observable<Note> {
    const updateUrl = `${this.baseUrl}/${id}`;
    return this.http.put<Note>( updateUrl, note)
      .pipe(
        tap(_ => this.log(`updated note id=${note.id}`)),
        catchError(this.handleError<any>('updateNote'))
      );
  }

  private log(message: string) {
    this.messagesService.add('NoteService: ' + message);
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
