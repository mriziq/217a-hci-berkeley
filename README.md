# ChatGPT Clone with Experimental Dashboard

This project is a [Next.js](https://nextjs.org/) application developed using [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), designed to emulate a single-thread interaction with ChatGPT. It features an experimental dashboard that reveals ChatGPT's assumptions, leveraging a "Wizard of Oz" prototype to explore AI transparency. You can read the associated paper [here](https://mirroreffect.mriziq.com).

This project was developed by Amer Mriziq, Cynthia Chen, and Mingduo Zhao at UC Berkeley's School of Information.

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

You can also explore the live deployment of the project at [http://217a-hci-berkeley.vercel.app](http://217a-hci-berkeley.vercel.app).

To modify the application, you can edit the `app/page.tsx` file. Changes to the file will automatically update the app in your browser.

## Key Features

- **Single Chat Thread**: Experience a focused conversation with a ChatGPT-like model, allowing for a deeper exploration of topics in a controlled environment.
- **Experimental Dashboard**: The sidebar dashboard provides insights into the "thought processes" of ChatGPT by displaying assumptions about the user. This feature is controlled by the `wizOfOz.json` file, where displayed metrics are predefined, illustrating a "Wizard of Oz" setup.
- **Font Optimization**: Utilizing [`next/font`](https://nextjs.org/docs/basic-features/font-optimization), the project dynamically handles the loading of the Inter font from Google Fonts, ensuring optimal performance and style.

## Learn More

For those interested in expanding their knowledge about Next.js and its capabilities, consider exploring the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Comprehensive documentation on Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - An interactive tutorial that guides you through building projects with Next.js.

Feel free to dive into the [Next.js GitHub repository](https://github.com/vercel/next.js/) to contribute or provide feedback.

## Deployment

The project is hosted and deployed on the Vercel platform. You can visit the live application at [http://217a-hci-berkeley.vercel.app](http://217a-hci-berkeley.vercel.app).

For more information on deploying Next.js applications, refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment).
