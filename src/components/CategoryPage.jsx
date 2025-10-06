import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { projectCategories } from './Projects';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const projects = projectCategories[decodeURIComponent(categoryName)] || [];

  return (
    <div className="min-h-screen py-24 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center mb-8">
          <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
            <FaArrowLeft className="mr-2" />
            Back to Categories
          </Link>
        </div>

        {/* Category Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">{decodeURIComponent(categoryName)}</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            {projects.length} Project{projects.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage; 