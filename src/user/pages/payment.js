import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className='h-screen bg-gradient-to-br from-indigo-500 to-indigo-800 flex justify-center space-x-10 items-center'>
      <h1 className='text-white font-bold text-3xl'>Make Payment</h1>
      
      
      <div className="bg-white font-semibold text-center rounded-lg border shadow-lg p-5 max-w-sm">
        <img className="mb-3 w-52 h-52 rounded-3xl shadow-lg mx-auto" src="https://www.investopedia.com/thmb/ZG1jKEKttKbiHi0EkM8yJCJp6TU=/1148x1148/filters:no_upscale():max_bytes(150000):strip_icc()/qr-code-bc94057f452f4806af70fd34540f72ad.png" alt="product designer" />
        <p className="text-xs text-gray-500 italic">UPI ID: conductor@upi</p>
        <h1 className="text-lg text-gray-700"></h1>
        <button className='bg-blue-200 p-2 mt-3' onClick={() => navigate("/ticket", {
          state : { 
            bid: "b103",
            fare: 500,
            name: "Username",
            sno: 23
           } 
        })}>
          {console.log(location.state)}
          <p>Check My Ticket</p>
        </button>
    </div>
    </div>   
  )
}
