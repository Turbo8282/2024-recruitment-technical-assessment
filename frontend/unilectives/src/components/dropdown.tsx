import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function DropDown() {
    return (
        <form className="flex justify-start items-center relative ">
            <input placeholder="Sort by" data-form-type="other" className="cursor-pointer bg-white py-2 px-4 text-left border 
            rounded-md shadow-review-card aria-expanded:border-b-transparent aria-expanded:rounded-b-none 
            p-1 text-l ml-1 relative inline w-44 font-light border-2 rounded shadow-sm" />
            <span className="pointer-events-none absolute left-36">
                <ChevronDownIcon className="h-4 w-4" aria-hidden="true" />
            </span>
        </form>
    )
}
