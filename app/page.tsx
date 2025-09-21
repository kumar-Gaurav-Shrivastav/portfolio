import Image from "next/image";
import Hero from "./components/hero";
import Details from "./components/details";
import RecentProject from "./components/recentProject";
import MyWorkExperience from "./components/myWorkExperience";
import Testimony from "./components/testimony";

export default function Home() {
  return (
    <main className="relative bg-[#000319] flex items-center justify-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full text-white">
        <Hero />
        <Details />
        <RecentProject />
        <MyWorkExperience />
        <Testimony />
      </div>
    </main>
  );
}
