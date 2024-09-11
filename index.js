import OpenAI from 'openai';
import readline from 'readline';

const openai = new OpenAI({
  apiKey:process.env.OPENAI_API_KEY
});

const userInterface=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

userInterface.setPrompt("You: ")
userInterface.prompt();

userInterface.on("line",async (input)=>{
    await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content:input }]
      }).then((result) => {
        console.log("AI: ",result.data.choices[0].message.content);
        userInterface.prompt();
      }).catch((error) => {
        console.error(error);
      });
      
})

