import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {NotesComponent} from './notes/notes.component';
import {NoteDetailComponent} from './note-detail/note-detail.component';
import {NoteFormComponent} from './note-form/note-form.component';

import {CategoriesComponent} from './categories/categories.component';
import {CategoryDetailComponent} from './category-detail/category-detail.component';
import {CategoryFormComponent} from './category-form/category-form.component';

/* Binds the urls/routes to the correspondent component */
const routes: Routes = [
  { path: 'notes', component: NotesComponent },
  { path: 'notes/add', component: NoteFormComponent},
  { path: 'note/:id', component: NoteDetailComponent },
  { path: 'note/:id/edit', component: NoteFormComponent},
  { path: 'categories', component: CategoriesComponent },
  { path: 'categories/add', component: CategoryFormComponent},
  { path: 'category/:id', component: CategoryDetailComponent },
  { path: 'category/:id/edit', component: CategoryFormComponent },

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
