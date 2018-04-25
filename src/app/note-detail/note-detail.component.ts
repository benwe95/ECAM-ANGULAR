import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss']
})
export class NoteDetailComponent implements OnInit {

  @Input() note: Note;

  constructor(
    private route: ActivatedRoute,
    private noteService: NoteService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getNote();
  }

  getNote(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.noteService.getNote(id).subscribe(note => this.note = note);
  }

  goBack(): void {
    this.location.back();
  }
}
