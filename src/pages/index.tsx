import SearchInput from "@/pages/components/SearchBar";
import { trpc } from "../utils/trpc";
import TabBar from "./components/TabBar";
import BottomTab from "./components/BottomTab";
export default function Home() {
  const restaurants = trpc.getRestaurants.useQuery();
  console.log("restaurants", restaurants.data);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 text-foreground">
      <div className="w-[400px] flex flex-col min-h-screen bg-card">
        <header className="p-4 text-center  text-white sm:p-8 sm:pb-0 sm:text-left">
          <SearchInput
            onSearch={() => {}}
            placeholder="맛집 이름을 검색해보세요"
          />
        </header>
        <main className="p-4 flex-1 bg-white flex flex-col ">
          <TabBar />
          {restaurants.data?.length} ss
        </main>
        <footer className="p-4 text-center  sm:p-8">
          <BottomTab />
        </footer>
      </div>
    </div>
  );
}
