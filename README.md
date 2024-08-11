# AI Dashboard Design Shapes Trust and Transparency

This project is a [Next.js](https://nextjs.org/) application designed to emulate ChatGPT with an integrated transparency dashboard. It features an experimental dashboard that reveals ChatGPT's assumptions, leveraging a "Wizard of Oz" prototype to explore AI transparency. 

### Learn More
This project was developed by Amer Mriziq, Cynthia Chen, and Mingduo Zhao at UC Berkeley's School of Information.

You can read the  research behind this project in detailed here: [MIRROR Paper](https://mirroreffect.mriziq.com).

## Features
- Assumption Display: Shows the AI’s real-time assumptions about the user (the "user model").
- Wizard of Oz Prototype: Predefined assumptions simulate AI's user model.
- "Check Engine" Reliability Avatar: Dashboard is accessible via a clickable avatar. Change in color signals to users when to check dashboard.

## Getting Started

Before running the project, create a `.env` file in the root and add your OpenAI API Key.

```
OPENAI_API_KEY=
```

To start using this project locally, you can run the development server with the following commands:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

After starting the server, visit [http://localhost:3000](http://localhost:3000) in your web browser to interact with the application.


## Deployment

The project is hosted and deployed on the Vercel platform. You can visit the live application at [http://217a-hci-berkeley.vercel.app](http://217a-hci-berkeley.vercel.app).
