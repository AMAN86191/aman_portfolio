import React from "react";

const HeroBanner = ({ title, breadcrumb, image }) => {
  return (
    <section
      className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] flex items-center justify-center text-white"
      style={{
        backgroundImage: `url('/hero-banner-bg.jpg')`, // Replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl px-4 text-center">
        <p className="text-sm sm:text-base text-blue-300 mb-2">{breadcrumb}</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">{title}</h1>
        <div className="h-1 w-20 bg-blue-500 mx-auto mt-4" />
      </div>
    </section>
  );
};

export default HeroBanner;
