import Image from "next/image";
import { Inter } from "next/font/google";
import SideBar from "@/components/sidebar";
import SearchBar from "@/components/searchbar";
import CourseCards from "@/components/coursecards";
import { useState } from "react";
import DropDown from "@/components/dropdown";

export default function Home() {

  const [unilectives, setUnilectives] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="h-screen">
      <SideBar />
      <div className="flex flex-row w-full justify-center items-center pt-44">
        <div className="flex flex-row w-5/6 space-y-0 justify-between items-left md:space-y-4 md:flex-col md:items-center">
          <div className="flex flex-col w-full gap-3">
            <h1 className="drop-shadow-md text-base sm:text-sm">Devsoc presents</h1>
            <div onClick={() => setUnilectives(unilectives => !unilectives)}>
              {!unilectives && <h1 className="justify-center font-bold text-unilectives-color text-7xl sm:text-5xl">unilectives</h1>}
              {unilectives && <h1 className="justify-center font-bold text-rose-400 text-7xl sm:text-5xl">unilectives</h1>}
            </div>
            <p className="justify-center font-bold text-base sm:text-sm">Your one-stop shop for UNSW course and elective reviews.</p>
            <div onClick={() => setShowModal(true)}>
              <SearchBar />

            </div>
            <DropDown />
            <CourseCards />
            

          </div>
        </div>
      </div>
    </div>
    
  );
}
