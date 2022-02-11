import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function NavBar(){
   let navigate = useNavigate();
   const [showSignUp, setShowSignUp] = React.useState(false);
   const [showSignIn, setShowSignIn] = React.useState(false);
   const [email, setEmail] = useState('');
   const [name, setName] = useState(''); 
   const [phoneNo, setPhone] = useState(''); 
   const [password, setPassword] = useState(''); 

    const signin = () => {
      console.log("function called")
        const data = {email: email, password: password}
        axios.post('https://easybus13.herokuapp.com/signin', data)
            .then(res => {
                localStorage.setItem('AUTH_TOK', res.data.token);
                navigate("/home"); })
    }

    const signup = () => {
      console.log("function called")
      const data = {email: email, password: password, name: name, phoneNo: phoneNo}
      axios.post('http://easybus13.herokuapp.com/signup', data)
          .then(res => {
            console.log("success")
              localStorage.setItem('AUTH_TOK', res.data.token);
              navigate("/home"); })
  }

    return(
        <>
        <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <img src="https://img.icons8.com/ios/50/000000/bus2.png"/>
      <span class="ml-3 text-xl">EasyBus</span>
    </a>
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900">Search Buses</a>
      <a class="mr-5 hover:text-gray-900">Advance Booking</a>
      <a class="mr-5 hover:text-gray-900">Live Booking</a>
      <a class="mr-5 hover:text-gray-900">Contact Us</a>
    </nav>
    <div class="flex items-center py-2 -mx-1 md:mx-0">
    <a onClick={() => setShowSignUp(true)} class="inline-flex items-center mx-3 justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-green-400 rounded-2xl sm:w-auto sm:mb-0">
                    SignUp                </a>
                    <a onClick={() => setShowSignIn(true)} class="inline-flex mx-3 items-center justify-center w-full px-6 py-3 mb-2 text-lg bg-gray-100 rounded-2xl sm:w-auto sm:mb-0">
                    SignIn
                </a>
                    </div>
  </div>
</header>
{showSignUp ? (
        <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-gray-400 bg-opacity-75"
          >
       <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg flex justify-center">
           <div className="relative w-11/12 sm:w-8/12 md:w-9/12 bg-white dark:bg-gray-800 shadow  pt-10 pb-8 rounded">
           <form>
    <div class="bg-white px-10 max-w-sm">
      <div class="space-y-4">
          
        <h1 class="text-center text-2xl font-semibold text-gray-600">SignUp</h1>
        <div>
          <label for="email" class="block mb-1 text-gray-600 font-semibold">Full Name</label>
          <input value={name} onChange={e => setName(e.target.value)} type="text" class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
        <div>
          <label for="email" class="block mb-1 text-gray-600 font-semibold">Email</label>
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
        <div>
          <label for="email" class="block mb-1 text-gray-600 font-semibold">Password</label>
          <input value={password} onChange={e => setPassword(e.target.value)} type="password" class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
        <div>
          <label  for="email" class="block mb-1 text-gray-600 font-semibold">Mobile No.</label>
          <input value={phoneNo} onChange={e => setPhone(e.target.value)} type="text" class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
      </div>
      <br></br>
      <button onClick={signup} class="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">SignUp</button>
    </div>
  </form>
               <div onClick={() => setShowSignUp(false)} className="cursor-pointer absolute top-0 right-0 m-3 text-gray-800 dark:text-gray-100 transition duration-150 ease-in-out" >
                   <svg xmlns="http://www.w3.org/2000/svg" aria-label="Close" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                       <path stroke="none" d="M0 0h24v24H0z" />
                       <line x1={18} y1={6} x2={6} y2={18} />
                       <line x1={6} y1={6} x2={18} y2={18} />
                   </svg>
               </div>
           </div>
       </div>
   </div>
   </>
      ) : null}
{showSignIn ? (
        <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-gray-400 bg-opacity-75"
          >
       <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg flex justify-center">
           <div className="relative w-11/12 sm:w-8/12 md:w-9/12 bg-white dark:bg-gray-800 shadow  pt-10 pb-8 rounded">
           <form>
    <div class="bg-white px-10 max-w-sm">
      <div class="space-y-4">
          
        <h1 class="text-center text-2xl font-semibold text-gray-600">SignIn</h1>
        
        <div>
          <label for="email" class="block mb-1 text-gray-600 font-semibold">Email</label>
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
        <div>
          <label for="password" class="block mb-1 text-gray-600 font-semibold">Password</label>
          <input value={password} onChange={e => setPassword(e.target.value)} type="password" class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
        
      </div>
      <br></br>
      <button onClick={signin} class="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">SignIn</button>
    </div>
  </form>
               <div onClick={() => setShowSignIn(false)} className="cursor-pointer absolute top-0 right-0 m-3 text-gray-800 dark:text-gray-100 transition duration-150 ease-in-out" >
                   <svg xmlns="http://www.w3.org/2000/svg" aria-label="Close" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                       <path stroke="none" d="M0 0h24v24H0z" />
                       <line x1={18} y1={6} x2={6} y2={18} />
                       <line x1={6} y1={6} x2={18} y2={18} />
                   </svg>
               </div>
           </div>
       </div>
   </div>
   </>
      ) : null}
        </>
    )
}