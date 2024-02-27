import Image from "next/image";
import {
    BookOpenIcon,
    ShieldCheckIcon,
    UserCircleIcon,
    BarsArrowUpIcon,
    MoonIcon,
    ArrowRightEndOnRectangleIcon,
} from "@heroicons/react/24/outline";

  export default function SideBar() {
    return (
        <div className="fixed flex flex-col items-center w-20 h-screen gap-4 p-4 duration-150 bg-gray-50 z-50 xs:p-2 xs:w-15 xs:gap-2">

            {/* Unilectives logo */}
            <div className="flex flex-row items-center justify-between h-10 p-2">
                <Image
                        src="/unilectives.svg"
                        alt="unilectives icon"
                        width={33}
                        height={33}
                />  
            </div>
            
            
            {/* Navbar container */}
            <div className="flex flex-col h-full w-full justify-between border-t-2 border-gray-200">
                {/* Top half */}
                <div className="flex flex-col gap-3 py-3">
                    <BookOpenIcon className="w-12 h-12 p-3 hover:bg-slate-200 rounded-xl" />
                    <ShieldCheckIcon className="w-12 h-12 p-3 hover:bg-slate-200 rounded-xl" />

                </div>
                
                {/* Bottom half */}
                <div className="flex flex-col gap-4 py-2">
                    <BarsArrowUpIcon className="w-12 h-12 p-3 rotate-90 hover:bg-slate-200 rounded-xl cursor-pointer" />
                    <UserCircleIcon className="w-12 h-12 p-3 hover:bg-slate-200 rounded-xl cursor-pointer" />
                    <MoonIcon className="w-12 h-12 p-3 hover:bg-slate-200 rounded-xl cursor-default" />
                    <ArrowRightEndOnRectangleIcon className="w-12 h-12 p-3 hover:bg-slate-200 rounded-xl cursor-default" />
                </div>
                
            </div>
            
        </div>
    )
}