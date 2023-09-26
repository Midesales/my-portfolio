import React from "react";


function Contact() {
  return (
    <>
      <div className="contact bg-[linear-gradient(90deg,#b004b0,#38097a);]">
        <div className="wrapper flex justify-center  py-16 gap-52 lg:py-12">
          <div className="content-box">
            <h1 className="text-white font-bold text-4xl">Get In Touch</h1>
            <form action="" className="flex flex-col gap-2 lg:grid lg:grid-cols-2">
              <div className="py-2">
                <input
                  className="bg-transparent h-14 rounded-2xl border-[1px] border-white pl-4 text-white placeholder-white w-full lg:w-36"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="py-2">
                <input
                  className="bg-transparent h-14 rounded-2xl border-[1px] border-white pl-4 text-white placeholder-white w-full lg:w-36"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <div className="py-2">
                <input
                  className="bg-transparent h-14 rounded-2xl border-[1px] border-white pl-4 text-white placeholder-white w-full lg:w-36"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="py-2">
                <input
                  className="bg-transparent h-14 rounded-2xl border-[1px] border-white pl-4 text-white placeholder-white w-full lg:w-36"
                  type="tel"
                  placeholder="Phone"
                />
              </div>
              <div className="py-2">
                <textarea
                  className="bg-transparent rounded-2xl border-[1px] border-white h-36 pl-4 text-white w-full placeholder-white pt-2"
                  rows={10} // Adjust the number of rows to fit your design
                  placeholder="Message"
                ></textarea>
              </div>
            </form>
            <div className="py-2">
              <a
                href="mailto:vayomide2@gmail.com"
                className="bg-white border-black border-[1] py-2 rounded-lg px-4 w-full font-bold"
              >
                Send
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
