// src/pages/Projects.jsx
import React from "react";

const projects = [
  {
    title: "Instapocket – Personal Finance & Expense Tracker (Cross-platform, iOS & Android)",
    description: [
      "Developed a cross-platform finance tracking app using React Native CLI for Android and iOS.",
      "Features include expense categorization, transaction history, and budget insights with an intuitive UI.",
      "Integrated Zustand for state management and Axios for REST API communication.",
      "Deployed successfully on Google Play Store.",
    ],
    techStack: [
      "React Native CLI",
      "Zustand",
      "Axios",
      "REST APIs",
      "Flexbox",
      "Google Play Store",
    ],
    link: "https://play.google.com/store/apps/details?id=com.instapocketapp&hl=en-IN",
  },
    {
    title: "Rozgaar App – Job Listing Platform (Cross-platform, Android)",
    description: [
      "Developed and deployed a job listing mobile app available on Google Play Store.",
      "Features include authentication, job search, employer dashboards, and API integrations for job listings and applications.",
      "State management handled with Redux and RTK Query.",
    ],
    techStack: [
      "React Native CLI",
      "Redux",
      "RTK Query",
      "REST APIs",
      "Axios",
      "Google Play Store",
    ],
    link: "https://play.google.com/store/apps/details?id=com.skilljobsrozgaar",
  },
  {
    title: "Ganganagar Talks – Community News & Information App (Cross-platform, iOS & Android)",
    description: [
      "Built a local community app using React Native CLI to share news, events, and updates from Ganganagar.",
      "Implemented post sharing, comments, likes, and notifications for user engagement.",
      "Used Redux Toolkit for global state and integrated REST APIs for real-time content updates.",
      "Optimized layouts for smooth performance and responsive UI.",
    ],
    techStack: [
      "React Native CLI",
      "Redux Toolkit",
      "Axios",
      "REST APIs",
      "Firebase Notifications",
    ],
    link: "#", // add Play Store link if available
  },
  // {
  //   title: "Revision24 – Test Series Platform (Cross-platform + Web)",
  //   description: [
  //     "Developed both mobile (React Native CLI) and web (React.js) applications for exam preparation.",
  //     "Features include online test series, contests, leaderboards, and advanced quiz logic.",
  //     "Integrated Firebase Cloud Messaging, Cashfree Payment Gateway, and secure authentication.",
  //     "Managed global state with Redux Toolkit and ensured responsive design across devices.",
  //   ],
  //   techStack: [
  //     "React Native CLI",
  //     "React.js",
  //     "Redux Toolkit",
  //     "Redux Thunk",
  //     "Axios",
  //     "Firebase Cloud Messaging",
  //     "Cashfree",
  //     "REST APIs",
  //   ],
  //   link: "#", // add your live site link if you want
  // },

];

export default function ProjectShowPage() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-12 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          My Projects
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block w-1 bg-gray-300 dark:bg-gray-700 absolute left-1/2 transform -translate-x-1/2 h-full"></div>

          {projects.map((project, index) => (
            <div
              key={index}
              className={`mb-12 flex flex-col md:flex-row items-center md:items-start gap-8 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Dot */}
              <div className="hidden md:block w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 absolute left-1/2 transform -translate-x-1/2 mt-2 shadow-lg"></div>

              {/* Project Card */}
              <div className="bg-gradient-to-br from-white/40 to-white/10 dark:from-gray-800/40 dark:to-gray-800/10 
                backdrop-blur-md border border-white/20 
                shadow-xl rounded-xl p-6 w-full md:w-5/12 
                hover:shadow-2xl hover:scale-[1.02] transition duration-300">
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {project.title}
                </h3>

                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  {project.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-800 dark:to-purple-800 
                      text-blue-800 dark:text-blue-100 text-sm font-medium 
                      px-3 py-1 rounded-full shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-blue-500 hover:underline text-sm"
                  >
                    View on Play Store
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
