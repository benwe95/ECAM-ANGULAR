import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {NotesComponent} from './notes/notes.component';
import {CategoriesComponent} from './categories/categories.component';
import {NoteDetailComponent} from './note-detail/note-detail.component';
import {CategoryDetailComponent} from './category-detail/category-detail.component';

const routes: Routes = [
  { path: 'notes', component: NotesComponent },
  { path: 'note/:id', component: NoteDetailComponent },
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
