import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import Header from './Header';

function Contact() {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  });

  // Handle changes in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // API endpoint
    const Api = 'http://localhost:3000/contact/save';
    try {
      const response = await axios.post(Api, formData);
      console.log('Save Successful', response.data);
      Swal.fire({
        title: 'Contact data saved successfully',
        icon: 'success',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        message: '',
      });
    } catch (error) {
      if (error.response) {
        console.log('Save failed', error.response.data);
      } else if (error.request) {
        console.error('No response from server', error.request);
      } else {
        console.error('Error during saving contact data', error.message);
      }
    }
  };

  return (
    <>
      <Header />
      <header className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-6">
                <div className="container mx-auto px-6 md:px-12">
                    <h1 className="text-3xl md:text-5xl font-bold text-center">Contact Us</h1>
                </div>
            </header>
      <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen bg-gray-100 gap-8 p-6">
      
        {/* Contact Image */}
        <div className="w-full max-w-lg">
          <img
            src="https://cdn.pixabay.com/photo/2016/10/10/15/11/contact-us-1728620_640.jpg" // Replace with your desired image URL
            alt="Contact Us"
            className="rounded-lg shadow-md w-full h-full"
          />
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg"
        >
          <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>

          {/* Name input */}
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Enter Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md mb-4"
            required
          />

          {/* Email input */}
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Enter Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md mb-4"
            required
          />

          {/* Phone input */}
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
            Enter Your Phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md mb-4"
          />

          {/* Address input */}
          <label
            htmlFor="address"
            className="block text-gray-700 font-medium mb-2"
          >
            Enter Your Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md mb-4"
          />

          {/* Message input */}
          <label
            htmlFor="message"
            className="block text-gray-700 font-medium mb-2"
          >
            Enter Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md mb-4"
            required
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-medium py-2 rounded-md hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
