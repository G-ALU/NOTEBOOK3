import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NoteService } from '../../services/note.service';
import { Note } from '../../services/note.model';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [CommonModule, RouterModule, MatToolbarModule, MatButtonModule, MatCardModule],
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent {
  notes: Note[] = []; // Correctly type the notes array

  constructor(private noteService: NoteService) {
    this.noteService.getAllNotes().subscribe((data) => {
      this.notes = data;
    });
  }
}
