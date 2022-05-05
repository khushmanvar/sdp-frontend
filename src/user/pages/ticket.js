import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Ticket() {
  const location = useLocation();
  const [date, setDate] = useState(new Date());

  return (
    <div className="h-screen bg-gradient-to-br from-indigo-500 to-indigo-800 flex justify-center space-x-10 items-center">
      <div className="bg-white font-semibold text-center rounded-lg border shadow-lg p-5 max-w-sm">
        <img
          className="mb-3 w-52 h-52 rounded-3xl shadow-lg mx-auto"
          src="https://www.investopedia.com/thmb/ZG1jKEKttKbiHi0EkM8yJCJp6TU=/1148x1148/filters:no_upscale():max_bytes(150000):strip_icc()/qr-code-bc94057f452f4806af70fd34540f72ad.png"
          alt="product designer"
        />
        <p className="text-xs text-gray-500 italic">
          Ticket ID: thP34p09098yst
        </p>
        <h1 className="text-lg text-gray-700">Rahul Roy</h1>

        <div className="flex space-x-56">
          <p className="text-xs text-gray-500 mt-4">
            from: Ahmedabad to Rajkot
          </p>
          <p className="text-xs text-gray-500 mt-4">fare: fare 500 Rs</p>
        </div>
        <div className="flex space-x-28">
          <p className="text-3xl text-gray-500 mt-4">{String(date.getDate() + "/" + date.getDay() + "/" + date.getFullYear())}</p>
          <p className="text-2xl text-gray-500 mt-4">3 pm</p>
        </div>
        <div className="flex space-x-3">
          <p className="text-xs text-gray-500 mt-4">Seat No. 23</p>
        </div>
        <p className="text-xs text-gray-500 mt-3 italic">
          Please scan this QR Code to verify your booking. Stay Safe!
        </p>
      </div>
    </div>
  );
}
