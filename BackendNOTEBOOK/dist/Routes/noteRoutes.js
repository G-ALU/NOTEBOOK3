"use strict";
// notebook/routes/noteRoutes.ts
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const noteController_1 = require("../controllers/noteController");
const router = (0, express_1.Router)();
router.post('/', noteController_1.NoteController.createNote);
router.get('/', noteController_1.NoteController.getAllNotes);
router.get('/:id', noteController_1.NoteController.getNoteById);
router.put('/:id', noteController_1.NoteController.updateNoteById);
router.delete('/:id', noteController_1.NoteController.deleteNoteById);
exports.default = router;
