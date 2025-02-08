"use client"; 

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate sending data to a server (replace with actual API call)
    try {
      console.log("Form Data:", formData);

      // Simulate a successful submission
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000); // Reset success message after 3 seconds

      // Clear the form after submission
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md mt-10" id="contact">
      <h2 className="text-2xl font-bold text-orange-500 mb-4 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Enter your name"
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Enter your email"
          />
        </div>

        {/* Message Field */}
        <div>
          <label className="block text-gray-700">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Your message..."
            rows={4}
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-orange-500 text-white p-2 rounded font-bold hover:bg-orange-600">
          Send Message
        </button>

        {/* Success Message */}
        {submitted && <p className="text-green-500 text-center mt-2">Message sent successfully!</p>}
      </form>
    </div>
  );
}
