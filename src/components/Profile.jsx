import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Profile = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-8 pt-24">
      <div className="max-w-4xl w-full text-center">
        {/* Profile Image */}
        <div className="w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden border-4 border-gray-200">
          <img
            src="/assets/profile-pic.jpg"
            alt="Abdelmoumen siga"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Introduction */}
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-400 mb-2">Hello, I'm</p>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">Abdelmoumen siga</h1>
          <h2 className="text-2xl text-gray-600 dark:text-gray-400">CS Student</h2>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <a
            href="/assets/resume.pdf"
            download
            className="px-6 py-3 bg-white text-gray-900 rounded-full border-2 border-gray-300 hover:bg-gray-100 transition-colors"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
          >
            Contact Info
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Profile; 