import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NoteService } from '../../services/note.service';
import { Note } from '../../services/note.model';

@Component({
  selector: 'app-note-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule],
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent {
  note: Note = { title: '', content: '' }; // Initialize with default values

  constructor(private route: ActivatedRoute, private noteService: NoteService, private router: Router) {
    const id = this.route.snapshot.paramMap.get('id') as string; // Type assertion
    this.noteService.getNoteById(id).subscribe((data) => {
      this.note = data;
    });
  }

  deleteNote(): void {
    const id = this.route.snapshot.paramMap.get('id') as string; // Type assertion
    this.noteService.deleteNote(id).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
