import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Category } from '../category';
import { Note } from '../note';

import { NoteService } from '../note.service';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})
export class NoteFormComponent implements OnInit {

  categories: Category[];
  note: Note = new Note();
  title: string;
  content: string;
  category: string;
  edit = false;
  id: number;

  constructor(private noteService: NoteService,
              private categoryService: CategoryService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit() {
    this.getCategories();
    if (this.route.snapshot.paramMap.get('id')) {
      this.getNote();
      this.edit = true;
    }
  }

  getNote(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.noteService.getNote(this.id).subscribe(note => this.note = note);
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe(categories => this.categories = categories);
    // Sort by wording
  }

  goBack(): void {
    this.location.back();
  }

  saveNote(): void {
    // Check if the title is not a blank
    this.title = this.title.trim();
    if (!this.title) { return; }
    // Then look if the mode is EDIT or ADD
    if (this.edit) {
      this.noteService.updateNote({ title: this.title, content: this.content, category: this.category } as Note, this.id)
        .subscribe(() => this.goBack());
    } else {
      this.noteService.addNote({title: this.title, content: this.content, category: this.category} as Note)
        .subscribe(() => this.goBack());
    }

  }

}

