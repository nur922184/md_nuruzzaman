import React from "react";
import profileImg from "../../assets/nuruzzaman.jpeg";
import IaWeb from "../../assets/IA-web.jpg"
import openit from "../../assets/open_it.jpeg";
import animation from "../../assets/original-gf.gif";
import EducationSection from "../../component/Section/EducationSection";

const AboutPage = () => {
  return (
    <section className="bg-gradient-to-r from-[#BBD2C5] via-[#536976] to-[#536976] text-gray-800 py-16 md:py-28 -mb-8">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">

        {/* Intro Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About <span className="text-teal-600">Me</span>
          </h2>
          <p className="mt-4 text-lg text-gray-100 max-w-3xl mx-auto">
            I’m <span className="font-semibold">MD. Nuruzzaman</span>,
            an <span className="text-teal-300">Entrepreneur, CEO</span> and
            passionate <span className="text-teal-300">IT Instructor</span>.
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
            <p className="text-gray-100 leading-relaxed">
              MD. Nuruzzaman is the visionary founder and current
              <span className="font-semibold"> Chief Executive Officer</span>
              of <span className="text-teal-300 font-semibold">Open IT Institute</span>.
              He has built this institution with the mission to provide
              accessible and professional IT training to young learners
              and professionals across Bangladesh.
            </p>
          </div>
          <div
            style={{
              backgroundImage: `url(${animation})`,
            }}
            className="bg-white shadow-lg rounded-xl p-6 text-center bg-cover">
            <img
              src={profileImg}
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
              src={openit}
              alt="Open IT Institute"
              className="rounded-xl shadow-lg w-full"
            />
            <div>
              <h4 className="text-xl font-semibold text-teal-300 mb-2">
                Open IT Institute, Kendua, Bangladesh
              </h4>
              <p className="text-gray-100 mb-4">
                A modern computer training center affiliated with the
                Bangladesh Technical Education Board. Programs include
                Microsoft Office, Graphics Design, Programming, Hardware
                & Networking. The institute provides a digital computer
                lab and experienced instructors to ensure quality training.
              </p>
              <p className="text-gray-100 mb-2">
                <span className="font-semibold">Location:</span> Kendua, Netrokona, Bangladesh
              </p>
              <p className="text-gray-100 mb-2">
                <span className="font-semibold">Contact:</span> +880 1707-530810
              </p>
              <a
                href="https://eshikhon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-300 font-medium hover:underline"
              >
                Visit Website
              </a>
            </div>
          </div>

          {/* OPIT - Europe */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h4 className="text-xl font-semibold text-teal-300 mb-2">
                Intro
              </h4>
              <p className="text-gray-100 mb-4">
                Open IT Instititute ” is a modern computer training center. It is an affiliate of the “Bangladesh Technical Education Board“. We think that the reason for this success is our goal-purpose & everyone's cooperation.
              </p>
              <p className="text-gray-100 mb-2">
                <span className="font-semibold">Accreditation:</span> MFHEA, Malta
              </p>
              <p className="text-gray-100 mb-2">
                <span className="font-semibold">Contact:</span> hello@opit.com
              </p>
              <a
                href="https://opit.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-300 font-medium hover:underline"
              >
                Visit Website
              </a>
            </div>
            <img
              src={IaWeb}
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
      <EducationSection></EducationSection>
    </section>
  );
};

export default AboutPage;
