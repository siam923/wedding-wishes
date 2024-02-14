import WishForm from "@/components/WishForm";
import { create } from "./actions/wishAction";
import WishList from "@/components/WishList";
import { getWishes } from "@/lib/datafromdb";
import BackgroundMusic from "@/components/BackgroundMusic";

export default async function Home() {
  const data = await getWishes();
  console.log(data);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-br from-pink-300 via-red-100 to-yellow-100">
      <BackgroundMusic />
      <h1 className="mt-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-800 mb-8">
        Wedding Wishes
      </h1>
      <WishForm action={create} />

      {data && <WishList wishes={data} />}
    </main>
  );
}
