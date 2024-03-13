import React from "react";
import leaf1 from "../images/Leaf1.png";
import leaf2 from "../images/leaf2.png";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="text-white averia-libre-light flex flex-col items-center justify-center my-10 gap-12">
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
        <div className="w-full p-2 lg:w-[600px] flex flex-col justify-start items-start gap-4">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First name"
              className="p-2 bg-transparent outline-none border border-slate-100 rounded-md"
            />
            <input
              type="text"
              placeholder="Last name"
              className="p-2 bg-transparent outline-none border border-slate-100 rounded-md"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 bg-transparent outline-none border border-slate-100 rounded-md"
          />
          <textarea
            name="Message"
            id=""
            cols="0"
            rows="10"
            placeholder="Message here"
            className="w-full p-2 bg-transparent outline-none border border-slate-100 rounded-md"
          ></textarea>
          <div className="w-full flex justify-center items-center lg:justify-end">
            <button type="submit" className="px-6 py-4 rounded-md bg-orange-400 w-full lg:w-auto hover:bg-slate-200 hover:text-orange-400">Send</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
