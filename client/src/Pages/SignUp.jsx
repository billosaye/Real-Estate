import React from "react";
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          className="border p-3 rounded-lg"
          id="username"
          
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg"
          id="email"
         
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg"
          id="password"
          
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80 hover:bg-slate-800 transition duration-200 font-medium">
          Sign Up
        </button>
        <div className="flex gap-2 mt-5 justify-center">
          <p>Have an account?</p>
          <Link to="/sign-in" className="text-blue-700 hover:underline">
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
