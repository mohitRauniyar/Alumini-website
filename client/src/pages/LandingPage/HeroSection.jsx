import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen pt-16">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
        src="https://videos.pexels.com/video-files/2086113/2086113-hd_1920_1080_30fps.mp4"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our AlumConnect</h1>
        <p className="text-xl md:text-2xl mb-8">Empowering Minds, Shaping Futures</p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
          Apply Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
