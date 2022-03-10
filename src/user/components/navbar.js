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
      <a href="/searchbus" class="mr-5 hover:text-gray-900">Search Buses</a>
      <a href="/prebook" class="mr-5 hover:text-gray-900">Advance Booking</a>
      <a href="/livebook" class="mr-5 hover:text-gray-900">Live Booking</a>
      <a href="/contact" class="mr-5 hover:text-gray-900">Contact Us</a>
    </nav>
    <div class="flex items-center py-2 -mx-1 md:mx-0">
    <button onClick={() => navigate("/signup")} class="inline-flex items-center mx-3 justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-green-400 rounded-2xl sm:w-auto sm:mb-0">
                    SignUp                </button>
    <button onClick={() => navigate("/signin")} class="inline-flex mx-3 items-center justify-center w-full px-6 py-3 mb-2 text-lg bg-gray-100 rounded-2xl sm:w-auto sm:mb-0">
                    SignIn </button>
                    </div>
  </div>
</header>

        </>
    )
}