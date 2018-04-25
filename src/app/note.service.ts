import { Injectable } from '@angular/core';

import { Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import {Note} from './note';
import {NOTES} from './mock-notes';

@Injectable()
export class NoteService {

  constructor() { }

  getNotes(): Observable<Note[]> {
    return of (NOTES);
  }

  getNote(id: number): Observable<Note> {
    return of (NOTES.find(note => note.id === id));
  }

}
