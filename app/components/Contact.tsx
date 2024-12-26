"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaWhatsapp } from "react-icons/fa"; // Import icons

//A contact page made using emailjs.
function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form reload.
    const templateParams = {
      from_name: email,
      to_name: name,
      message: message,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setEmail("");
          setName("");
          setMessage("");
          console.log(result);
        },
        (error) => {
          console.log(error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
      <div>
        <h1 className="text-center text-5xl md:text-7xl mb-8">CONTACT</h1>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between w-full max-w-5xl">
        <div className="max-w-md w-full bg-gray-800 p-8 m-2 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Contact Me</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={5}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="m-5 md:w-1/2">
          <p className="text-lg">
            Please feel free to contact me in the email form, And I&apos;ll get
            back to you as soon as possible.
          </p>

          <p className="text-lg text-center mt-3">
            Or you can contact me via Whatsapp.
          </p>
          <div className="flex justify-center items-center m-2">
            <FaWhatsapp className="text-green-600 hover:text-green-800 text-3xl" />
            <p className="text-xl">0747878354</p>
          </div>

          <div />
        </div>
      </div>
    </div>
  );
}

export default Contact;
