import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { signUpStart,
  signUpSuccess,
  signUpFailure,
  signInStart,
  signInSuccess,
  signInFailure,
  signOut } from "../redux/user/userSlice";

import { FcGoogle } from 'react-icons/fc';
import OAuth from "../Components/Oauth";






const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const { loading, error } = useSelector((state) => state.user);  
 
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
      // Dispatch sign-in start
      dispatch(signInStart());

      const res = await fetch('http://localhost:5000/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      
      if (data.error) {
        // Dispatch sign-in failure
        dispatch(signInFailure(data.error));
        setNotification({
          show: true,
          message: data.error,
          type: 'error'
        });
      } else {
        // Dispatch sign-in success with user data
        dispatch(signInSuccess(data));
        // Clear form
        setFormData({
          email: '',
          password: ''
        });
        // Show success message
        setNotification({
          show: true,
          message: 'Signin successful!',
          type: 'success'
        });
        // Navigate to home page after successful sign-in
        navigate('/home');
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
      // Dispatch sign-in failure
      dispatch(signInFailure(error.message));
      setNotification({
        show: true,
        message: 'An error occurred during signin',
        type: 'error' 
      });
    }
  };

  return (
    <div className="flex min-h-screen pt-16">
      {/* Left Section - House Image */}
      <div className="hidden lg:flex lg:w-1/2">
        <img 
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1470&auto=format&fit=crop"
          alt="Modern House"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold mb-8">Welcome Back</h1>

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

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                id="email"
                onChange={handleChange}
                value={formData.email}
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                id="password"
                onChange={handleChange}
                value={formData.password}
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <label className="ml-2 block text-sm text-gray-700">Remember me</label>
              </div>
              <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button 
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 disabled:opacity-80"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Sign In'}
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">OR</span>
              </div>
            </div>

            {/* OAuth Button */}
            <OAuth />

            {/* Sign Up Link */}
            <div className="text-center text-sm mt-4">
              <span className="text-gray-600">Don't have an account?</span>{' '}
              <Link to="/signup" className="text-blue-600 hover:underline font-medium">
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;