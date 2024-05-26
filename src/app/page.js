import Link from "next/link";

export default function Home() {
  return (
    <div className="grid place-content-center place-items-center h-screen">
      <h1>Welcome to Recipe App</h1>
      <Link href={"/recipe-list"}>Explore Recipes</Link>
    </div>
  );
}
