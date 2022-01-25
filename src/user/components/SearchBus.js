export default function SearchBus(){
    return(
        <>
        <div class="w-full">
    <div class="bg-gradient-to-b from-blue-600 to-blue-600 h-96"></div>
    <div class="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
        <div class="bg-white w-full shadow-xl rounded-xl p-8 sm:p-12 -mt-24">
            <p class="text-3xl font-bold leading-7 text-center">Search Buses</p>
            <form action="" method="post">
                <div class="md:flex items-center mt-12">
                    <div class="w-full md:w-1/3 flex flex-col">
                        <input type="text" placeholder="Source" class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" />
                    </div>
                    <div class="w-full md:w-1/3 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <input type="text" placeholder="Destination" class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"/>
                    </div>
                    <div class="w-full md:w-1/3 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <input type="text" placeholder="Date" class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"/>
                    </div>
                </div>
                <div class="flex items-center justify-center w-full">
                    <button class="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                        Search
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
{/* Card */}
<div class="mx-auto px-6 sm:px-6 lg:px-8 mb-12">
        <div class="bg-white w-full shadow-xl rounded-xl p-8 sm:p-12">
            <div class="flex">
                <div>
                    <span class="text-3xl font-bold">Dwarka-Dakor</span><br></br>
                    <span class="text-xl">Express</span>
                </div>
                <div class="flex-1 text-center text-xl">
                    <span>6:00 am ---- 10hrs ---- 9:00 pm</span>
                </div>
                <div class="flex-1 text-right text-xl">
                    <span>Rs.198</span><br></br>
                    <button>Book Now</button>
                </div>
            </div>
        </div>
        </div>
</>
    )
}