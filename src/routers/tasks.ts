import { PrismaClient } from "@prisma/client";
import express from 'express';

const prisma = new PrismaClient();
const app = express()
const router = express.Router();

app.use(express.json())

// TODOs / Tasks

router.get('', async (req, res) => {
    const tasks = await prisma.todo.findMany({
        where: { completed: false },
        include: { author: true }
    })
    res.json(tasks)
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    const task = await prisma.todo.findUnique({
        where: { id: Number(id) },
    })
    res.json(task)
})

router.post('/create', async (req, res) => {
    const { title, content, authorEmail } = req.body
    const result = await prisma.todo.create({
        data: {
            title,
            content,
            completed: false,
            author: { connect: { email: authorEmail } }
        },
    })
    res.json(result)
})

router.put('/:id/complete', async (req, res) => {
    const { id } = req.params
    const task = await prisma.todo.update({
        where: { id: Number(id) },
        data: { completed: true },
    })
    res.json(task)
})

router.delete('/:id/delete', async (req, res) => {
    const { id } = req.params
    const task = await prisma.todo.delete({
        where: { id: Number(id) },
    })
    res.json(task)
})

module.exports = router
