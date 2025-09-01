import React from "react";

const EducationSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#BBD2C5] via-[#536976] to-[#536976] py-16">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl text-white">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            🎓 Education & <span className="text-teal-300">Certifications</span>
          </h2>
          <p className="mt-3 text-gray-200 max-w-2xl mx-auto">
            My academic journey and professional training that shaped my career.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Academic Qualifications */}
          <div className="bg-white/10  rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-teal-300 mb-6">
              Academic Qualifications
            </h3>
            <ul className="space-y-4">
              <li>
                <p className="text-lg font-medium">🎓 Master in Computer Engineering</p>
                <p className="text-gray-300 text-sm">XYZ University, 2022</p>
              </li>
              <li>
                <p className="text-lg font-medium">🎓 Bachelor in Computer Science</p>
                <p className="text-gray-300 text-sm">ABC University, 2020</p>
              </li>
              <li>
                <p className="text-lg font-medium">🎓 Higher Secondary Certificate (HSC)</p>
                <p className="text-gray-300 text-sm">Science Group, 2016</p>
              </li>
            </ul>
          </div>

          {/* Certifications & Training */}
          <div className="bg-white/10 rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-teal-300 mb-6">
              Certificates & Training
            </h3>
            <ul className="space-y-4">
              <li>
                <p className="text-lg font-medium">💻 Full Stack Web Development</p>
                <p className="text-gray-300 text-sm">Programming Hero, 2024</p>
              </li>
              <li>
                <p className="text-lg font-medium">🖼️ Graphics Design</p>
                <p className="text-gray-300 text-sm">Open IT Institute, 2023</p>
              </li>
              <li>
                <p className="text-lg font-medium">🔐 Cybersecurity Fundamentals</p>
                <p className="text-gray-300 text-sm">Coursera, 2023</p>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EducationSection;
