import React from 'react';
import Aboutme from "../../assets/Aboutme.jpg";
import { ShieldCheck, Award, Heart } from "lucide-react";
const AboutMe = () => {
    return (
        <section
            id="about"
            className="bg-gradient-to-r from-[#BBD2C5] via-[#536976] to-[#536976] text-white py-20"
        >
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">

                {/* Left Side: Text */}
                  <div className="flex-1 flex justify-center relative">
                    <div className="relative group">
                        {/* Glowing Border Effect */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-teal-500 via-blue-500 to-purple-600 blur-2xl opacity-50 group-hover:opacity-80 transition duration-500"></div>

                        {/* Image Container */}
                        <div className="relative rounded-full p-2 bg-gray-800 shadow-2xl transform group-hover:scale-105 transition duration-500">
                            <img
                                src={Aboutme}
                                alt="Profile"
                                className="rounded-full w-72 md:w-96 object-cover"
                            />
                            {/* Safety/Shield Badge */}
                            <span className="absolute top-4 right-4 bg-teal-500 text-xs px-4 py-2 rounded-full shadow-md flex items-center gap-1">
                                <ShieldCheck size={14} /> Safe & Secure
                            </span>
                        </div>
                    </div>
                </div>
       {/* //  Right Side: 3D Styled Image */}
                <div className="flex-1 space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-4">
                        About Me
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        I am an IT Instructor & Trainer who guides students to learn modern technologies and become proficient in real life. My experience includes
                        <span className="text-teal-400 font-semibold"> Computer Applications, Graphics Design, Web Development </span>
                        and <span className="text-teal-400 font-semibold">Networking</span>।
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <ShieldCheck className="text-teal-400 w-6 h-6" />
                            <span className="text-gray-200">Strong Security Knowledge</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Award className="text-yellow-400 w-6 h-6" />
                            <span className="text-gray-200">5+ Years Teaching Experience</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Heart className="text-pink-500 w-6 h-6" />
                            <span className="text-gray-200">Passionate About Learning & Sharing</span>
                        </div>
                    </div>
                </div>


              
            </div>
        </section>
    );
};

export default AboutMe;



