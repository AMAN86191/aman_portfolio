// src/components/Hero.jsx
import React, { useState } from 'react';

const Hero = () => {
  const [showSkills, setShowSkills] = useState(false);
  const skills = [
    'HTML', 'CSS', 'JAVASCRIPT',
    'REACT JS', 'REACT NATIVE',
    'GitHub', 'Electron JS',
    'Tailwind CSS', 'Bootstrap CSS',
  ];
  // Floating positions for each skill (only for desktop)
  const floatingPositions = [
    { top: 'top-0', left: 'left-1/2 -translate-x-1/2' },
    { top: 'top-6', left: 'left-4' },
    { top: 'top-1/4', right: 'right-4' },
    { top: 'top-1/2', left: 'left-2' },
    { top: 'top-1/2', right: 'right-2' },
    { bottom: 'bottom-1/4', left: 'left-6' },
    { bottom: 'bottom-1/4', right: 'right-6' },
    { bottom: 'bottom-6', left: 'left-1/3' },
    { bottom: 'bottom-6', right: 'right-1/3' },
  ];
  return (
    <section className="bg-white py-10 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">

        {/* Left Content */}
        <div className="text-center lg:text-left max-w-xl space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
            Let’s Work<br />
            Together to Create<br />
            Wonders with Us
          </h1>
          <p className="text-gray-600">
            A visionary creative, crafting captivating wonders through art and design.
            Adept at turning imagination into extraordinary reality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition">
              Let’s Talk
            </button>
            <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition">
              Start Project
            </button>
          </div>

          {/* Stats */}
          <div className="flex justify-center lg:justify-start gap-6 pt-4 text-center">
            <div>
              <p className="text-2xl font-bold text-gray-800">2.5+</p>
              <p className="text-sm text-gray-500">Years Experience</p>
            </div>
            {/* <div>
              <p className="text-2xl font-bold text-gray-800">26K</p>
              <p className="text-sm text-gray-500">Happy Clients</p>
            </div> */}
            <div>
              <p className="text-2xl font-bold text-gray-800">98%</p>
              <p className="text-sm text-gray-500">Success Rate</p>
            </div>
          </div>
        </div>

        {/* Right Image & Labels */}
        <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
          <img
            src="https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197908.png"
            alt="Hero"
            className="w-full h-auto rounded-xl object-cover"
          />

          {/* Desktop Floating Skills */}
          <div className="hidden sm:block">
            {skills.map((skill, index) => {
              const position = floatingPositions[index] || {};
              return (
                <div
                  key={index}
                  className={`absolute px-3 py-1 rounded shadow text-sm font-medium text-white bg-blue-600 animate-float animate-fade-in transition duration-500
            ${position.top || ''} ${position.bottom || ''} ${position.left || ''} ${position.right || ''}`}
                >
                  {skill}
                </div>
              );
            })}
          </div>

          {/* Mobile Toggle Skills */}
          <div className="block sm:hidden text-center mt-4">
            <button
              onClick={() => setShowSkills(!showSkills)}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
            >
              {showSkills ? 'Hide Skills' : 'Show Skills'}
            </button>

            {showSkills && (
              <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                {skills.map((skill, index) => (
                  <p
                    key={index}
                    className="bg-gray-100 px-3 py-1 rounded shadow text-gray-800 font-medium"
                  >
                    {skill}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
