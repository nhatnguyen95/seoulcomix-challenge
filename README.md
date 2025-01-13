## Archivements

This is copied from Notion page for listing TODO tasks

### Frontend

1. **React and TypeScript**: The frontend should be built using React and TypeScript. ✅
2. **Restaurant List**: Display a list of restaurants identical to the provided Figma design. Each restaurant should have a name, description, rating, and an image. ✅
3. **Mark as Favorite**: Allow users to mark a restaurant as a favorite. Favorites should be indicated with a heart icon. ✅

### Backend

1. **TRPC**: The backend should be built using TRPC. If you are using nextjs, use edge functions to serve trpc endpoint. ✅
2. **Database**: Use PostgreSQL to store restaurant data. ✅
3. **Prisma ORM**: Use Prisma as the ORM for database interactions. ✅
4. **Mock Data**: Use the provided mock data for the restaurant list. This data should be stored in the PostgreSQL database. ✅
5. **API Endpoints**: Implement the following TRPC procedures: ✅
   - `getRestaurants`: Retrieve all restaurants
   - `addFavorite`: Mark a restaurant as a favorite

### Evaluation Criteria

1. **Code Quality**: Clean, readable, and well-organized code. (Unsured because don't have many features to show)
2. **Functionality**: The application should meet all the functional requirements.✅
3. **User Interface**: A simple and user-friendly interface identical to the provided design.✅
4. **Best Practices**: Use of best practices in React, TypeScript, Node.js, and database management.✅
5. **Bonus Points**: Use of Next.js for server-side rendering.✅

## Setup project

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
