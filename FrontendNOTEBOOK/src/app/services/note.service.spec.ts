// import { TestBed } from '@angular/core/testing';

// import { NoteService } from './note.service';

// describe('NoteService', () => {
//   let service: NoteService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(NoteService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
//   //added content to files



import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { NoteService } from "./note.service";
import { of } from 'rxjs';
import { NoteFormComponent } from "../components/note-form/note-form.component";

describe('NoteServiceComponent', () => {

  let formBuilder: FormBuilder;
  let noteService: jasmine.SpyObj<NoteService>;
  let activatedRoute: any;
  let router: jasmine.SpyObj<Router>;

  beforeEach(() => {
    formBuilder = new FormBuilder();
    noteService = jasmine.createSpyObj('NoteService', ['getAllNotes', 'getNoteById', 'addNote', 'updateNote', 'deleteNote']);
    activatedRoute = {
      snapshot: {
        paramMap: {
          get: jasmine.createSpy('get').and.returnValue(null) // or return an ID for edit mode
        }
      }
    } as unknown as jasmine.SpyObj<ActivatedRoute>;
    router = jasmine.createSpyObj('Router', ['navigate']);
  });

  it('should submit and add a new note', () => {
    // Arrange
    const noteForm = new NoteFormComponent(formBuilder, noteService, activatedRoute, router);
    noteForm.noteForm.setValue({ title: 'Test Title', content: 'Test Content' });
    noteService.addNote.and.returnValue(of({title:'Add Title', content:'Add Conte'}));

    // Act
    noteForm.onSubmit();

    // Assert
    expect(noteService.addNote).toHaveBeenCalledWith({ title: 'Test Title', content: 'Test Content' });
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  });

  it('should submit and update an existing note', () => {
    // Arrange
    const id = '123';
    activatedRoute.snapshot.paramMap.get.and.returnValue(id);
    noteService.getNoteById.and.returnValue(of({ title: 'Existing Title', content: 'Existing Content' }));
    noteService.updateNote.and.returnValue(of({ title:'New Title', content:'New Content'}));
    const noteForm = new NoteFormComponent(formBuilder, noteService, activatedRoute, router);
    noteForm.ngOnInit();
    noteForm.noteForm.setValue({ title: 'Updated Title', content: 'Updated Content' });

    // Act
    noteForm.onSubmit();

    // Assert
    expect(noteService.updateNote).toHaveBeenCalledWith(id, { title: 'Updated Title', content: 'Updated Content' });
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  });

  it('should populate form with note data in edit mode', () => {
    // Arrange
    const id = '123';
    const noteData = { title: 'Existing Title', content: 'Existing Content' };
    activatedRoute.snapshot.paramMap.get.and.returnValue(id);
    noteService.getNoteById.and.returnValue(of(noteData));
    const noteForm = new NoteFormComponent(formBuilder, noteService, activatedRoute, router);

    // Act
    noteForm.ngOnInit();

    // Assert
    expect(noteService.getNoteById).toHaveBeenCalledWith(id);
    expect(noteForm.noteForm.value).toEqual(noteData);
  });

});

