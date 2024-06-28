"use strict";
// notebook/services/noteService.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteService = void 0;
const noteModel_1 = require("../models/noteModel");
const generateID_1 = require("../utils/generateID");
class NoteService {
}
exports.NoteService = NoteService;
NoteService.createNote = (req, res) => {
    try {
        const { title, content } = req.body;
        const createdAt = new Date();
        const id = (0, generateID_1.generateID)();
        const newNote = {
            id,
            title,
            content,
            createdAt
        };
        noteModel_1.notes.push(newNote);
        res.status(201).json(newNote);
    }
    catch (error) {
        console.error('Error creating note:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
NoteService.getAllNotes = (req, res) => {
    res.status(200).json(noteModel_1.notes);
};
NoteService.getNoteById = (req, res) => {
    const { id } = req.params;
    const note = noteModel_1.notes.find(note => note.id === id);
    if (note) {
        res.status(200).json(note);
    }
    else {
        res.status(404).json({ message: 'Note not found' });
    }
};
NoteService.updateNoteById = (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const noteIndex = noteModel_1.notes.findIndex(note => note.id === id);
    if (noteIndex !== -1) {
        noteModel_1.notes[noteIndex] = Object.assign(Object.assign({}, noteModel_1.notes[noteIndex]), { title, content });
        res.status(200).json(noteModel_1.notes[noteIndex]);
    }
    else {
        res.status(404).json({ message: 'Note not found' });
    }
};
NoteService.deleteNoteById = (req, res) => {
    const { id } = req.params;
    const noteIndex = noteModel_1.notes.findIndex(note => note.id === id);
    if (noteIndex !== -1) {
        const deletedNote = noteModel_1.notes.splice(noteIndex, 1);
        res.status(200).json(deletedNote[0]);
    }
    else {
        res.status(404).json({ message: 'Note not found' });
    }
};
