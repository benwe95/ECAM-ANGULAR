import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Category } from '../category';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss']
})
export class NoteDetailComponent implements OnInit {

  @Input() note: Note;
  category: Category = new Category();

  // id = +this.route.snapshot.paramMap.get('id');

  constructor(private route: ActivatedRoute,
              private noteService: NoteService,
              private location: Location) {
  }

  ngOnInit() {
    this.category = this.note.category;
  }

  /*getNote(): void {
    this.noteService.getNote(this.id).subscribe(note => this.selectedNote = note);
  }*/

  goBack(): void {
    this.location.back();
  }


  delete(): void {
    this.noteService.delNote(this.note.id).subscribe(() => this.goBack());
  }

}
