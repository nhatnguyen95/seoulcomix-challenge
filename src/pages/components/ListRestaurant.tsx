import { trpc } from "@/utils/trpc";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import Image from "next/image";
import React from "react";
import StarsIcon from "@/assets/icons/starts.svg";
import Star from "@/assets/icons/star-icon.svg";
import Favorite from "@/assets/icons/favorite.svg";
import { cn } from "@/lib/utils";

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
  featured: { text: string } | null;
  createdAt: string;
  updatedAt: string;
};

const ListRestaurantItem: React.FC<{
  item: RestaurantItem;
  refetchList: () => void;
}> = ({ item, refetchList }) => {
  const favoriteMutation = trpc.addFavorite.useMutation({
    onSuccess: () => refetchList(),
  });
  const handleFavorite = async () => {
    await favoriteMutation.mutateAsync({
      id: item.id,
      isFavorite: !item.isFavorite,
    });
  };
  return (
    <div className="relative">
      <Image
        onClick={handleFavorite}
        className={cn(
          "absolute justify-end flex right-2 top-2",
          item.isFavorite && "bg-red-400 rounded-full"
        )}
        src={Favorite}
        alt="favorite-icon"
      />

      <div className="flex flex-col flex-wrap">
        <div
          style={{ width: 370, height: 200 }}
          className="overflow-hidden rounded-xl"
        >
          <Image
            src={item.images[0]}
            alt={item.name}
            width={400}
            height={200}
          />
        </div>
        {item.featured && (
          <div className="mt-2 flex flex-row space-x-2">
            <Image src={StarsIcon} alt="stars-icon" />
            <span className="text-orange-400">{item.featured?.text}</span>
          </div>
        )}
        <div className="flex flex-row justify-between flex-wrap">
          <span className="font-bold line-clamp-1 w-3/4">{item.name}</span>
          <div className="flex flow-row space-x-2 items-center">
            <Image src={Star} alt="star-icon" />
            <span className="text-sm ">
              {item.rating} ({item.ratingCount})
            </span>
          </div>
        </div>
        <span className="mt-1">{item.description}</span>
      </div>
    </div>
  );
};

const ListRestaurant: React.FC = () => {
  const { data, isLoading, refetch } = trpc.getRestaurants.useInfiniteQuery(
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

  return (
    <ScrollArea>
      <div className="space-y-8">
        {dataShowing.map((item) => (
          <ListRestaurantItem item={item} key={item.id} refetchList={refetch} />
        ))}
      </div>
    </ScrollArea>
  );
};

export default ListRestaurant;
