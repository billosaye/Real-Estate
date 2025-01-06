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
import Oauth from "../Components/Oauth";





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
        navigate('/');
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
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      
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
        <button 
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80 hover:bg-slate-800 transition duration-200 font-medium"
        >
          {loading ? 'Loading...' : 'Sign In'}
        </button>
        <Oauth />
        <div className="flex gap-2 mt-5 justify-center">
          <p>Don't have an account?</p>
          <Link to="/signup" className="text-blue-700 hover:underline">
            Sign Up
          </Link>
        </div>
        
      </form>
    </div>
  );
};

export default SignIn;