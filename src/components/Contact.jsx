import React, { useRef, useState } from "react";
import leaf1 from "../images/Leaf1.png";
import leaf2 from "../images/leaf2.png";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [errorMessage, setErrorMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate form fields
    const fullName = form.current["user_name"].value;
    const email = form.current["user_email"].value;
    const message = form.current["message"].value;

    if (!fullName || !email || !message) {
      setErrorMessage(true);
      setTimeout(() => {
        setErrorMessage(false);
      }, 3000);
      // alert('Please fill in all the details.'); // Display error message
      return;
    }

    // Send email
    emailjs
      .sendForm("service_pfwtb0r", "template_s3lmt6o", form.current, {
        publicKey: "NMYq4lorpR4cTriJO",
      })
      .then(
        (response) => {
          e.target.reset();
          alert("Email successfully sent!");
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <section
      id="contact"
      className="text-white averia-libre-light flex flex-col items-center justify-center my-10 gap-12"
    >
      <div className="flex items-center justify-center w-full py-14">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center w-52 gap-4"
        >
          <img
            src={leaf1}
            alt="first-leaf"
            className="w-6 h-auto object-contain"
          />
          <p className="text-orange-400 text-xl">Contact Me</p>
          <img
            src={leaf2}
            alt="second-leaf"
            className="w-6 h-auto object-contain"
          />
        </motion.div>
      </div>
      <div className="w-full flex flex-col justify-start items-center gap-4">
        {errorMessage && (
          <p className="font-bold text-red-500">Please fill in the details</p>
        )}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full p-2 lg:w-[600px] flex flex-col justify-start items-start gap-4"
        >
          <input
            type="text"
            name="from_name"
            placeholder="Enter Full Name"
            className="w-full p-2 bg-transparent outline-none border border-slate-100 rounded-md"
          />

          <input
            type="email"
            name="from_email"
            placeholder="Email"
            className="w-full p-2 bg-transparent outline-none border border-slate-100 rounded-md"
          />
          <textarea
            name="message"
            id=""
            cols="0"
            rows="10"
            placeholder="Type your message here"
            className="w-full p-2 bg-transparent outline-none border border-slate-100 rounded-md"
          />
          <div className="w-full flex justify-center items-center lg:justify-end">
            <button
              type="submit"
              value="Send"
              className="px-6 py-4 rounded-md bg-orange-400 w-full lg:w-auto hover:bg-slate-200 hover:text-orange-400"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
