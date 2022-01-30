import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Ticket from './ticket';
import Prebook from './prebook';

function Home1() {
   return <Prebook />
}

export default function Home() {
  const [name, setName] = useState("name"); const [sno, setSno] = useState("");
	const [fare, setFare] = useState("");

  let navigate = useNavigate();
    useEffect(() => {
        if(localStorage.getItem('AUTH_TOK').length <= 0) {
            navigate("/signin");
        }
  }, [])

    return (
      <div class="grid min-h-screen w-full place-items-center">
  <div class="flex flex-col p-12 bg-white sm:w-8/12 md:w-1/2">
    <form class="mt-6">
      <h1 class="text-center text-4xl font-bold font-serif italic">Search buses</h1>
      <div class="mt-10 flex justify-between gap-3">
        <span class="w-1/2">
          <input id="firstname" placeholder="From" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
        </span>
        <span class="w-1/2">
          <input id="firstname" placeholder="Destination" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
        </span>
        <span class="w-1/2">
          <input id="firstname" placeholder="Date" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
        </span>
      </div>
      <button type="submit" class="w-24 py-1.5 mt-3 text-white bg-black rounded-xl shadow-lg focus:outline-none hover:bg-gray-500 hover:shadow-none">
        Search
      </button>
    </form>

    <p class="mt-10 text-2xl font-bold">Available Buses</p>
    <Link to={{ pathname: "/prebook" }} state={{ bid: "b101", dept: "Dwarka", to: "Dakor", time:"6:00 am", fare: "198"}} class="flex justify-between gap-3 mt-3">
        <div class="w-1/2 flex ">
          <p class="text-lg mt-2">Dwarka - Dakor</p>
          <p class="ml-3 text-lg mt-2">6:00 am</p>
        </div>
        <p class="text-lg mt-2 text-gray-500">to</p>
        <div class="w-1/2 flex ">
          <p class="text-lg mt-2">9:00 pm</p>
          <p class="text-lg mt-2 ml-16">Rs. 198</p>
        </div>
    </Link>
    <p class="italic">express</p>
    <p class="text-green-500 italic">24 seats available</p>
  </div>
</div>
    )
}
