import React from 'react';
import profileImg from "../../assets/nuruzzaman.jpeg"; 

const Hero = () => {
    return (
        <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white md:py-28 py-16">
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12">

                {/* Left Side: Text */}
                <div className="flex-1 text-center md:text-left mt-8 md:mt-0">
                    <h2 className="text-lg text-teal-400 font-semibold mb-2">
                        Hello, I'm
                    </h2>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Md. Nuruzzaman
                    </h1>
                    <h3 className="text-xl md:text-2xl text-gray-300 font-medium mb-6">
                        IT Instructor & Trainer
                    </h3>
                    <p className="text-gray-400 mb-8 max-w-lg">
                        A passionate IT professional and trainer with expertise in computer applications,
                        graphic design, web development, and networking. Dedicated to empowering students
                        with modern skills to excel in the tech industry.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                        <a
                            href="#contact"
                            className="bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded-lg shadow-lg text-white font-medium"
                        >
                            Contact Me
                        </a>
                        <a
                            href="#resume"
                            className="border border-teal-400 hover:bg-teal-500 hover:text-white px-6 py-3 rounded-lg shadow-lg font-medium"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>

                {/* Right Side: Image */}
                <div className="flex-1 flex justify-center md:justify-end">
                    <div className="relative">
                        <img
                            src={profileImg}
                            alt="IT Instructor"
                            className="w-64 h-64 p-1 md:w-80 md:h-80 rounded-full border-4 border-teal-400 shadow-lg object-cover"
                        />
                        <span className="absolute bottom-2 right-2 bg-teal-500 text-xs px-3 py-1 rounded-full shadow-md">
                            Available for Training
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;