## System requirements

- NodeJS (v20)
- Postgres database

## Tech stack

- NextJS for both front end and back end, enabled server-side rendering
- tRPC for API
- Database PostgreSQL with Prisma ORM to interact with database

## Getting Started

Create an .env file and update the variable below

```
DATABASE_URL=
```

If you need add some data to database, run the command below

```
npx tsx prisma/seed.ts
```

Install dependencies

```
npm install
```

Run the development server:

```bash
npm run dev
```

## Open the website

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Vercel

You can also get the online demo version here: https://seoulcomix-challenge-7kr14v4dh-nhatnguyen95s-projects.vercel.app/
