import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Experience = () => {
  const skills = {
    'Frontend Development': [
      { name: 'HTML', level: 'Experienced' },
      { name: 'CSS', level: 'Experienced' },
      { name: 'ReactJS', level: 'Intermediate' },
      { name: 'JavaScript', level: 'Basic' }
    ],
    'UI/UX Design': [
      { name: 'Figma', level: 'Experienced' },
      { name: 'Adobe XD', level: 'Intermediate' }
    ],
    'Data Analysis': [
      { name: 'SQL Server', level: 'Experienced' },
      { name: 'MySQL', level: 'Intermediate' },
      { name: 'Tableau', level: 'Intermediate' },
      { name: 'Excel', level: 'Intermediate' }
    ]
  };

  return (
    <section id="experience" className="min-h-screen py-16 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gray-600 dark:text-gray-400 mb-2">Explore My</p>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Experience</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">{category}</h3>
              <div className="space-y-4">
                {skillList.map((skill) => (
                  <div key={skill.name} className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{skill.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{skill.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 