import React from "react";

export default function Header() {
    return (
        <header>
            <div class="w-full bg-center bg-cover h-[50rem]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80')" }}>
                <div class="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
                    <div class="text-center">
                        <h1 class="text-3xl font-bold text-white lg:text-3xl">Bus Bookings Made Easy</h1>
                        <button class="w-full px-4 py-2 mt-4 text-sm font-medium text-white transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Search Buses</button>
                    </div>
                </div>
            </div>
        </header>

    );
}

/*<header class="bg-white dark:bg-gray-800">
<div class="container px-6 py-16 mx-auto">
    <div class="items-center lg:flex">
        <div class="w-full lg:w-1/2">
            <div class="lg:max-w-lg">
                <h1 class="text-2xl font-semibold text-gray-800 uppercase dark:text-white lg:text-3xl">Best Place To Choose Your Clothes</h1>
                <p class="mt-2 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>
                <button class="w-full px-3 py-2 mt-6 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Shop Now</button>
            </div>
        </div>

        <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img class="w-full h-full lg:max-w-2xl" src="https://merakiui.com/_nuxt/img/Catalogue-pana.32658f1.svg" alt="Catalogue-pana.svg"/>
        </div>
    </div>
</div>
</header> */