import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const projectCategories = {
  'Data Science': [
    {
      id: 'airbnb-dashboard',
      title: 'AirBnB Analytics Dashboard',
      description: 'Real estate analytics and insights',
      image: '/assets/airbnb-dashboard.png'
    },
    {
      id: 'covid-dashboard',
      title: 'COVID-19 Statistics Dashboard',
      description: 'Global pandemic statistics tracker',
      image: '/assets/covid-dashboard.png'
    }
  ],
  'Software Development': [
    {
      id: 'gym-crm',
      title: 'Gym CRM System',
      description: 'Complete gym management solution',
      image: '/assets/gym-crm.png'
    }
  ],
  'Web Development': [
    {
      id: 'breaking-bad',
      title: 'Breaking Bad Fan Site',
      description: 'Fan website for the TV series',
      image: '/assets/breaking-bad.png'
    }
  ],
  'Design Projects': [
    {
      id: 'mobile-ui',
      title: 'UI/UX for Mobile App',
      description: 'Mobile application interface design',
      image: '/assets/mobile-ui.png'
    },
    {
      id: 'desktop-ui',
      title: 'UI Desktop Design for Gym CRM',
      description: 'Desktop application interface design',
      image: '/assets/desktop-ui.png'
    }
  ]
};

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-16 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gray-600 dark:text-gray-400 mb-2">Browse My Recent</p>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Projects</h2>
        </div>

        <div className="grid gap-8">
          {Object.entries(projectCategories).map(([category, projects]) => (
            <div key={category} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <Link
                to={`/category/${encodeURIComponent(category)}`}
                className="block p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {category}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {projects.length} Project{projects.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                  <FaArrowRight className="text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

// Export for use in other components
export { projectCategories }; 