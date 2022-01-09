import React from "react";

export default function SearchBus() {
    return (
        <>

            <div class="bg-white dark:bg-gray-900">
                <div class="container px-6 py-8 mx-auto">
                    <p class="text-xl text-center text-gray-500 dark:text-gray-300">
                        Choose your plan
                    </p>

                    <h1 class="mt-4 text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Pricing Plan</h1>

                    <div class="card lg:card-side card-bordered">
                        <div class="card-body">
                            <h2 class="card-title">Dwarka-Dakor</h2>
                            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
                            <div class="card-actions">
                                <button class="btn btn-primary">Check Availability</button>
                            </div>
                        </div>
                    </div>
                    <div class="mt-6 space-y-8 xl:mt-12">
                        <div class="flex items-center justify-between max-w-2xl px-8 py-4 mx-auto border cursor-pointer rounded-xl dark:border-gray-700">
                            <div class="items-center">
                                <div class="flex flex-col items-center mx-5 space-y-1">
                                    <h2 class="text-lg font-medium text-gray-700 sm:text-2xl dark:text-gray-200">Basic</h2>
                                    <div class="px-2 text-xs text-blue-500 bg-gray-100 rounded-full sm:px-4 sm:py-1 dark:bg-gray-700 ">
                                        Save 20%
                                    </div>
                                </div>
                            </div>

                            <h2 class="text-2xl font-semibold text-gray-500 sm:text-4xl dark:text-gray-300">$49 <span class="text-base font-medium">/Month</span></h2>
                        </div>

                        <div class="flex items-center justify-between max-w-2xl px-8 py-4 mx-auto border border-blue-500 cursor-pointer rounded-xl">
                            <div class="flex items-center">
                                <div class="flex flex-col items-center mx-5 space-y-1">
                                    <h2 class="text-lg font-medium text-gray-700 sm:text-2xl dark:text-gray-200">Dakor-Dwarka</h2>
                                    <div class="px-2 text-xs text-blue-500 bg-gray-100 rounded-full sm:px-4 sm:py-1 dark:bg-gray-700 ">
                                        Save 20%
                                    </div>
                                </div>
                            </div>

                            <h2 class="text-2xl font-semibold text-blue-600 sm:text-4xl">$99 <span class="text-base font-medium">/Month</span></h2>
                        </div>

                        <div class="flex items-center justify-between max-w-2xl px-8 py-4 mx-auto border cursor-pointer rounded-xl dark:border-gray-700">
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400 sm:h-9 sm:w-9" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>

                                <div class="flex flex-col items-center mx-5 space-y-1">
                                    <h2 class="text-lg font-medium text-gray-700 sm:text-2xl dark:text-gray-200">Enterprise</h2>
                                    <div class="px-2 text-xs text-blue-500 bg-gray-100 rounded-full sm:px-4 sm:py-1 dark:bg-gray-700 ">
                                        Save 20%
                                    </div>
                                </div>
                            </div>

                            <h2 class="text-2xl font-semibold text-gray-500 sm:text-4xl dark:text-gray-300">$149 <span class="text-base font-medium">/Month</span></h2>
                        </div>

                        <div class="flex justify-center">
                            <button class="px-8 py-2 tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                Choose Plan
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}