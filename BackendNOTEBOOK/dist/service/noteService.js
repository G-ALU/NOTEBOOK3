"use strict";
// notebook/services/noteService.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNote = void 0;
const noteModel_1 = require("../models/noteModel");
const generateID_1 = require("../utils/generateID");
const createNote = (req, res) => {
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
exports.createNote = createNote;
// Implement other CRUD operations similarly
