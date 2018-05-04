import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { NoteFormComponent } from './note-form/note-form.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';

import { AppRoutingModule } from './/app-routing.module';

import {NoteService} from './note.service';
import {CategoryService} from './category.service';
import { MessageService } from './message.service';
import { CategoryFormComponent } from './category-form/category-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NoteDetailComponent,
    NoteFormComponent,
    CategoriesComponent,
    CategoryDetailComponent,
    NoteFormComponent,
    CategoryFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    NoteService,
    CategoryService,
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
