import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
    
      <nav className="flex items-center justify-between px-10 py-6 bg-white shadow-md">
        <div className="text-2xl font-bold tracking-widest">ARARAT <span className="text-sm font-light">ARCHITECTURE</span></div>
        <ul className="flex gap-6 text-sm font-medium text-gray-700">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/projects">PROJECTS</Link></li>
          <li><Link to="/services">SERVICES</Link></li>
          <li><Link to="/login">SIGN IN</Link></li>
          <li><Link to="/register">SIGN UP</Link></li>
        </ul>
        <button className="border border-black px-4 py-2 text-sm hover:bg-black hover:text-white transition">GET IN TOUCH</button>
      </nav>

    
      <div className="relative flex-1 flex items-center justify-center bg-blue-900 text-white text-center">
        <img
          src="/your-image.jpg" 
          alt="Architecture"
          className="absolute inset-0 w-full h-full object-cover opacity-80 -z-10"
        />
        <div className="px-4 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">WE DESIGN YOUR SPACE</h1>
          <p className="text-base md:text-lg mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor</p>
          <button className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition">SEE OUR PROJECTS</button>
        </div>
      </div>
    </div>
  );
};

export default Home;

