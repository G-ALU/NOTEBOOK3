// notebook/server.ts

import express from 'express';
import bodyParser from 'body-parser';
import noteRouter from './routes/noteRoutes';

const cors = require('cors')

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors())

// Connect router to the app
app.use('/notes', noteRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
