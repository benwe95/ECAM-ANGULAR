import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';

import { AppRoutingModule } from './/app-routing.module';

import {NoteService} from './note.service';
import {CategoryService} from './category.service';


@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NoteDetailComponent,
    CategoriesComponent,
    CategoryDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    NoteService,
    CategoryService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
