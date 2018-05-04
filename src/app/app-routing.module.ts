import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {NotesComponent} from './notes/notes.component';
import {CategoriesComponent} from './categories/categories.component';
import {NoteDetailComponent} from './note-detail/note-detail.component';
import {CategoryDetailComponent} from './category-detail/category-detail.component';
import {NoteFormComponent} from './note-form/note-form.component';

const routes: Routes = [
  { path: 'notes', component: NotesComponent },
  { path: 'notes/add', component: NoteFormComponent},
  { path: 'note/:id', component: NoteDetailComponent },
  { path: 'note/:id/edit', component: NoteFormComponent},
  { path: 'categories', component: CategoriesComponent },
  { path: 'category/:id', component: CategoryDetailComponent },
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
