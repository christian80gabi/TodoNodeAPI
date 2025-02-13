import express, { Request, Response } from 'express';
import { NextFunction } from 'express';
import cors from 'cors';

import userRoutes from './routes/users'; // const users = require('./routes/users')
import taskRoutes from './routes/tasks'; // const tasks = require('./routers/tasks')


const app = express();
const port = process.env.PORT || 3000;

// Routers
app.use(express.json())
app.use('/users', userRoutes)
app.use('/tasks', taskRoutes)

app.get('/', (req, res) => {
    res.send('Welcome to TODO API, TypeScript!')
})

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    console.error(error.stack);
    response.status(500).json({ message: error.message });
});

app.use(cors());

app.listen(port, () =>
    console.log('listening on port 3000.', 'REST API server ready at: http://localhost:3000'),
)
