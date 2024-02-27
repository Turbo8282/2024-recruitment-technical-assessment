import Image from "next/image"
import { useState } from "react";

export default function SearchBar() {
    const [showModal, setShowModal] = useState(false);
   
    return (
        <div onClick={() => setShowModal(showModal => !showModal)}>
            <form className="flex justify-start items-center pt-6 relative ">
                <input placeholder="Search for a course e.g. COMP1511" data-form-type="other" className="cursor-pointer bg-white py-2 px-4 text-left focus:border-blue-800 p-1 text-xl ml-1 relative inline w-full font-light border-2 border-line-color placeholder-line-color rounded" />
                
                    {showModal && <div className="fixed w-2/5 bg-white border-black border-2 top-10 left-0 right-0 bottom-10 mx-auto"></div>}
            </form>
        </div>

        
    )
}