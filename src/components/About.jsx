import React from 'react'
import Ayo from '../images/ayo.jpg'

function About() {
  return (
    <section
      id="about"
      className="bg-gray-100 py-24 px-10 grid place-content-center"
    >
      <h1 className="text-3xl font-semibold mb-10 text-center">About Me</h1>
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center gap-4">
        <div className="">
          <img
            src={Ayo}
            alt="my-picture"
            className="mb-4 rounded-md w-72 h-72"
          />
        </div>

        <p className="max-w-xl text-gray-700">
          My name is Adeagbo Ayomide, a Computer Science and Engineering student
          of Obafemi Awolowo University. I am a passionate frontend developer
          with over one year of experience. I participated in frontend track
          Zuri X 14G training in 2022 and I am also an HNGx 2023 Frontend track
          finalist.
        </p>
      </div>
    </section>
  );
}

export default About