import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Alogin() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const login = () => {
		const data={email:email, password:password};
		axios.post('https://easybus13.herokuapp.com/admin/login', data)
			.then(res => {
				localStorage.setItem('COND_TOK', res.data.token);
				navigate("/admin"); })
		}

    return (
        <div class="flex flex-col items-center justify-center min-h-screen bg-white">
	<div class="bg-green-400 w-full sm:w-3/4 max-w-lg p-12 pb-6 shadow-2xl rounded">
		<div class="text-white pb-4 text-3xl font-semibold">Conductor Login</div>
		<input
			class="block text-gray-700 p-1 m-4 ml-0 w-full rounded text-lg font-normal placeholder-gray-300"
			id="username"
			type="text"
			value={email} onChange={e => setEmail(e.target.value)}
			placeholder="your email"
		/>
		<input
			class="block text-gray-700 p-1 m-4 ml-0 w-full rounded text-lg font-normal placeholder-gray-300"
			id="password"
			type="password"
			value={password} onChange={p => setPassword(p.target.value)}
			placeholder="password"
		/>
		<button onClick={() => navigate("/admin")} class="inline-block mt-2 bg-green-600 hover:bg-green-700 focus:bg-green-800 px-6 py-2 rounded text-white shadow-lg">
			Login
		</button>
		
		<div class="pt-10 flex items-center justify-between">
			<a
				href="#1"
				class="inline-block text-green-700 hover:text-green-900 align-baseline font-normal text-sm"
			>
				Forgot password?
			</a>
			<a href="#2" class="inline-block text-green-700 hover:text-green-900 font-normal text-sm">
				Go to home page
			</a>
		</div>
	</div>
	<p class="mt-4 text-center text-gray-400 text-xs">
		&copy;2022 Easybus. All rights reserved.
	</p>
</div>
    )
}
