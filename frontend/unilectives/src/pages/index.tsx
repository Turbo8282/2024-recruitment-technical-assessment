import SideBar from "@/components/sidebar";
import SearchBar from "@/components/searchbar";
import CourseCards from "@/components/coursecards";
import { useState } from "react";
import DropDown from "@/components/dropdown";

export default function Home() {

  const [unilectives, setUnilectives] = useState(false);
  return (
    <div className="h-screen">
      <SideBar />
      <div className="flex flex-row w-full justify-center items-center pt-24">
        <div className="flex flex-row w-5/6 space-y-0 justify-between items-left md:space-y-4 md:flex-col md:items-center">
          <div className="flex flex-col w-full gap-3">
            <h1 className="drop-shadow-md text-base sm:text-sm">DevSoc presents</h1>
            <div className="w-fit">
              <div onClick={() => setUnilectives(unilectives => !unilectives)}>
                {!unilectives && <h1 className="justify-center font-bold text-unilectives-color text-7xl sm:text-7xl w-fit">unilectives</h1>}
                {unilectives && <h1 className="justify-center font-bold text-rose-400 text-7xl sm:text-7xl w-fit">unilectives</h1>}
              </div>
            </div>
            
            <p className="justify-center font-bold text-base sm:text-sm">Your one-stop shop for UNSW course and elective reviews.</p>
            
            <SearchBar />
            <DropDown />
            <CourseCards />

          </div>
        </div>
      </div>
    </div>
    
  );
}
