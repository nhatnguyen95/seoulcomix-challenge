import { trpc } from "../utils/trpc";
export default function Home() {
  const restaurants = trpc.getRestaurants.useQuery();
  console.log("restaurants", restaurants.data);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-4 text-center bg-blue-500 text-white sm:p-8 sm:text-left">
        Mobile Header
      </header>
      <main className="p-4 flex-1 bg-white ">
        {restaurants.data?.length} ss
      </main>
      <footer className="p-4 text-center bg-gray-200 sm:p-8">
        Mobile Footer
      </footer>
    </div>
  );
}
