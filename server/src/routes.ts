import { prisma } from './prisma';
import express from 'express';
import nodemailer from 'nodemailer';
import { PrismaFeedbacksRepository } from './repositores/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';
import { NodemailerAdapter } from './adapters/nodemailer/mail-adapter';

export const routes = express.Router();

routes.post('/feedbacks', async (req, res) => {
    const {type, comment, screenshot} = req.body
    try{
    const nodemailerMailAdapter = new NodemailerAdapter()
    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbacksRepository, nodemailerMailAdapter)

    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot
    });
    
    return res.status(201).send();
    
    }catch(err){
        console.log(err)
        return res.status(500).send()
    }
});