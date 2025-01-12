import { trpc } from "@/utils/trpc";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import Image from "next/image";
import React from "react";

type RestaurantItem = {
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

const ListRestaurantItem: React.FC<{ item: RestaurantItem }> = ({ item }) => {
  return (
    <div className="flex flex-col gap-4">
      <div
        style={{ width: 370, height: 200 }}
        className="overflow-hidden rounded-xl"
      >
        <Image src={item.images[0]} alt={item.name} width={400} height={200} />
      </div>
      <span>{item.name}</span>
    </div>
  );
};

const ListRestaurant: React.FC = () => {
  const { data, isLoading } = trpc.getRestaurants.useInfiniteQuery(
    {
      limit: 10,
    },
    {
      getNextPageParam: (lastPage: { nextCursor: never }) =>
        lastPage.nextCursor,
    }
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }
  const dataShowing = data?.pages.map((page) => page?.restaurants).flat() ?? [];

  console.log("data", dataShowing);
  return (
    <ScrollArea>
      {dataShowing.map((item) => (
        <ListRestaurantItem item={item} key={item.id} />
      ))}
    </ScrollArea>
  );
};

export default ListRestaurant;
