export default function LiveBook(){
    return(
        <>
        <div class="w-full">
    <div class="bg-gradient-to-b from-blue-600 to-blue-600 h-96"></div>
    <div class="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
        <div class="bg-white w-full shadow-xl rounded-xl p-8 sm:p-12 -mt-64">
            <p class="text-3xl font-bold leading-7 text-center">Live Ticket Booking</p>
            <form action="" method="post">
              <div class="grid grid-cols-2 mt-10">
                  <div>
                    <img class="mb-3 w-52 h-52 rounded-3xl shadow-lg mx-auto" src="https://www.investopedia.com/thmb/ZG1jKEKttKbiHi0EkM8yJCJp6TU=/1148x1148/filters:no_upscale():max_bytes(150000):strip_icc()/qr-code-bc94057f452f4806af70fd34540f72ad.png" alt="product designer" />
                  </div>
                  <div class="text-center">
                  <p class="text-2xl mt-10 mb-4">Scan QR-Code in your bus <br></br>to start booking your ticket</p>
                  <button class="bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white font-semibold font-sans">Scan Now</button>
                  </div>
              </div>

              <div class="grid grid-cols-3">
                <hr class="mt-10"></hr>
                <p class="justify-center text-center mt-5 text-3xl">OR</p>
                <hr class="mt-10"></hr>
              </div>

              <div class="flex mt-10 justify-center">
      <p class="text-2xl mr-4 text-center">Enter Bus Number:</p>  
      <input class="bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text"/>
      </div> 
                <div class="flex items-center justify-center w-full">
                    <button class="mt-9 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white font-semibold font-sans">
                        Search
                    </button>
                </div>
            </form>
        </div>
    </div>
    </div>

{/*<div class="h-screen bg-slate-50 flex justify-center items-center w-full">
  <form>
    <div class="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-xl">
    <p class="text-3xl mr-4 text-bold">Dwarka-Dakor</p>
    <p class="text-xl mr-4 text-gray-500 text-bold mb-7">Express</p>
      <div class="space-y-6">
      
        <div>
          <label for="email" class="block mb-1 text-gray-600 font-semibold">Source</label>
          <input type="text" class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
        <div>
          <label for="email" class="block mb-1 text-gray-600 font-semibold">Destination</label>
          <input type="text" class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
        <div>
          <label for="email" class="block mb-1 text-gray-600 font-semibold">Mobile No.</label>
          <input type="text" class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
        <div>
          <label for="email" class="block mb-1 text-gray-600 font-semibold">No. of Passengers</label>
          <input type="text" class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
        <div>
          <label for="email" class="block mb-1 text-gray-600 font-semibold">Mode of Payment</label>
          <div class="flex">
          <div class="form-check form-check-inline mr-10">
    <input class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
    <label class="form-check-label inline-block text-gray-800" for="inlineRadio10">Cash</label>
  </div>
  <div class="form-check form-check-inline">
    <input class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
    <label class="form-check-label inline-block text-gray-800" for="inlineRadio20">Card</label>
  </div>
  </div>
        </div>
        <div>
          <label for="email" class="block mb-1 text-gray-600 font-semibold">Total Fare</label>
          <input type="text" class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
      </div>
      <button class="mt-8 w-full bg-yellow-500 font-semibold py-2 rounded-md  tracking-wide">Book</button>
    </div>
  </form>
    </div>*/}
        </>
    )
}