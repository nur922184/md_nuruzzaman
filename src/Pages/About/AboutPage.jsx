import React from "react";
import profileImg from "../../assets/nuruzzaman.jpeg"; 
import openit from "../../assets/open_it.jpeg"; 

const AboutPage = () => {
  return (
    <section className="bg-gray-50 text-gray-800 py-16">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">

        {/* Intro Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About <span className="text-teal-600">Me</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            I’m <span className="font-semibold">MD. Nuruzzaman</span>, 
            an <span className="text-teal-600">Entrepreneur, CEO</span> and 
            passionate <span className="text-teal-600">IT Instructor</span>. 
            With years of experience in IT training and business development, 
            I am dedicated to empowering people with the knowledge and skills 
            required to succeed in today’s tech-driven world.
          </p>
        </div>

        {/* Founder Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Entrepreneur and CEO
            </h3>
            <p className="text-gray-600 leading-relaxed">
              MD. Nuruzzaman is the visionary founder and current 
              <span className="font-semibold"> Chief Executive Officer</span> 
              of <span className="text-teal-600 font-semibold">Open IT Institute</span>. 
              He has built this institution with the mission to provide 
              accessible and professional IT training to young learners 
              and professionals across Bangladesh.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <img
              src={profileImg} // আপনার প্রোফাইল ছবি ব্যবহার করুন
              alt="Md. Nuruzzaman"
              className="w-52 h-52 mx-auto rounded-full border-4 border-teal-500 object-cover"
            />
            <h4 className="mt-4 text-xl font-semibold">MD. Nuruzzaman</h4>
            <p className="text-gray-500">Entrepreneur & CEO</p>
          </div>
        </div>

        {/* Institute Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            About the Institute
          </h3>

          {/* Open IT Institute - Bangladesh */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
            <img
              src={openit} // ইনস্টিটিউটের ছবি দিন
              alt="Open IT Institute"
              className="rounded-xl shadow-lg w-full"
            />
            <div>
              <h4 className="text-xl font-semibold text-teal-600 mb-2">
                Open IT Institute, Kendua, Bangladesh
              </h4>
              <p className="text-gray-600 mb-4">
                A modern computer training center affiliated with the 
                Bangladesh Technical Education Board. Programs include 
                Microsoft Office, Graphics Design, Programming, Hardware 
                & Networking. The institute provides a digital computer 
                lab and experienced instructors to ensure quality training.
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Location:</span> Kendua, Netrokona, Bangladesh
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Contact:</span> +880 1707-530810
              </p>
              <a
                href="https://eshikhon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 font-medium hover:underline"
              >
                Visit Website
              </a>
            </div>
          </div>

          {/* OPIT - Europe */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h4 className="text-xl font-semibold text-teal-600 mb-2">
                OPIT - Open Institute of Technology, Europe
              </h4>
              <p className="text-gray-600 mb-4">
                OPIT is an accredited online higher education institution 
                based in Malta, Europe. It offers Bachelor's and Master's 
                degrees in Digital Business, Computer Science, AI, and 
                Cybersecurity. The programs follow the European Qualification 
                Framework and Bologna standards, taught by professors from 
                leading universities and companies.
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Accreditation:</span> MFHEA, Malta
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Contact:</span> hello@opit.com
              </p>
              <a
                href="https://opit.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 font-medium hover:underline"
              >
                Visit Website
              </a>
            </div>
            <img
              src="/opit-europe.jpg" // OPIT এর ছবি দিন
              alt="OPIT Europe"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-teal-600 text-white p-8 rounded-xl shadow-lg">
            <h4 className="text-xl font-bold mb-3">My Mission</h4>
            <p className="text-sm leading-relaxed">
              To build a skilled and confident young generation 
              who can compete in the global IT sector through 
              quality education and hands-on training.
            </p>
          </div>
          <div className="bg-gray-900 text-white p-8 rounded-xl shadow-lg">
            <h4 className="text-xl font-bold mb-3">My Vision</h4>
            <p className="text-sm leading-relaxed">
              To make <span className="text-teal-400 font-semibold">Open IT Institute</span> 
              a center of excellence for IT education in Bangladesh and 
              create opportunities for every learner to shine in the 
              technology-driven world.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutPage;
