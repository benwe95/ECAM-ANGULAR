import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Validators, FormBuilder, FormGroup} from '@angular/forms';

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
  private id: number;
  private edit = false;

  constructor(private noteService: NoteService,
              private categoryService: CategoryService,
              private route: ActivatedRoute,
              private location: Location,
             ) {
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
    this.categoryService.getCategories().
    subscribe(categories => this.categories = this.sortCategories(categories));
  }

  goBack(): void {
    this.location.back();
  }

  saveNote(): void {
    // Check if the title is not a blank
    if (!this.title.trim()) { return; }

    this.note.title = this.title;
    this.note.content = this.content;
    this.note.category = this.category;

    // Then look if the mode is EDIT or ADD
    if (this.edit) {
      console.log('edit note', this.note);
      this.noteService.updateNote(this.note, this.note.id)
        .subscribe(() => this.goBack());
    } else {
      console.log('add note', this.note);
      this.noteService.addNote(this.note)
        .subscribe(() => this.goBack());
    }
  }

  sortCategories(cat: Category[]): Category[] {
    return cat.sort((cat1, cat2) => {
      if (cat1.wording > cat2.wording) {
        return 1;
      }
      if (cat1.wording < cat2.wording) {
        return -1;
      }
      return 0;
    });
  }

}

