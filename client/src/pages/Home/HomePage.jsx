import React from "react";

const HomePage = () => {
  return (
    <div className="relative h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('https://imgs.search.brave.com/NqS9vyGuodG2VBXibrhKXURBeScFas9SwzKrBKa8RH4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8x/MS8wOC8wNS8xMC9z/dHVkZW50cy0xODA3/NTA1XzY0MC5qcGc')" }}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800 via-blue-800 to-blue-1000 opacity-80"></div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to the AlumConnect</h1>
        <button className="bg-white text-blue-800 font-semibold py-3 px-6 rounded-lg">
          JOIN NOW
        </button>
      </div>
    </div>
  );
};

export default HomePage;
