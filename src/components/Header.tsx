import logoImage from "@/assets/logo.svg";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <div className="flex flex-col bg-amber-600 h-[32vh] w-full pb-8">
      <div className="flex flex-row justify-between items-center p-8 pr-16">
        <img src={logoImage} className="w-36 h-36" />

        <div className="flex flex-col gap-4 justify-center items-end">
          <div className="flex flex-row gap-4 font-semibold text-xl">
            <p className="underline">Calendar</p>
            <p>Jobs</p>
            <p>Contact Us</p>
            <Search />
          </div>
          <div className="flex flex-row gap-4 font-bold text-3xl">
            <p>Locations</p>
            <p>Services</p>
            <p>Projects</p>
            <p>Government</p>
            <p>News</p>
          </div>
        </div>
      </div>

      <div className="pl-48">
        <h2 className="font-semibold text-xl">Home</h2>
        <h1 className="text-[4rem] font-bold">Events</h1>
      </div>
    </div>
  );
};

export default Header;
