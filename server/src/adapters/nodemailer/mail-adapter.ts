import { MailAdapter, SendMailData } from "../mail-adapters";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
    user: "583fb945742f8d",
    pass: "0aea7a02a81c4d"
    }
});

export class NodemailerAdapter implements MailAdapter{


    async sendMail({subject, body} : SendMailData){
        transport.sendMail(
        {
            from : 'boa noite <sus@gmail.com>',
            to : 'sus sussy <sussysus@gmail.com>',
            subject : subject,
            html: body
        });
    }
}