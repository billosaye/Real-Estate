import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Oauth from "../Components/Oauth";
import { FcGoogle } from 'react-icons/fc';

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
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
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
      console.log(data);
      
      
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
    } finally {
      setLoading(false);
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
          <h1 className="text-3xl font-bold mb-8">Create Account</h1>

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
            {/* Name Input Row */}
            <div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  id="username"
                  onChange={handleChange}
                  value={formData.username}
                />
              </div>
           
            </div>

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
                placeholder="Create password"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                id="password"
                onChange={handleChange}
                value={formData.password}
              />
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label className="ml-2 block text-sm text-gray-700">
                I agree with <a href="#" className="text-blue-600">Terms</a> and <a href="#" className="text-blue-600">Privacy Policy</a>
              </label>
            </div>

            {/* Submit Button */}
            <button 
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 disabled:opacity-80"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Create Account'}
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
            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200">
              <FcGoogle className="w-5 h-5" />
              <span className="text-gray-600">Sign up with Google</span>
            </button>

            {/* Sign In Link */}
            <div className="text-center text-sm mt-4">
              <span className="text-gray-600">Already have an account?</span>{' '}
              <Link to="/signin" className="text-blue-600 hover:underline font-medium">
                Log in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
