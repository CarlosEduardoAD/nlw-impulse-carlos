import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();


const submitFeedback = new SubmitFeedbackUseCase({ create: createFeedbackSpy }, { sendMail: sendMailSpy });

describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {

        await expect(submitFeedback.execute({
            type: 'bug',
            comment: 'test',
            screenshot: 'data:image/png;base64 sus sus sus sus sus sus'
        })).resolves.not.toThrow();

        it('should not be able to submit a feedback without type', async () => {
            await expect(submitFeedback.execute({
                type: '',
                comment: 'test',
                screenshot: 'data:image/png;base64 sus sus sus sus sus sus'
            })).rejects.toThrow();

            it('should not be able to submit a feedback without comment', async () => {
                await expect(submitFeedback.execute({
                    type: 'bug',
                    comment: '',
                    screenshot: 'data:image/png;base64 sus sus sus sus sus sus'
                })).rejects.toThrow();

            })
        })
    })
});