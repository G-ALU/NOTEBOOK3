import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NoteService } from '../../services/note.service';
import { Note } from '../../services/note.model';

@Component({
  selector: 'app-note-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {
  noteForm: FormGroup;
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    private noteService: NoteService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.noteForm = this.fb.group({
      title: [''],
      content: ['']
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.noteService.getNoteById(id).subscribe((data) => {
        this.noteForm.setValue({
          title: data.title,
          content: data.content
        });
      });
    }
  }

  onSubmit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (this.isEditMode && id) {
      this.noteService.updateNote(id, this.noteForm.value).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.noteService.addNote(this.noteForm.value).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
