"use strict";
// notebook/controllers/noteController.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteController = void 0;
const noteService_1 = require("../services/noteService");
class NoteController {
}
exports.NoteController = NoteController;
NoteController.createNote = (req, res) => {
    noteService_1.NoteService.createNote(req, res);
};
NoteController.getAllNotes = (req, res) => {
    noteService_1.NoteService.getAllNotes(req, res);
};
NoteController.getNoteById = (req, res) => {
    noteService_1.NoteService.getNoteById(req, res);
};
NoteController.updateNoteById = (req, res) => {
    noteService_1.NoteService.updateNoteById(req, res);
};
NoteController.deleteNoteById = (req, res) => {
    noteService_1.NoteService.deleteNoteById(req, res);
};
