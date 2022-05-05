import React from 'react';

export default function Ticket() {
  return (
  <div class="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-500 to-indigo-800">
    <div class="bg-white font-semibold text-center rounded-lg border shadow-lg p-5 max-w-sm">
      <img class="mb-3 w-52 h-52 rounded-3xl shadow-lg mx-auto" src="https://www.investopedia.com/thmb/ZG1jKEKttKbiHi0EkM8yJCJp6TU=/1148x1148/filters:no_upscale():max_bytes(150000):strip_icc()/qr-code-bc94057f452f4806af70fd34540f72ad.png" alt="product designer" />
      <p class="text-xs text-gray-500 italic">Ticket ID: QhqgRvhs3LMgPCm8yJYq</p>
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
      <p class="text-xs text-gray-500 mt-3 italic">Please scan this QR Code to verify your booking. Stay Safe!</p>
  
    </div>
  </div>
  )
}
