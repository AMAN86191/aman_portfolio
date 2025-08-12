
// src/pages/Projects.jsx
import React from "react";

const projects = [
    {
        title: "Revision 24 – Test Series Web App (React.js)",
        description: [
            "Developed a responsive web application for government exam preparation with test series, contests, leaderboards, and subscriptions.",
            "Implemented product/test listing, search, cart, checkout, live test participation, and advanced quiz logic.",
            "Integrated Firebase Cloud Messaging, Axios for REST APIs, and Cashfree Payment Gateway.",
            "Managed global state using Redux Toolkit with Redux Thunk.",
            "Designed responsive UI using Flexbox, CSS Grid, and dynamic theming.",
        ],
        techStack: [
            "React.js",
            "Redux Toolkit",
            "Redux Thunk",
            "Axios",
            "Firebase Cloud Messaging",
            "Cashfree",
            "REST APIs",
            "CSS Grid",
        ],
    },
    {
        title: "Revision 24 – Test Series App (Cross-platform, iOS & Android)",
        description: [
            "Developed a cross-platform mobile app using React Native CLI for exam preparation.",
            "Implemented test listing, search, cart, checkout, live test, and quiz logic.",
            "Integrated Firebase Cloud Messaging, Axios, and MMKV storage.",
            "Managed state using Redux Toolkit and dynamic theming with React Native Paper.",
        ],
        techStack: [
            "React Native CLI",
            "Redux Toolkit",
            "Redux Thunk",
            "MMKV Storage",
            "Axios",
            "Firebase Cloud Messaging",
            "React Native Paper",
            "REST APIs",
        ],
    },
    {
        title: "Dairy Management Software (Electron.js + React.js)",
        description: [
            "Built a desktop app for dairy businesses with multi-page, modular architecture.",
            "Implemented milk collection/sale tracking with FAT, CLR, SNF-based rate calculation.",
            "Modules for customers, dispatch, inventory, payments, and printing slips.",
            "Used Zustand for state management and Tailwind CSS for modern UI.",
            "Added offline functionality and real-time updates.",
        ],
        techStack: [
            "Electron.js",
            "React.js",
            "Zustand",
            "Tailwind CSS",
            "REST APIs",
            "Node.js",
            "Electron Print API",
        ],
    },
    {
        title: "JustNearYou – Business Listing App (Cross-platform, iOS & Android)",
        description: [
            "Developed a cross-platform business listing application using React Native CLI with support for both Android and iOS.",
            "Implemented global state management with Redux for smooth and consistent data flow across components.",
            "Integrated Firebase for push notifications, user authentication, and analytics tracking.",
            "Integrated Razorpay Payment Gateway for secure and seamless online payments.",
            "Designed dynamic business listing UI with filters, search, and category-based browsing.",
            "Implemented custom navigation using React Navigation (Stack Navigator + Bottom Tabs).",
            "Consumed REST APIs via Axios for business data, user actions, and payment processing.",
            "Applied modular and scalable architecture with reusable UI components.",
            "Designed responsive layouts using Flexbox with light/dark mode support.",
            "Debugged and optimized performance using Flipper and React Native Debugger.",
        ],
        techStack: [
            "React Native CLI",
            "Redux",
            "Axios",
            "Firebase",
            "Razorpay",
            "React Navigation",
            "REST APIs",
            "Flexbox",
        ],
    },
    {
        title: "Kumharpariwar – Social Working App (Cross-platform, iOS & Android)",
        description: [
            "Developed a social community mobile application using React Native CLI for connecting members of the dairy and social welfare community.",
            "Designed features to share posts, updates, and important announcements, along with a directory of prominent personalities with their contact details.",
            "Implemented global state management with Redux Toolkit and handled API integration with Axios.",
            "Created a user-friendly UI with responsive layouts, ensuring smooth navigation and accessibility.",
            "Optimized app performance for both Android and iOS.",
            "Successfully deployed to Google Play Store and Apple App Store.",
        ],
        techStack: [
            "React Native CLI",
            "Redux Toolkit",
            "Axios",
            "REST APIs",
            "Flexbox",
        ],
    },
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
                            className={`mb-12 flex flex-col md:flex-row items-center md:items-start gap-8 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Dot for each project */}
                            <div className="hidden md:block w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 absolute left-1/2 transform -translate-x-1/2 mt-2 shadow-lg"></div>

                            {/* Project Card with Glassmorphism & Gradient */}
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
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
}
