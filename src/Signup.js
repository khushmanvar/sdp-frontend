import React, {useState} from "react";
import axios from "axios";

export default function Signup(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const [name, setName] = useState(''); 
    const [phoneNo, setPhone] = useState(''); 


    const signup = () => {
        const data = {email: email, password: password, name: name, phoneNo: phoneNo}
        axios.post('http://easybus13.herokuapp.com/signup', data)
          .then(response => console.log(response))
          .catch(function (error) {
            console.log(error);
          });
    }

        return (
            <>
                <div class="w-full bg-center bg-cover" style={{ backgroundImage: "url('https://cdn.shopify.com/s/files/1/0051/6869/3322/collections/Light_grey_background_color_869a123a-3589-48b7-8634-694d98d7e7af_1200x1200.png?v=1574187507')" }}>
                    <nav class="shadow bg-neutral text-neutral-content">
                        <div class="container px-6 py-4 mx-auto lg:flex lg:justify-between lg:items-center">
                            <div class="lg:flex lg:items-center">
                                <div class="flex items-center justify-between">
                                    <div>
                                        <a class="text-2xl font-bold transition-colors duration-200 transform text-white lg:text-3xl hover:text-gray-300">EasyBus</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div class="grid place-items-center h-screen">
                        <div class="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                            <div class="px-6 py-4">
                                <div class=" flex text-center items-center justify-center space-x-2">
                                    <a class="tab text-xl tab-active" >SignUp  </a>
                                    <a class="tab text-xl">SignIn</a>
                                </div>
                                <br></br>
                                <h2 class="text-3xl font-bold text-center text-gray-700 dark:text-white">EasyBus</h2>

                                <h3 class="mt-1 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome Back</h3>

                                <p class="mt-1 text-center text-gray-500 dark:text-gray-400">Create Account</p>

                                <form>
                                    <div class="w-full mt-4">
                                        <input value={email} onChange={e => setEmail(e.target.value)} class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="email" placeholder="Email Address" aria-label="Email Address" />
                                    </div>
                                    <div class="w-full mt-4">
                                        <input value={name} onChange={e => setName(e.target.value)} class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="name" placeholder="Name" aria-label="Name" />
                                    </div>
                                    <div class="w-full mt-4">
                                        <input value={phoneNo} onChange={e => setPhone(e.target.value)} class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="" placeholder="Phone Number" aria-label="Phone Number" />
                                    </div>
                                    <div class="w-full mt-4">
                                        <input value={password} onChange={e => setPassword(e.target.value)} class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="password" placeholder="Password" aria-label="Password" />
                                    </div>

                                    <div class="flex flex-col justify-center items-center mt-4">
                                        <button class="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none" onClick={signup} type="button">SignUp</button>
                                    </div>
                                </form>
                            </div>

                            <div class="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
                                <span class="text-sm text-gray-600 dark:text-gray-200">Already have an account? </span>

                                <a href="#" class="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">SignIn</a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }