import { procedure, router } from "../trpc";
import { prisma } from "@/utils/prisma";
import { z } from "zod";

export const appRouter = router({
  getRestaurants: procedure.query(async () => {
    const restaurants = await prisma.restaurant.findMany();
    return restaurants;
  }),
  addFavorite: procedure
    .input(
      z.object({
        id: z.string(),
        isFavorite: z.boolean(),
      })
    )
    .mutation(async ({ input }) => {
      const { id, isFavorite } = input;
      return await prisma.restaurant.update({
        where: { id },
        data: { isFavorite },
      });
    }),
});

export type AppRouter = typeof appRouter;
