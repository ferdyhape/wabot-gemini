# WABot Gemini

## :open_book: Description

Actually this is not a meaningful project, it's just that I'm bored then I want to make a bot on whatsapp.

<!-- Main library used is [whatsapp-web.js]( -->

## :package: Built With

- [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js.git)
- [qrcode-terminal](https://github.com/gtanner/qrcode-terminal.git)
- [aistudio (By Google)](aistudio.google.com)

## :hammer_and_wrench: Requirements

- Node.js v18+

## :rocket: How to Install

1. Create API Key on [aistudio](https://aistudio.google.com/app/apikey)
2. Clone this repository
   ```bash
    git clone https://github.com/ferdyhape/wabot-gemini.git
   ```
3. Go to the project directory and install the dependencies
   ```bash
    cd wabot-gemini
    npm install
   ```
4. Copy `.env.example` to `.env` and paste your API Key to `GEMINI_API_KEY`
   ```bash
    cp .env.example .env
   ```
   ```env
    GEMINI_API_KEY = "YOUR_API_KEY"
   ```
5. Run the project
   ```bash
    npm start
   ```
6. Scan the QR Code on your WhatsApp Web (You can see the QR Code on your terminal)
7. Reference on [index.js](https://github.com/ferdyhape/wabot-gemini/blob/main/index.js), to use the bot you can send a message to your WhatsApp number with the format:
   ```bash
    .bot <message>
   ```
   Example:
   ```bash
    .bot Hello, what's up?
   ```
8. The bot will reply to your message
9. Enjoy!

## :man: About Creator

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://www.ferdyhape.site/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ferdy-hahan-pradana)
[![instagram](https://img.shields.io/badge/instagram-833AB4?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/ferdyhape)
[![github](https://img.shields.io/badge/github-333?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ferdyhape)
