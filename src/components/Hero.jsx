import React, { useState } from 'react';

const Hero = () => {
  const [showSkills, setShowSkills] = useState(false);

  const skills = [
    { name: 'HTML', color: 'bg-orange-500' },
    { name: 'CSS', color: 'bg-blue-500' },
    { name: 'JAVASCRIPT', color: 'bg-yellow-500' },
    { name: 'REACT JS', color: 'bg-cyan-500' },
    { name: 'REACT NATIVE', color: 'bg-sky-600' },
    { name: 'Bootstrap', color: 'bg-purple-600' },
    { name: 'GitHub', color: 'bg-gray-800' },
    { name: 'Tailwind CSS', color: 'bg-teal-500' },
  ];

  // Custom manual positions matching the image
  const floatingPositions = [
    { top: '-5%', left: '45%' },     // HTML
    { top: '5%', left: '15%' },      // CSS
    { top: '10%', right: '10%' },    // JS
    { top: '40%', left: '-10%' },    // React JS
    { top: '40%', right: '-10%' },   // React Native
    { bottom: '40%', left: '0%' },   // Bootstrap
    { bottom: '40%', right: '0%' },  // GitHub
    { bottom: '15%', left: '20%' },  // Electron JS
    { bottom: '15%', right: '20%' }, // Tailwind
  ];

  return (
    <section
      className="relative py-10 px-4 md:px-10 lg:px-20 bg-cover bg-center bg-white"
      
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-100 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">

        {/* Left Content */}
        <div className="text-center lg:text-left max-w-xl space-y-6 text-slate-700">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Let’s Work<br />
            Together to Create<br />
            Wonders with Us
          </h1>
          <p className="text-gray-800">
            A visionary creative, crafting captivating wonders through art and design.
            Adept at turning imagination into extraordinary reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
           <a
  href="https://wa.me/918619115648"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition">
    Let’s Talk
  </button>
</a>

<a
  href="https://wa.me/918619115648"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="border border-indigo-400 text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition">
    Start Project
  </button>
</a>

          </div>

          <div className="flex justify-center lg:justify-start gap-6 pt-4 text-center">
            <div>
              <p className="text-2xl font-bold">1.5+</p>
              <p className="text-sm text-gray-900">Years Experience</p>
            </div>
            <div>
              <p className="text-2xl font-bold">98%</p>
              <p className="text-sm text-gray-900">Success Rate</p>
            </div>
          </div>
        </div>

        {/* Right Avatar & Skills */}
        <div className="relative w-full max-w-sm sm:max-w-md mx-auto  rounded-full">
          <img
            src="https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197908.png"
            // src="/my-pic.png"
            alt="Hero Avatar"
            className="w-full h-full  object-cover  rounded-full"
          />

          {/* Floating Skills */}
          <div className="hidden sm:block">
            {skills.map((skill, index) => {
              const position = floatingPositions[index] || {};
              return (
                <div
                  key={index}
                  className={`absolute px-3 py-1 rounded shadow text-xs font-medium text-white
                  ${skill.color}`}
                  style={{ ...position }}
                >
                  {skill.name}
                </div>
              );
            })}
          </div>

          {/* Mobile Skills Toggle */}
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
                    className={`${skill.color} text-white px-3 py-1 rounded shadow font-medium`}
                  >
                    {skill.name}
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
