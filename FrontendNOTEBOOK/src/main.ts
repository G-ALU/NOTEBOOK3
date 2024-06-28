import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideRouter, Route } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { NoteListComponent } from './app/components/note-list/note-list.component';
import { NoteDetailComponent } from './app/components/note-detail/note-detail.component';
import { NoteFormComponent } from './app/components/note-form/note-form.component';

const routes: Route[] = [
  { path: '', component: NoteListComponent },
  { path: 'note/:id', component: NoteDetailComponent },
  { path: 'add-note', component: NoteFormComponent },
  { path: 'edit-note/:id', component: NoteFormComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule, BrowserAnimationsModule)
  ]
})
  .catch((err) => console.error(err));
