import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbackRepositories } from "../feedbacks-repository";


export class PrismaFeedbacksRepository implements FeedbackRepositories{
    async create({type, comment, screenshot} : FeedbackCreateData){
        await prisma.feedback.create({
            data : {
                type,
                comment,
                screenshot, 
            }})
    };
}