const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

//Creating instances
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: true,
    args: ["--no-sandbox", "--disable-gpu"],
  },
  webVersionCache: {
    type: "remote",
    remotePath:
      "https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html",
  },
});

//Initializing GenAI model
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

//Function to generate reponse from AI model and reply to user
async function generate(prompt, message) {
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  await message.reply(text); //Reply to user
}

//All event listener to know client status
client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("authenticated", () => {
  console.log("Client is authenticated!");
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("disconnected", () => {
  console.log("Client is disconnected!");
});

client.on("auth_failure", () => {
  console.log("Client is auth_failure!");
});

client.on("message", async (message) => {
  if (message.body.includes(".bot")) {
    var query;
    //Extracting text from message body using regular expression method
    const regxmatch = message.body.match(/.bot(.+)/);

    //If no text followed by .bot then we use "Hi" as text
    if (regxmatch) {
      query = regxmatch[1];
    } else {
      console.log("No regex match!");
      query = "Hi";
    }

    //Call the generate function
    generate(query, message);
  }
});

client.initialize();
