import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";


export default function SearchBar() {
    const [showModal, setShowModal] = useState(false);
   
    return (
        <div onClick={() => setShowModal(showModal => !showModal)}>
            <form className="flex justify-start items-center pt-6 relative ">

                <input placeholder="Search for a course e.g. COMP1511" data-form-type="other" className="cursor-pointer 
                bg-white py-2 px-12 text-left focus:border-blue-800 p-1 text-l ml-1 relative inline w-full 
                font-light border-2 border-line-color placeholder-line-color rounded" />
                <button className="absolute pl-2">
                    <MagnifyingGlassIcon className="w-6 h-6 text-unilectives-search mx-2 text-line-color" />
                </button>
                    {showModal && <div className="fixed w-2/5 bg-white border-black border-2 top-10 left-0 right-0 bottom-10 mx-auto"></div>}
            </form>
        </div>
    )
}