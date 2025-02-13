import { PrismaClient } from "@prisma/client";
import e from "express";
import express from 'express';

const prisma = new PrismaClient();
const app = express()
const router = express.Router();

app.use(express.json())

// Tasks

router.get('', async (req, res) => {
    const tasks = await prisma.task.findMany({
        where: { status: { in: ['NEW', 'IN_PROGRESS'] } },
        include: { author: true }
    })
    res.json(tasks)
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    const task = await prisma.task.findUnique({
        where: { id: Number(id) },
    })
    res.json(task)
})

router.post('/create', async (req, res) => {
    const { title, content, authorEmail } = req.body
    const result = await prisma.task.create({
        data: {
            title,
            content,
            status: "NEW",
            author: { connect: { email: authorEmail } }
        },
    })
    res.json(result)
})

router.put('/:id/complete', async (req, res) => {
    const { id } = req.params
    const task = await prisma.task.update({
        where: { id: Number(id) },
        data: { status: "DONE" },
    })
    res.json(task)
})

router.delete('/:id/delete', async (req, res) => {
    const { id } = req.params
    const task = await prisma.task.delete({
        where: { id: Number(id) },
    })
    res.json(task)
})

export default router; // module.exports = router
