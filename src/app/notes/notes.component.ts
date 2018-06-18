import { Component, OnInit, ɵConsole } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  notes = new Array<Note>();
  selectedNote: Note = new Note();

  constructor(private noteService: NoteService) {
    console.log('Constructor - notes: ', this.notes);
  }

  ngOnInit() {
    this.getNotes();
    console.log('note ngOnInit');
  }

  getNotes(): void {
    /* This waits for the Observable to emit the array of notes— which could happen now or several minutes from now.
     * Then subscribe passes the emitted array to the callback, which sets the component's notes property.
     */
    this.noteService.getNotes().subscribe(
      notes => this.notes = this.sortNotes(notes)
    );
  }

  onSelect(note: Note): void {
    console.log('Entered onSelect() -> selectedNote: ', typeof  note);
    this.selectedNote = note;
  }

  deleteNote(): void{
    this.noteService.delNote(this.selectedNote.id).subscribe(() => this.getNotes());
  }

  sortNotes(notes: Note[]): Note[] {
    console.log('SortNotes', typeof notes);
    /* Retrieve the string date and create a Date variable */
    for (const note of notes) {
      note.updateDate = new Date(note.date);
    }
    return notes.sort((note1, note2) => {
      if (note1.date > note2.date) {
        return -1;
      }
      if (note1.date < note2.date) {
        return 1;
      }
      return 0;
    });
  }
}
