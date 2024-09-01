import dotenv from 'dotenv';
dotenv.config();
import { OpenAI } from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});
console.log(process.env.OPENAI_API_KEY); 
async function main() {
    try {
        const chatCompletion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                { role: "user", content: "What is the capital of India?" }
            ],
        });
        console.log(chatCompletion.choices[0].message.content);
    } catch (error) {
        console.error('Error:', error);
    }
}

main();
