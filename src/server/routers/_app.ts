import { procedure, router } from "../trpc";
import { prisma } from "@/utils/prisma";
import { z } from "zod";

export type Restaurant = {
  id: string;
  isFavorite: boolean;
  name: string;
  rating: number;
  ratingCount: number;
  category: string;
  city: string;
  description: string;
  images: string[];
  priceRange: string;
  featured: string | null;
  createdAt: string;
  updatedAt: string;
};

export const appRouter = router({
  getRestaurants: procedure
    .input(
      z.object({
        cursor: z.string().optional(),
        limit: z.number().min(1).max(50).default(10),
      })
    )
    .query<any>(async ({ input }) => {
      const { cursor, limit } = input;

      const restaurants = await prisma.restaurant.findMany({
        take: limit + 1,
        skip: cursor ? 1 : 0,
        cursor: cursor ? { id: cursor } : undefined,
        orderBy: { id: "asc" },
      });

      const hasMore = restaurants.length > limit;
      const nextCursor = hasMore
        ? restaurants[restaurants.length - 1].id
        : null;

      return {
        restaurants: restaurants.slice(0, limit),
        nextCursor,
      };
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
