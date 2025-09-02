import React from "react";

const About = ({ bg = "" }) => {
  return (
<section className={`${bg} ${bg ? "text-white " : "text-black "} py-16 px-4`} >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left Side: Text */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 border-b-4 border-blue-500 inline-block">
            About Me
          </h2>
          <p className="text-lg leading-relaxed mt-4">
            I am a passionate and detail-oriented{" "}
            <strong>React Native & React.js Developer</strong>
            with over <strong>1.5 years of experience</strong> in building
            cross-platform mobile applications and{" "}
            <strong>1 year of experience</strong> in developing responsive and
            scalable web applications.
            <br />
            <br />
            With a strong foundation in modern JavaScript, React, and
            mobile-first design principles, I specialize in creating{" "}
            <strong>
              scalable, user-friendly, and performance-driven applications
            </strong>
            that deliver seamless user experiences.
            <br />
            <br />
            I am always eager to learn new technologies, adapt to challenges,
            and contribute to innovative projects. My goal is to leverage my
            technical expertise and creativity to add real value to the
            organization while continuing to grow both personally and
            professionally.
           
          </p>

          <div className="mt-6">
            <a
              href="/Aman_Biban_ReactNative_Resume_Updated.pdf"
              download="Aman_Biban_ReactNative_Resume_Updated.pdf"
              className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right Side: Illustration */}
        <div className="flex-1 flex justify-center">
          <img
            src={"/about-img.png"}
            alt="Developer Illustration"
            className="w-[300px] md:w-[400px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
