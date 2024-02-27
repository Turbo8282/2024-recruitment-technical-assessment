import Image from "next/image"
export default function CourseCards() {
   
    return (
        <div className="grid grid-rows-2 grid-cols-3 gap-12 mt-10 w-full items-center">
            {/* Row 1 */}

            {/* Col 1 */}
            <div className="box-border px-6 py-7 bg-unilectives-card hover:bg-gray-100 shadow-lg rounded-xl space-y-2 cursor-pointer">
                <div className="flex flex-wrap justify-between text-2xl gap-x-4">
                    <h2 className="font-bold">COMP1511</h2>
                    <div>
                        <span aria-label="rating" className="text-violet-400">★★★★★</span>
                        <p className="text-xs">69 reviews</p>
                    </div>

                </div>
                <p>Programming Fundamentals</p>
                <div className="pt-10">
                    <span className="bg-term-color text-sm px-2 pb-1 rounded-xl mr-2">Term 1</span>
                    <span className="bg-term-color text-sm px-2 pb-1 rounded-xl mr-2">Term 2</span>
                    <span className="bg-term-color text-sm px-2 pb-1 rounded-xl mr-2">Term 3</span>
                </div>
            </div>

            {/* Col 2 */}
            <div className="box-border px-6 py-7 bg-unilectives-card hover:bg-gray-100 shadow-lg rounded-xl space-y-2 cursor-pointer">
                <div className="flex flex-wrap justify-between text-2xl gap-x-4">
                    <h2 className="font-bold">COMP1531</h2>
                        <div>
                            <span aria-label="rating" className="text-violet-400">★★★★★</span>
                            <p className="text-xs">47 reviews</p>
                        </div>
                </div>
                <p>Software Engineering Fundamentals</p>
                <div className="pt-10">
                    <span className="bg-term-color text-sm px-2 pb-1 rounded-xl mr-2">Term 1</span>
                    <span className="bg-term-color text-sm px-2 pb-1 rounded-xl mr-2">Term 2</span>
                    <span className="bg-term-color text-sm px-2 pb-1 rounded-xl mr-2">Term 3</span>
                </div>

            </div>

            {/* Col 3 */}
            <div className="box-border px-6 py-7 bg-unilectives-card hover:bg-gray-100 shadow-lg rounded-xl space-y-2 cursor-pointer">
                <div className="flex flex-wrap justify-between text-2xl gap-x-4">
                <h2 className="font-bold">COMP1521</h2>
                    <div>
                        <span aria-label="rating" className="text-violet-400">★★★★★</span>
                        <p className="text-xs">40 reviews</p>
                    </div>
                </div>
                <p>Computer Systems Fundamentals</p>
                <div className="pt-10">
                    <span className="bg-term-color text-sm px-2 pb-1 rounded-xl mr-2">Term 1</span>
                    <span className="bg-term-color text-sm px-2 pb-1 rounded-xl mr-2">Term 2</span>
                    <span className="bg-term-color text-sm px-2 pb-1 rounded-xl mr-2">Term 3</span>
                </div>
            </div>

            {/* Row 2 */}

            {/* Col 1 */}
            <div className="box-border px-6 py-7 bg-unilectives-card hover:bg-gray-100 shadow-lg rounded-xl space-y-2 cursor-pointer">
                <div className="flex flex-wrap justify-between text-2xl gap-x-4">
                <h2 className="font-bold">COMP2521</h2>
                    <div>
                        <span aria-label="rating" className="text-violet-400">★★★★★</span>
                        <p className="text-xs">36 reviews</p>
                    </div>
                </div>
                <p>Data Structures and Algorithms</p>
                <div className="pt-10">
                    <span className="bg-term-color text-sm px-2 pb-1 rounded-xl mr-2">Summer</span>
                    <span className="bg-term-color text-sm px-2 pb-1 rounded-xl mr-2">Term 1</span>
                    <span className="bg-term-color text-sm px-2 pb-1 rounded-xl mr-2">Term 2</span>
                    <span className="bg-term-color text-sm px-2 pb-1 rounded-xl mr-2">Term 3</span>
                </div>
            </div>

            {/* Col 2 */}
            <div className="box-border px-6 py-7 bg-unilectives-card hover:bg-gray-100 shadow-lg rounded-xl space-y-2 cursor-pointer">
                <div className="flex flex-wrap justify-between text-2xl gap-x-4">
                <h2 className="font-bold">COMP2511</h2>
                    <div>
                        <span aria-label="rating" className="text-violet-400">★★★★★</span>
                        <p className="text-xs">33 reviews</p>
                    </div>
                </div>
                <p>Object-Oriented Design & Programming</p>
                <div className="pt-10">
                    <span className="bg-term-color text-sm px-2 pb-1 rounded-xl mr-2">Term 1</span>
                    <span className="bg-term-color text-sm px-2 pb-1 rounded-xl mr-2">Term 2</span>
                    <span className="bg-term-color text-sm px-2 pb-1 rounded-xl mr-2">Term 3</span>
                </div>
            </div>

            {/* Col 3 */}
            <div className="box-border px-6 py-7 bg-unilectives-card hover:bg-gray-100 shadow-lg rounded-xl space-y-2 cursor-pointer">
                <div className="flex flex-wrap justify-between text-2xl gap-x-4">
                <h2 className="font-bold">COMP3311</h2>
                    <div>
                        <span aria-label="rating" className="text-violet-400">★★★★★</span>
                        <p className="text-xs">33 reviews</p>
                    </div>
                </div>
                <p>Database Systems</p>
                <div className="pt-10">
                    <span className="bg-term-color text-sm px-2 pb-1 rounded-xl mr-2">Term 1</span>
                    <span className="bg-term-color text-sm px-2 pb-1 rounded-xl mr-2">Term 3</span>
                </div>
            </div>
              
        </div>
        
    )
}