// notebook/routes/noteRoutes.ts

import { Router } from 'express';
import { NoteController } from '../controllers/noteController';

const router = Router();

router.post('/', NoteController.createNote);
router.get('/', NoteController.getAllNotes);
router.get('/:id', NoteController.getNoteById);
router.put('/:id', NoteController.updateNoteById);
router.delete('/:id', NoteController.deleteNoteById);

export default router;
