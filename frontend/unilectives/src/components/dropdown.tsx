import Image from "next/image"
export default function DropDown() {
   
    return (
        <form className="flex justify-start items-center relative ">
            <input placeholder="Sort by" data-form-type="other" className="cursor-pointer bg-white py-2 px-4 text-left border border-unilectives-subheadings rounded-md shadow-review-card aria-expanded:border-b-transparent aria-expanded:rounded-b-none p-1 text-xl ml-1 relative inline w-44 font-light border-2 rounded shadow-sm" />
            
            
        </form>
        
    )
}