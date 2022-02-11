import React from 'react';
import { Navigate } from 'react-router-dom';

export default function Ahome() {

  /*if(!localStorage.getItem('COND_TOK')) {
    return <Navigate to={"/admin/login"} />
  } else {  return (
    <div>
      admin pannel here
    </div>
  ) } */
  return(
    <>
      <div class="flex flex-col bg-white m-auto p-auto">
<h1
        class="flex py-5 lg:px-5 md:px-5 px-5 font-bold text-4xl text-gray-800"
      >
        Pending Approval
      </h1>
      <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div class="flex flex-nowrap ">
          <div class="inline-block px-3">
                <div class="bg-white font-semibold text-center rounded-lg border shadow-lg p-5 max-w-sm">
      <p class="text-xs text-gray-500 italic">Ticket ID: ghtt3dr8hggndefyt</p>
      <h1 class="text-lg text-gray-700">Rahul Roy</h1>
  
      <div class="flex space-x-56">
        <p class="text-xs text-gray-500 mt-4">from: Rajkot to Nadiad</p>
        <p class="text-xs text-gray-500 mt-4">fare: 500 Rs</p>
      </div>
      <div class="flex space-x-28">
        <p class="text-3xl text-gray-500 mt-4">Sat 22 Feb '20</p>
        <p class="text-2xl text-gray-500 mt-4">12:15 PM </p>
      </div>
      <div class="flex space-x-3">
        <p class="text-xs text-gray-500 mt-4">Seat No. 32</p>
      </div>
      <button class="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                        Approve
                    </button>
            </div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
        </div>
      </div>
      <h1
        class="flex py-5 lg:px-5 md:px-5 px-5 font-bold text-4xl text-gray-800"
      >
        Approved Live Tickets
      </h1>
      <div
        class="flex overflow-x-scroll pb-10 hide-scroll-bar"
      >
        <div class="flex flex-nowrap ">
          <div class="inline-block px-3">
          <div class="bg-white font-semibold text-center rounded-lg border shadow-lg p-5 max-w-sm">
      <p class="text-xs text-gray-500 italic">Ticket ID: ghtt3dr8hggndefyt</p>
      <h1 class="text-lg text-gray-700">Rahul Roy</h1>
  
      <div class="flex space-x-56">
        <p class="text-xs text-gray-500 mt-4">Rajkot to Nadiad</p>
        <p class="text-xs text-gray-500 mt-4">fare: 500 Rs</p>
      </div>
      <div class="flex space-x-28">
        <p class="text-3xl text-gray-500 mt-4">Sat 22 Feb '20</p>
        <p class="text-2xl text-gray-500 mt-4">12:15 PM </p>
      </div>
      <div class="flex space-x-3">
        <p class="text-xs text-gray-500 mt-4">Seat No. 32</p>
      </div>
            </div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
        </div>
      </div>
      <h1
        class="flex py-5 lg:px-5 md:px-5 px-5 font-bold text-4xl text-gray-800"
      >
        Advance Booking Tickets
      </h1>
      <div
        class="flex overflow-x-scroll pb-10 hide-scroll-bar"
      >
        <div class="flex flex-nowrap ">
          <div class="inline-block px-3">
          <div class="bg-white font-semibold text-center rounded-lg border shadow-lg p-5 max-w-sm">
      <p class="text-xs text-gray-500 italic">Ticket ID: ghtt3dr8hggndefyt</p>
      <h1 class="text-lg text-gray-700">Rahul Roy</h1>
  
      <div class="flex space-x-56">
        <p class="text-xs text-gray-500 mt-4">from: Rajkot to Nadiad</p>
        <p class="text-xs text-gray-500 mt-4">fare: 500 Rs</p>
      </div>
      <div class="flex space-x-28">
        <p class="text-3xl text-gray-500 mt-4">Sat 22 Feb '20</p>
        <p class="text-2xl text-gray-500 mt-4">12:15 PM </p>
      </div>
      <div class="flex space-x-3">
        <p class="text-xs text-gray-500 mt-4">Seat No. 32</p>
      </div>
            </div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
        </div>
      </div>
</div>
    </>
  )
}
