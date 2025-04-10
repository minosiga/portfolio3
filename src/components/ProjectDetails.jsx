import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const projectData = {
  'airbnb-dashboard': {
    title: 'AirBnB Analytics Dashboard',
    category: 'Data Science',
    description: 'Real estate analytics and insights dashboard built with Tableau',
    image: '/assets/airbnb-dashboard.png',
    overview: 'Comprehensive dashboard providing insights into AirBnB rental markets...',
    technologies: ['Tableau', 'Python', 'Pandas'],
    source: 'https://github.com/username/airbnb-dashboard',
    demo: 'https://public.tableau.com/...'
  },
  // Add more projects here
};

const ProjectDetails = () => {
  const { projectId } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const project = projectData[projectId];

  if (!project) return <div>Project not found</div>;

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'photos', label: 'Photos' },
    { id: 'source', label: 'Source' },
    { id: 'demo', label: 'Live Demo' }
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center mb-8 text-sm">
          <Link to="/" className="text-gray-600 hover:text-gray-900">Projects</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link to={`/category/${project.category}`} className="text-gray-600 hover:text-gray-900">{project.category}</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900">{project.title}</span>
        </div>

        {/* Project Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{project.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">{project.description}</p>
        </div>

        {/* Project Image */}
        <div className="mb-8">
          <img src={project.image} alt={project.title} className="w-full rounded-lg shadow-lg" />
        </div>

        {/* Tabs Navigation */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="prose dark:prose-invert max-w-none">
          {activeTab === 'overview' && (
            <div>
              <h2>Project Overview</h2>
              <p>{project.overview}</p>
              <h3>Technologies Used</h3>
              <ul>
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          )}
          {activeTab === 'source' && (
            <div>
              <h2>Source Code</h2>
              <a href={project.source} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                View on GitHub
              </a>
            </div>
          )}
          {activeTab === 'demo' && (
            <div>
              <h2>Live Demo</h2>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                View Live Demo
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails; 