import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signin(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    let navigate = useNavigate();

    const signin = () => {
        const data = {email: email, password: password}
        axios.post('https://easybus13.herokuapp.com/signin', data)
            .then(res => {
                localStorage.setItem('AUTH_TOK', res.data.token);
                navigate("/home"); })
    }
        return (
            <>
                <div class="w-full bg-center bg-cover" style={{ backgroundImage: "url('https://cdn.shopify.com/s/files/1/0051/6869/3322/collections/Light_grey_background_color_869a123a-3589-48b7-8634-694d98d7e7af_1200x1200.png?v=1574187507')" }}>
                    <div class="grid place-items-center h-screen">
                        <div class="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                            <div class="px-6 py-4">
                                <br></br>
                                <h2 class="text-3xl font-bold text-center text-gray-700 dark:text-white">EasyBus</h2>

                                <h3 class="mt-1 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome Back</h3>

                                <p class="mt-1 text-center text-gray-500 dark:text-gray-400">SignIn to Your Account</p>
                               
                                <form>
                                    <div class="w-full mt-4">
                                        <input value={email} onChange={e => setEmail(e.target.value)} class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="email" placeholder="Email Address" aria-label="Email Address" />
                                    </div>

                                    <div class="w-full mt-4">
                                        <input value={password} onChange={e => setPassword(e.target.value)} class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="password" placeholder="Password" aria-label="Password" />
                                    </div>

                                    <div class="flex items-center justify-between mt-4">
                                        <a href="#" class="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">Forgot Password?</a>

                                        <button class="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none" type="button" onClick={() => navigate("/")}>Signin</button>
                                    </div>
                                </form>
                            </div>

                            <div class="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
                                <span class="text-sm text-gray-600 dark:text-gray-200">Don't have an account? </span>

                                <a href="/signup" class="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">SignUp</a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
}