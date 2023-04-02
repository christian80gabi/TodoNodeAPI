import express from 'express';

const app = express();
app.use(express.json())

const users = require('./routers/users')
const tasks = require('./routers/tasks')

app.use('/users', users)
app.use('/tasks', tasks)

app.get('/', (req, res) => {
    res.send('Welcome to TODO API, TypeScript!')
})

app.listen(3000, () =>
    console.log('listening on port 3000.', 'REST API server ready at: http://localhost:3000'),
)
