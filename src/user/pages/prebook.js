import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import DATA from '../../data/data';

function Prebook() {
	const [tid, setTid] = useState();
	const [name,setName]=useState(""); const[sno,setSno]=useState("");
	const[isticket,setIsticket]=useState(true)
	
	const location = useLocation(); const navigate = useNavigate();
	const bid = location.state.bid; 
	const dept= location.state.dept; const arr= location.state.arr
	const time= location.state.time; const fare= location.state.fare;

	const book = () => {
		const data={name:name,sno:sno,bid:bid,fare:fare};
		axios.post('https://easybus13.herokuapp.com/prebook', data)
			.then(res => {
				setTid(res.data.tid);
			}); setIsticket(true);
		navigate("/payment", {
			state: { data: data	}
		})
	}
	
  return (
<div className="h-screen bg-gradient-to-br from-indigo-500 to-indigo-800 flex justify-center space-x-10 items-center">

	<div className="lg:w-2/5 md:w-1/2 w-2/3">
		<div className="bg-white p-10 rounded-lg shadow-lg min-w-full">
			<h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Book Your Ticket</h1>
			<div>
				<label className="text-gray-800 font-semibold block my-3 text-md" for="username">Name</label>
				<input value={name} onChange={n => setName(n.target.value)}
				 className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" placeholder="enter your name" />
            </div>
				
			<div>
				<label className="text-gray-800 font-semibold block my-3 text-md" for="password">Seat Number</label>
				<input value={sno} onChange={s => setSno(s.target.value)}
				className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" placeholder="enter your seat" />
            </div>
			<div>
				<label className="text-gray-800 font-semibold block my-3 text-md" for="confirm">Fare</label>
				<input value={fare} 
				className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" placeholder="fare" />
            </div>
		    <button onClick={book} className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans">Book Now</button>		
		</div>
	</div>

    <div hidden={isticket} className="bg-white font-semibold text-center rounded-lg border shadow-lg p-5 max-w-sm">
      <img className="mb-3 w-52 h-52 rounded-3xl shadow-lg mx-auto" src="https://www.investopedia.com/thmb/ZG1jKEKttKbiHi0EkM8yJCJp6TU=/1148x1148/filters:no_upscale():max_bytes(150000):strip_icc()/qr-code-bc94057f452f4806af70fd34540f72ad.png" alt="product designer" />
      <p className="text-xs text-gray-500 italic">Ticket ID: {tid}</p>
      <h1 className="text-lg text-gray-700">{name}</h1>
  
      <div className="flex space-x-56">
        <p className="text-xs text-gray-500 mt-4">from: {dept} to {arr}</p>
        <p className="text-xs text-gray-500 mt-4">fare: {fare} Rs</p>
      </div>
      <div className="flex space-x-28">
        <p className="text-3xl text-gray-500 mt-4">Sat 22 Feb '20</p>
        <p className="text-2xl text-gray-500 mt-4">{time}</p>
      </div>
      <div className="flex space-x-3">
        <p className="text-xs text-gray-500 mt-4">Seat No. {sno}</p>
      </div>
      <p className="text-xs text-gray-500 mt-3 italic">Please scan this QR Code to verify your booking. Stay Safe!</p>
  
    </div>
</div>
  );
}

export default Prebook;
