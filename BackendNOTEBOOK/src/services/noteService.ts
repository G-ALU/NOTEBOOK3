// notebook/services/noteService.ts

import { Request, Response } from 'express';
import { Note, notes } from '../models/noteModel';
import { generateID } from '../utils/generateID';

export class NoteService {
    public static createNote = (req: Request, res: Response): void => {
        try {
            const { title, content } = req.body;
            const createdAt = new Date();
            const id = generateID();
            
            const newNote: Note = {
                id,
                title,
                content,
                createdAt
            };
            
            notes.push(newNote);
            
            res.status(201).json(newNote);
        } catch (error) {
            console.error('Error creating note:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    };
    
    public static getAllNotes = (req: Request, res: Response): void => {
        res.status(200).json(notes);
    };
    
    public static getNoteById = (req: Request, res: Response): void => {
        const { id } = req.params;
        const note = notes.find(note => note.id === id);
        if (note) {
            res.status(200).json(note);
        } else {
            res.status(404).json({ message: 'Note not found' });
        }
    };
    
    public static updateNoteById = (req: Request, res: Response): void => {
        const { id } = req.params;
        const { title, content } = req.body;
        const noteIndex = notes.findIndex(note => note.id === id);
        if (noteIndex !== -1) {
            notes[noteIndex] = { ...notes[noteIndex], title, content };
            res.status(200).json(notes[noteIndex]);
        } else {
            res.status(404).json({ message: 'Note not found' });
        }
    };
    
    public static deleteNoteById = (req: Request, res: Response): void => {
        const { id } = req.params;
        const noteIndex = notes.findIndex(note => note.id === id);
        if (noteIndex !== -1) {
            const deletedNote = notes.splice(noteIndex, 1);
            res.status(200).json(deletedNote[0]);
        } else {
            res.status(404).json({ message: 'Note not found' });
        }
    };
}
