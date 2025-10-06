import React from 'react';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gray-600 dark:text-gray-400 mb-2">Get To Know More</p>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">About Me</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Profile Image */}
          <div className="md:w-1/3 flex justify-center">
            <div className="w-full max-w-[220px] rounded-2xl overflow-hidden">
              <img
                src="/assets/about-pic.png"
                alt="About Me"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="md:w-2/3">
            {/* Cards Container */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Experience Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center">
                <div className="flex flex-col items-center">
                  <FaBriefcase className="text-3xl text-gray-600 dark:text-gray-400 mb-2" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Experience</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">2+ years</p>
                  <p className="text-gray-600 dark:text-gray-400">Frontend Development</p>
                </div>
              </div>

              {/* Education Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center">
                <div className="flex flex-col items-center">
                  <FaGraduationCap className="text-3xl text-gray-600 dark:text-gray-400 mb-2" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Education</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">B.Sc. Bachelors Degree</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="text-gray-600 dark:text-gray-400 leading-relaxed">
              <p className="mb-4">
                As a holder of a licence 3 in information technology, I have the ability to Program in different
                languages, perform Data analysis and cleaning, create visualizations, work with networks, and handle
                database and web development tasks.
              </p>
              <p>
                I possess skills in Java, C, Python, HTML&CSS&JS, and SQL, along with strong teamwork,
                problem-solving, and communication abilities. I'm keen to pursue a career in a challenging
                workplace that welcomes innovative ideas and where I can contribute to the growth and
                expansion of the organization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 