import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {Category} from './category';
import {CATEGORIES} from './mock-categories';

@Injectable()
export class CategoryService {

  constructor() { }

  getCategories(): Observable<Category[]> {
    return of (CATEGORIES);
  }

  getCategory(id: number): Observable<Category> {
    return of (CATEGORIES.find(category => category.id === id));
  }

}
