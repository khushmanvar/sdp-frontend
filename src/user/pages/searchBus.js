export default function SearchBuses() {
    return(
      <div class="bg-gray-100">
      <div class="w-full">
    <div class="bg-gradient-to-b from-blue-600 to-blue-600 h-64"></div>
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
                        <input type="date" placeholder="Date" class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"/>
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

<div class="bg-white rounded-lg border shadow-lg p-5 mx-10 my-10">
      <div class="grid grid-cols-5 text-center">
      <div class="">
      <div class="flex">
        <p class="text-3xl mt-4">Dwarka-Dakor</p>
       </div>   
       <p class="flex justify-start text-lg text-gray-500">Express</p>
       </div> 
       <div class="col-span-3">
      <div class="grid grid-cols-3">
        <p class="text-xl mt-4">6:00 am</p>
        <p class="text-lg text-gray-500 mt-4">----- 10 hrs -----</p>
        <p class="text-xl mt-4">3:00 pm</p>
      </div>
      </div>
      <p class="text-xl mt-4 mr-4 flex justify-end">Rs. 198</p>
      </div>
      <div class="grid grid-cols-2">
      <p class="text-xl text-gray-500 mt-4 justify-start text-start">23 Seats Available</p>
      <div class="text-2xl text-gray-500 flex justify-end"><button class="bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white font-semibold font-sans">Book Now</button></div>
      </div>
      </div>

      <div class="bg-white rounded-lg border shadow-lg p-5 mx-10 my-10">
      <div class="grid grid-cols-5 text-center">
      <div class="">
      <div class="flex">
        <p class="text-3xl mt-4">Dwarka-Dakor</p>
       </div>   
       <p class="flex justify-start text-lg text-gray-500">Express</p>
       </div> 
       <div class="col-span-3">
      <div class="grid grid-cols-3">
        <p class="text-xl mt-4">6:00 am</p>
        <p class="text-lg text-gray-500 mt-4">----- 10 hrs -----</p>
        <p class="text-xl mt-4">3:00 pm</p>
      </div>
      </div>
      <p class="text-xl mt-4 mr-4 flex justify-end">Rs. 198</p>
      </div>
      <div class="grid grid-cols-2">
      <p class="text-xl text-gray-500 mt-4 justify-start text-start">23 Seats Available</p>
      <div class="text-2xl text-gray-500 flex justify-end"><button class="bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white font-semibold font-sans">Book Now</button></div>
      </div>
      </div>


      <div class="bg-white rounded-lg border shadow-lg p-5 mx-10 my-10">
      <div class="grid grid-cols-5 text-center">
      <div class="">
      <div class="flex">
        <p class="text-3xl mt-4">Dwarka-Dakor</p>
       </div>   
       <p class="flex justify-start text-lg text-gray-500">Express</p>
       </div> 
       <div class="col-span-3">
      <div class="grid grid-cols-3">
        <p class="text-xl mt-4">6:00 am</p>
        <p class="text-lg text-gray-500 mt-4">----- 10 hrs -----</p>
        <p class="text-xl mt-4">3:00 pm</p>
      </div>
      </div>
      <p class="text-xl mt-4 mr-4 flex justify-end">Rs. 198</p>
      </div>
      <div class="grid grid-cols-2">
      <p class="text-xl text-gray-500 mt-4 justify-start text-start">23 Seats Available</p>
      <div class="text-2xl text-gray-500 flex justify-end"><button class="bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white font-semibold font-sans">Book Now</button></div>
      </div>
        <hr class="mt-10"></hr>
      <div class="flex mt-10">
      <p class="text-2xl mr-4">No. of Passengers:</p>  
      <input class="bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="number"/>
      </div>  

      <div class="grid grid-cols-3 mt-4">
      <div class="flex mt-4 justify-start">
      <p class="text-2xl mr-4">Name:</p>  
      <input class="bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text"/>
      </div>  
      <div class="flex mt-4 justify-center">
      <p class="text-2xl mr-4">Seat No.</p>  
      <input class="bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="number"/>
      </div>  
      <div class="flex mt-4 justify-end">
      <p class="text-2xl mr-4">Mobile No.</p>  
      <input class="bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text"/>
      </div>  
      </div>  

      <div class="grid grid-cols-3 mt-4">
      <div class="flex mt-4 justify-start">
      <p class="text-2xl mr-4">Name:</p>  
      <input class="bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="number"/>
      </div>  
      <div class="flex mt-4 justify-center">
      <p class="text-2xl mr-4">Seat No.</p>  
      <input class="bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="number"/>
      </div>  
      <div class="flex mt-4 justify-end">
      <p class="text-2xl mr-4">Mobile No.</p>  
      <input class="bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="number"/>
      </div>  
      </div>  

    </div>
    </div>
    )
}