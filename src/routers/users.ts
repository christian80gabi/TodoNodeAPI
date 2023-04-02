import { PrismaClient } from "@prisma/client";
import express from 'express';

const prisma = new PrismaClient();
const router = express.Router();

// Users

router.get('', async (req, res) => {
    const users = await prisma.user.findMany()
    res.json(users)
})

router.post('/create', async (req, res) => {
    const result = await prisma.user.create({
        data: { ...req.body },
    })
    res.json(result)
})

module.exports = router
