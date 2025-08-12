import React from "react";


const About = ({ bg = "" }) => {
  return (

    <section className={`${bg} ${bg ? "text-white " : 'text-black '} py-16  px-4`}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left Side: Text */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 border-b-4 border-blue-500 inline-block">
            About Me
          </h2>
          <p className="text-lg leading-relaxed mt-4">
            I am a passionate and detail-oriented React Native & React.js Developer with over 1.5 years of experience in building cross-platform mobile applications and 1 year of experience in developing responsive and scalable web applications. I am seeking an opportunity in a dynamic organization where I can contribute my technical skills, continuously learn new technologies, and grow both personally and professionally. I aim to build scalable, user-friendly mobile and web solutions that add value to the organization and enhance the overall user experience.
          </p>
          <div className="mt-6">
            <a
              href="/shivam_resume.pdf"
              download="Shivam_Resume.pdf"
              className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Download CV
            </a>
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
