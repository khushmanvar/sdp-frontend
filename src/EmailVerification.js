import React from "react";

class EmailVerification extends React.Component {
    render() {
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
                        <div class="w-full max-w-lg mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                            <div class="px-6 py-4">
                                
                                <br></br>
                                <h2 class="text-3xl font-bold text-center text-gray-700 dark:text-white">EasyBus</h2>

                                <h3 class="mt-1 text-center text-xl font-medium text-gray-600 dark:text-gray-200">Finish Setting Up Your Account</h3>
                                <br></br>
                                <ul class="w-full steps">
                                    <li class="step step-primary">Register</li>
                                    <li class="step step-primary">Email Verification</li>
                                    <li class="step">Phone Verification</li>
                                </ul>
                                <br></br>
                                <br></br>
                                <form>
                                    <div class="w-full mt-4">
                                        <p class="mt-1 text-gray-500 dark:text-gray-400">Verification Code has been sent to</p>
                                        <label class="block w-full px-4 py-2 disabled mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="email" placeholder="Email Address" aria-label="Email Address">user10702@ddu.ac.in</label>
                                    </div>
                                    <br></br>
                                    <div class="w-full mt-4">
                                        <p class="mt-1 text-gray-500 dark:text-gray-400">Enter Verification Code</p>
                                        <input class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="number" placeholder="Verification Code" aria-label="Code" />
                                    </div>
                                    <br></br>
                                    <button class="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none" type="button">Verify</button>
                                </form>
                            </div>

                            <div class="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
                                <span class="text-sm text-gray-600 dark:text-gray-200">Not your Email? </span>

                                <a href="#" class="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Change</a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default EmailVerification;