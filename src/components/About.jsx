import React from "react";


const About = ({bg=""}) => {
  return (
    
    <section className={`${bg} ${bg ? "text-white ": 'text-black '} py-16  px-4`}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left Side: Text */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 border-b-4 border-blue-500 inline-block">
            About Me
          </h2>
          <p className="text-lg leading-relaxed mt-4">
            Hi, I am <strong className="text-blue-400">Shivam</strong>, a passionate developer (React, React Native,
            Electron, and Web Designer). I started my journey with Startup Design in 2021. In
            earlier days I learned via platforms like YouTube, Google, and professional courses
            from Meta, Infosys, GreatLearning, and Classplus. Currently, I’m pursuing B.Ed. and
            have completed my BCA from SGN Khalsa College (MGSU). I no longer use Laravel in my
            projects.
          </p>
            <div className="mt-6">
                <button className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                Download CV
                </button>
            </div>

        </div>

        {/* Right Side: Illustration */}
        <div className="flex-1 flex justify-center">
          <img
            src={'/about-img.png'}
            alt="Developer Illustration"
            className="w-[300px] md:w-[400px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
