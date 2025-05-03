This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

To make app work you need create `.env` file with keys for ChatGPT and/or DeepSeek API, Clerk API and redirecting keys.

Next, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## ScrapeCraft

This is a great MVP for demonstrating my full-stack developer skills.

The app uses Typescript, Next.js, Tailwind CSS, shadcn/ui, React Query (now TanStack) for data fetching, React-Flow for draggable nodes UI and Prisma ORM technology stack.
Clerk for easy authentification.
Stripe for billing.

The UI is built around a `WYSIWYG` dragabble interface that allows the user to quickly scaffold data scraping flows and get the results in JSON format.

# Future plans

Have a system design diagramm to understand the whole picture

![Services Design](<services design.png>)

- Create a dedicated auth service with users DB (clustering and sharding to prevent faults and backup users) using Go. Though it may be not the best decision to mix and extend tech stack, but the main purpose is to proove my Go skills.

- Create a dedicated AI parsing service with Kubernetes cluster and load balancer to make app scalable and able to handle heavy lifting of multiple users.
