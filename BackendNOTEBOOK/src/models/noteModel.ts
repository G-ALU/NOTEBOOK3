// notebook/models/noteModel.ts

export interface Note {
    id: string;
    title: string;
    content: string;
    createdAt: Date;
}

export const notes: Note[] = [];
