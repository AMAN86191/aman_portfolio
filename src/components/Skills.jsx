import React from "react";

const devSkills = [
  "React.js", "React Native",  "HTML", "CSS", "JavaScript",
  "Redux", "Zustand", "GitHub", "Tailwind CSS"
];

const backendSkills = [
  "PHP", "Laravel", "Mysql Database"
];  

const otherSkills = [
  "Responsive Design", "REST APIs", "UI/UX", "CLI Tools", "Component Reusability"
];

const Skills = () => {
  return (
    <section className="bg-[#0f172a] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 border-b-4 border-blue-500 inline-block px-6 pb-2">
          My Skills
        </h2>

        <div className="space-y-10">
          {/* Frontend / Tools */}
          <div>
            <h3 className="text-lg sm:text-xl text-blue-400 font-semibold mb-4">Frontend & Tools</h3>
            <div className="flex flex-wrap justify-center gap-3 w-1/1 m-auto">
              {devSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-[#1e293b] text-xs sm:text-sm px-4 py-2 rounded-full border border-blue-700 text-blue-300 hover:bg-blue-700 hover:text-white transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-lg sm:text-xl text-blue-400 font-semibold mb-4">Backend</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {backendSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-[#1e293b] text-xs sm:text-sm px-4 py-2 rounded-full border border-blue-700 text-blue-300 hover:bg-blue-700 hover:text-white transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Other Skills */}
          <div>
            <h3 className="text-lg sm:text-xl text-blue-400 font-semibold mb-4">Others</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {otherSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-[#1e293b] text-xs sm:text-sm px-4 py-2 rounded-full border border-blue-700 text-blue-300 hover:bg-blue-700 hover:text-white transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
