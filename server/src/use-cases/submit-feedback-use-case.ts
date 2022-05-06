import { MailAdapter } from "../adapters/mail-adapters";
import { FeedbackRepositories } from "../repositores/feedbacks-repository";

interface SubmitFeedbackUseCaseRequest{
    type : string;
    comment : string;
    screenshot? : string;
}

export class SubmitFeedbackUseCase{

    constructor(private feedbackRepository : FeedbackRepositories, private mailAdapter : MailAdapter){
        this.feedbackRepository = feedbackRepository;
    }

    async execute(request : SubmitFeedbackUseCaseRequest){
        const {type, comment, screenshot} = request;

        if (!type){
            throw new Error('Type is required');
        }

        if (screenshot && ! screenshot.startsWith("data:image/png;base64")){
            throw new Error("kkkkk pode n ")
        }

        if(!comment){
            throw new Error('Comment is required');
        }

        await this.feedbackRepository.create({type, comment, screenshot});
        
        await this.mailAdapter.sendMail({
            subject : "Feedback de usuário",
            body : [`
            <div>
            <div> Tópico: ${type} </div>`,
            `<div> Comentário:  ${comment} </div>`,
           screenshot ? `<img src="${screenshot}"/>` : null, 
            `</div>` ].join('\n')
        });
        }
    
    }
