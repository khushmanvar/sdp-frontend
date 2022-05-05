import React from 'react'
import DATA from "../../data/data";
import { useNavigate } from "react-router-dom";
import { data } from 'autoprefixer';

export default function SearchBuses() {
  const imgurl =
    "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
  const navigate = useNavigate();
  const [dept, setDept] = React.useState('');
  const [arr, setArr] = React.useState('');
  const city = ["Ahmedabad", "Rajkot", "Vadodara"];
   
  function getTime(dept, arri) {
    if (dept == "Ahmedabad" && arri == "Ahmedabad") return 0
    if (dept == "Ahmedabad" && arri == "Rajkot") return 5
    if (dept == "Ahmedabad" && arri == "Vadodara") return 2
    if (dept == "Rajkot" && arri == "Ahmedabad") return 5
    if (dept == "Rajkot" && arri == "Rajkot") return 0
    if (dept == "Rajkot" && arri == "Vadodara") return 8
    if (dept == "Vadodara" && arri == "Ahmedabad") return 2
    if (dept == "Vadodara" && arri == "Rajkot") return 8
    if (dept == "Vadodara" && arri == "Vadodara") return 0
   }
  return (
    <div class="bg-gray-100">
      <div class="w-full">
        <div
          style={{ backgroundImage: `url(${imgurl})` }}
          className="h-64 w-full"
        ></div>
        <div class="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
          <div class="bg-white w-full shadow-xl rounded-xl p-8 sm:p-12 -mt-24">
            <p class="text-3xl font-bold leading-7 text-center">Search Buses</p>
            <div>
              <div class="md:flex items-center mt-12">
                <div class="w-full md:w-1/3 flex flex-col">
                  <select onChange={(e) => setDept(e.target.value)} class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200">
                  <option>Select Departure</option>
                    {city.map(city => (
                      <option>{city}</option>
                    ))}
                  </select>
                </div>
                <div class="w-full md:w-1/3 flex flex-col">
                  <select onChange={(e) => setArr(e.target.value)} class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200">
                    <option>Select Destination</option>
                    {city.map(city => (
                      <option>{city}</option>
                    ))}
                  </select>
                </div>
                <div class="w-full md:w-1/3 flex flex-col md:ml-6 md:mt-0 mt-4">
                  <input
                    type="date"
                    placeholder="Date"
                    class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
                    onChange={e => console.log(e.target.value)}
                  />
                </div>
              </div>
              <div class="flex items-center justify-center w-full">
                <button
                  onClick={() => window.scrollBy(0, 300)}
                  class="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg mt-24 border shadow-lg p-5 mx-10 my-10">
          <div>
            <div class="grid grid-cols-5 text-center">
              <div class="">
                <div class="flex justify-start">
                  <p class="text-3xl mt-4">
                    {dept}-{arr}
                  </p>
                </div>
                <p class="flex justify-start text-lg text-gray-500">Express</p>
              </div>
              <div class="col-span-3">
                <div class="grid grid-cols-3">
                  <p class="text-xl mt-4">3:00 pm</p>
                  <p class="text-lg text-gray-500 mt-4">
                    ----- {getTime(dept, arr)} hrs -----
                  </p>
                  <p class="text-xl mt-4">6:00 pm</p>
                </div>
              </div>
              <p class="text-xl mt-4 mr-4 flex justify-end">Rs. {getTime(dept, arr)*100}</p>
            </div>
            <div class="grid grid-cols-2">
              <p class="text-xl text-gray-500 mt-4 justify-start text-start">
                23 Seats Available
              </p>
              <div class="text-2xl text-gray-500 flex justify-end">
                <button
                  onClick={() =>
                    navigate("/prebook", {
                      state: {
                        bid: 'b103',
                        dept: dept,
                        arr: arr,
                        time: 6,
                        fare: 6 * 9,
                      },
                    })
                  }
                  class="bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white font-semibold font-sans"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
