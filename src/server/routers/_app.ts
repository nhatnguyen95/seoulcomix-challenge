import { z } from "zod";
import { procedure, router } from "../trpc";
import { prisma } from "@/utils/prisma";
export const appRouter = router({
  getRestaurants: procedure.query(async () => {
    const restaurants = await prisma.restaurant.findMany();
    return restaurants;
  }),
  hello: procedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query((opts) => {
      return {
        greeting: `helloaa ${opts.input.text} `,
      };
    }),
});

export type AppRouter = typeof appRouter;
