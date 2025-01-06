import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Oauth from "../Components/Oauth";




const SignUp = () => {    
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [notification, setNotification] = useState({
    show: false,
    message: '',
    type: '' // 'success' or 'error'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.username,
          email: formData.email,
          password: formData.password
        }),
      });
      const data = await res.json();
      
      if (data.error) {
        setNotification({
          show: true,
          message: data.error,
          type: 'error'
        });
      } else {
        // Clear form
        setFormData({
          username: '',
          email: '',
          password: ''
        });
        // Show success message
        setNotification({
          show: true,
          message: 'Signup successful!',
          type: 'success'
        });
      }

      // Hide notification after 3 seconds
      setTimeout(() => {
        setNotification({
          show: false,
          message: '',
          type: ''
        });
      }, 3000);

    } catch (error) {
      setNotification({
        show: true,
        message: 'An error occurred during signup',
        type: 'error'
      });
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      
      {/* Notification */}
      {notification.show && (
        <div className={`p-3 mb-4 rounded-lg text-center ${
          notification.type === 'success' 
            ? 'bg-green-100 text-green-700' 
            : 'bg-red-100 text-red-700'
        }`}>
          {notification.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          className="border p-3 rounded-lg"
          id="username"
          onChange={handleChange}
          value={formData.username}
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg"
          id="email"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleChange}
          value={formData.password}
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80 hover:bg-slate-800 transition duration-200 font-medium">
          Sign Up
        </button>
        <Oauth />
        <div className="flex gap-2 mt-5 justify-center">
          <p>Have an account?</p>
          <Link to="/signin" className="text-blue-700 hover:underline">
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
