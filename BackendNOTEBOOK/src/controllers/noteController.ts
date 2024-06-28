// notebook/controllers/noteController.ts

import { Request, Response } from 'express';
import { NoteService } from '../services/noteService';

export class NoteController {
    public static createNote = (req: Request, res: Response): void => {
        NoteService.createNote(req, res);
    };
    
    public static getAllNotes = (req: Request, res: Response): void => {
        NoteService.getAllNotes(req, res);
    };
    
    public static getNoteById = (req: Request, res: Response): void => {
        NoteService.getNoteById(req, res);
    };
    
    public static updateNoteById = (req: Request, res: Response): void => {
        NoteService.updateNoteById(req, res);
    };
    
    public static deleteNoteById = (req: Request, res: Response): void => {
        NoteService.deleteNoteById(req, res);
    };
}
