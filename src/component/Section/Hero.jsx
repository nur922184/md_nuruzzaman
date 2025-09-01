import React from 'react';
import profileImg from "../../assets/nuruzzaman.jpeg";
import { ShieldCheck } from 'lucide-react';

const Hero = () => {
    return (
        <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-teal-900 text-white md:py-28 py-16">
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
                    <p className="text-gray-300 mb-8 max-w-lg">
                        A passionate IT professional and trainer with expertise in computer applications,
                        graphic design, web development, and networking. Dedicated to empowering students
                        with modern skills to excel in the tech industry.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                        <a
                            href="#contact"
                            className="bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded-lg shadow-lg text-white font-medium transition"
                        >
                            Contact Me
                        </a>
                        <a
                            href="#resume"
                            className="border border-teal-400 hover:bg-teal-500 hover:text-white px-6 py-3 rounded-lg shadow-lg font-medium transition"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>

                {/* Right Side: Image */}

                <div className="flex-1 flex justify-center relative">
                    <div className="relative group">
                        {/* Glowing Border Effect */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-teal-500 via-blue-500 to-purple-600 blur-2xl opacity-50 group-hover:opacity-80 transition duration-500"></div>

                        {/* Image Container */}
                        <div className="relative rounded-full p-2 bg-teal-400 shadow-2xl transform group-hover:scale-105 transition duration-500">
                            <img
                                src={profileImg}
                                alt="Profile"
                                className="rounded-full w-72 md:w-96 object-cover"
                            />
                            {/* Safety/Shield Badge */}
                            <span className="absolute bottom-2 right-2 bg-teal-500 text-xs px-3 py-1 rounded-full shadow-md">
                                Available for Training
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
