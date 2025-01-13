import SearchInput from "@/pages/components/SearchBar";
import TabBar from "./components/TabBar";
import BottomTab from "./components/BottomTab";
import ListRestaurant from "./components/ListRestaurant";
export default function Home() {
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
          <ListRestaurant />
          <div className="h-40" />
        </main>
        <footer className="p-4 text-center sm:p-8 fixed block bottom-0 w-[400px] bg-white">
          <BottomTab />
        </footer>
      </div>
    </div>
  );
}
