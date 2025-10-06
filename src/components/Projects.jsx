import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const projectCategories = {
  'AI Projects': [
    {
      id: 'weather-chatbot',
      title: 'Weather Chatbot',
      description: 'Developed an intelligent chatbot using Java that provides real-time weather information and temperature updates',
      image: '/assets/chatbot.png'
    }
  ],
  'App Mobile Development': [
    {
      id: 'score-it',
      title: 'Score It - Student Calculator',
      description: 'Mobile app for students to calculate their module scores and track academic performance',
      image: '/assets/p1.jpg',
      screenshots: [
        {
          id: 'score-it-1',
          title: 'Main Interface',
          image: '/assets/p1.jpg'
        },
        {
          id: 'score-it-2',
          title: 'Module Calculator',
          image: '/assets/p2.jpg'
        },
        {
          id: 'score-it-3',
          title: 'Results View',
          image: '/assets/p3.jpg'
        }
      ]
    }
  ],
  'Web Development': [
    {
      id: 'gym-crm-web',
      title: 'GymCRM Web Application',
      description: 'Web-based version of the GymCRM system with responsive design and modern UI',
      image: '/assets/d1.png',
      screenshots: [
        {
          id: 'dashboard',
          title: 'Dashboard Overview',
          image: '/assets/d1.png'
        },
        {
          id: 'analytics',
          title: 'Analytics Dashboard',
          image: '/assets/d2.png'
        },
        {
          id: 'member-management',
          title: 'Member Management',
          image: '/assets/d3.png'
        },
        {
          id: 'schedule',
          title: 'Schedule Management',
          image: '/assets/d4.png'
        },
        {
          id: 'reports',
          title: 'Reports and Analytics',
          image: '/assets/d5.png'
        },
        {
          id: 'settings',
          title: 'System Settings',
          image: '/assets/d6.png'
        },
        {
          id: 'attendance',
          title: 'Attendance Tracking',
          image: '/assets/d7.png'
        },
        {
          id: 'payments',
          title: 'Payment Management',
          image: '/assets/d8.png'
        },
        {
          id: 'notifications',
          title: 'Notification Center',
          image: '/assets/d9.png'
        },
        {
          id: 'profile',
          title: 'User Profile',
          image: '/assets/d10.png'
        }
      ]
    },
    {
      id: 'E-Commerce Administration System',
      title: 'E-Commerce Administration System',
      description: 'The goal of this project is to design and develop a web application for managing products, orders, and customers on an e-commerce platform. This application will facilitate sales management and provide detailed performance monitoring for the online store.',
      image: '/assets/gym-crm.png',
      source: 'https://github.com/minosiga/data_analysis-covid',
      screenshots: [
        {
          id: 'covid-1',
          title: 'COVID-19 Statistics Overview',
          image: '/assets/covid1.png'
        },
        {
          id: 'covid-2',
          title: 'COVID-19 Data Analysis',
          image: '/assets/covid2.png'
        },
        {
          id: 'covid-dashboard',
          title: 'Main Dashboard View',
          image: '/assets/covid-dashboard.png'
        }
      ],
      technologies: ['Tableau', 'SQL', 'Excel', 'Data Analysis']
    }
  ],
  'Desktop Development': [
    {
      id: 'gym-crm-desktop',
      title: 'Gym CRM - Comprehensive Management System',
      description: 'Full-stack gym management system featuring modern JavaFX desktop application integrated with Node.js REST API backend. Enterprise-grade solution with comprehensive CRM, financial management, session scheduling, gym card system, and analytics dashboard with role-based access control.',
      image: '/assets/dashboard.jpg',
      technologies: ['JavaFX 19', 'Java 19', 'Node.js', 'Express.js', 'MySQL', 'Sequelize', 'JWT', 'Maven'],
      screenshots: [
        {
          id: 'gym-crm-login',
          title: 'Login Interface',
          image: '/assets/login.jpg'
        },
        {
          id: 'gym-crm-dashboard',
          title: 'Main Dashboard',
          image: '/assets/dashboard.jpg'
        },
        {
          id: 'gym-crm-clients',
          title: 'Client Management',
          image: '/assets/list of clients.jpg'
        },
        {
          id: 'gym-crm-settings',
          title: 'System Settings',
          image: '/assets/settings.jpg'
        },
        {
          id: 'gym-crm-users',
          title: 'User Management',
          image: '/assets/users.jpg'
        },
        {
          id: 'gym-crm-debt',
          title: 'Debt Management',
          image: '/assets/debt.jpg'
        },
        {
          id: 'gym-crm-activity',
          title: 'Activity Log',
          image: '/assets/activity.jpg'
        },
        {
          id: 'gym-crm-inventory',
          title: 'Inventory Management',
          image: '/assets/inventory.jpg'
        },
        {
          id: 'gym-crm-charts',
          title: 'Analytics Charts',
          image: '/assets/charts.jpg'
        },
        {
          id: 'gym-crm-consumption',
          title: 'Consumption Tracking',
          image: '/assets/consumption.jpg'
        },
        {
          id: 'gym-crm-offers',
          title: 'Offers Management',
          image: '/assets/offers.jpg'
        }
      ]
    }
  ],
  'Web Development': [
    {
      id: 'medical-management',
      title: 'Medical Management Platform',
      description: 'Comprehensive web-based solution for managing patient appointments, doctor schedules, medical records, and billing systems. Features role-based access for patients, doctors, and accountants with JWT authentication and MySQL database.',
      image: '/assets/med1.png',
      technologies: ['Node.js', 'Express.js', 'MySQL', 'JWT', 'Bootstrap 5', 'JavaScript'],
      screenshots: [
        {
          id: 'medical-med1',
          title: 'User Registration Page',
          image: '/assets/med1.png'
        },
        {
          id: 'medical-med2',
          title: 'Dashboard Overview',
          image: '/assets/med2.png'
        },
        {
          id: 'medical-med3',
          title: 'Patient Portal',
          image: '/assets/med3.png'
        },
        {
          id: 'medical-med4',
          title: 'Doctor Portal',
          image: '/assets/med4.png'
        },
        {
          id: 'medical-med5',
          title: 'Accountant Portal',
          image: '/assets/med5.png'
        }
      ]
    },
    {
      id: 'ecommerce-admin',
      title: 'E-Commerce Administration System',
      description: 'Comprehensive web application for managing products, orders, customers, and analytics on an e-commerce platform. Features product management, order processing, user administration, and detailed performance monitoring with Laravel framework.',
      image: '/assets/dash1.jpg',
      technologies: ['Laravel', 'PHP', 'MySQL', 'Bootstrap 5', 'Tailwind CSS', 'JavaScript'],
      screenshots: [
        {
          id: 'ecommerce-addprod',
          title: 'Add Product Form',
          image: '/assets/addprod.jpg'
        },
        {
          id: 'ecommerce-analytics1',
          title: 'Analytics Dashboard 1',
          image: '/assets/analytics1.jpg'
        },
        {
          id: 'ecommerce-analytics2',
          title: 'Analytics Dashboard 2',
          image: '/assets/analytics2.jpg'
        },
        {
          id: 'ecommerce-analytics3',
          title: 'Analytics Dashboard 3',
          image: '/assets/analytics3.jpg'
        },
        {
          id: 'ecommerce-categ',
          title: 'Category Management',
          image: '/assets/categ.jpg'
        },
        {
          id: 'ecommerce-dash1',
          title: 'Main Dashboard 1',
          image: '/assets/dash1.jpg'
        },
        {
          id: 'ecommerce-dash2',
          title: 'Main Dashboard 2',
          image: '/assets/dash2.jpg'
        },
        {
          id: 'ecommerce-editcateg',
          title: 'Edit Category Form',
          image: '/assets/editcateg.jpg'
        },
        {
          id: 'ecommerce-editprod',
          title: 'Edit Product Form 1',
          image: '/assets/editprod.jpg'
        },
        {
          id: 'ecommerce-editprod2',
          title: 'Edit Product Form 2',
          image: '/assets/editprod2.jpg'
        },
        {
          id: 'ecommerce-orders',
          title: 'Orders Management',
          image: '/assets/orders.jpg'
        },
        {
          id: 'ecommerce-proddash',
          title: 'Product Dashboard',
          image: '/assets/proddash.jpg'
        },
        {
          id: 'ecommerce-users',
          title: 'User Management',
          image: '/assets/users.jpg'
        },
        {
          id: 'ecommerce-vieworder',
          title: 'Order Details View 1',
          image: '/assets/vieworder.jpg'
        },
        {
          id: 'ecommerce-vieworder2',
          title: 'Order Details View 2',
          image: '/assets/vieworder2.jpg'
        },
        {
          id: 'ecommerce-viewuser',
          title: 'User Profile View 1',
          image: '/assets/viewuser.jpg'
        },
        {
          id: 'ecommerce-viewuser2',
          title: 'User Profile View 2',
          image: '/assets/viewuser2.jpg'
        }
      ]
    },
    {
      id: 'bloom-ivory',
      title: 'Bloom & Ivory - Event Planning Platform',
      description: 'Sophisticated full-featured event planning and decoration services platform combining business website and e-commerce functionality. Features portfolio showcase, service management, blog system, and complete e-commerce capabilities for luxury wedding and event planning services.',
      image: '/assets/bloom1.png',
      technologies: ['PHP 8.1', 'MySQL', 'HTML5', 'CSS3', 'JavaScript ES6+', 'Bootstrap 5', 'Swiper.js'],
      screenshots: [
        {
          id: 'bloom-bloom1',
          title: 'Homepage with Video Background',
          image: '/assets/bloom1.png'
        },
        {
          id: 'bloom-bloom2',
          title: 'Portfolio Showcase',
          image: '/assets/bloom2.png'
        },
        {
          id: 'bloom-bloom3',
          title: 'Service Packages',
          image: '/assets/bloom3.png'
        },
        {
          id: 'bloom-bloom4',
          title: 'E-commerce Product Catalog',
          image: '/assets/bloom4.png'
        },
        {
          id: 'bloom-bloom5',
          title: 'Blog & Content Management',
          image: '/assets/bloom5.png'
        },
        {
          id: 'bloom-bloom6',
          title: 'Contact & Consultation Forms',
          image: '/assets/bloom6.png'
        }
      ]
    },
    {
      id: 'eduflow-live',
      title: 'EduFlow Live - E-Learning Platform',
      description: 'Comprehensive full-stack e-learning platform designed for Arabic/RTL audiences targeting primary, middle, and high school students. Features live streaming capabilities, subscription billing, teacher dashboards, course management, and multi-platform streaming integration with Stripe payments.',
      image: '/assets/edu1.png',
      technologies: ['React 18', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Livepeer', 'Zoom API'],
      screenshots: [
        {
          id: 'eduflow-edu1',
          title: 'Student Dashboard',
          image: '/assets/edu1.png'
        },
        {
          id: 'eduflow-edu2',
          title: 'Course Catalog',
          image: '/assets/edu2.png'
        },
        {
          id: 'eduflow-edu3',
          title: 'Lesson Player',
          image: '/assets/edu3.png'
        },
        {
          id: 'eduflow-edu4',
          title: 'Live Streaming Interface',
          image: '/assets/edu4.png'
        },
        {
          id: 'eduflow-edu5',
          title: 'Teacher Dashboard',
          image: '/assets/edu5.png'
        },
        {
          id: 'eduflow-edu6',
          title: 'Subscription Management',
          image: '/assets/edu6.png'
        }
      ]
    },
    {
      id: 'noutqna-platform',
      title: 'Noutqna Platform - Autism Support System',
      description: 'Comprehensive digital platform designed to support families with children on the autism spectrum. Features multi-role authentication, appointment scheduling, progress tracking, real-time messaging, and educational content management with Arabic/RTL support.',
      image: '/assets/autism1.png',
      technologies: ['React 19', 'TypeScript', 'Node.js', 'Express.js', 'MySQL', 'Bootstrap 5', 'Chart.js'],
      screenshots: [
        {
          id: 'autism-autism1',
          title: 'Parent Dashboard',
          image: '/assets/autism1.png'
        },
        {
          id: 'autism-autism2',
          title: 'Specialist Dashboard',
          image: '/assets/autism2.png'
        },
        {
          id: 'autism-autism3',
          title: 'Admin Dashboard',
          image: '/assets/autism3.png'
        },
        {
          id: 'autism-autism4',
          title: 'Appointment Management',
          image: '/assets/autism4.png'
        },
        {
          id: 'autism-autism5',
          title: 'Progress Tracking',
          image: '/assets/autism5.png'
        },
        {
          id: 'autism-autism6',
          title: 'Communication System',
          image: '/assets/autism6.png'
        }
      ]
    },
    {
      id: 'gym-management-web',
      title: 'Gym Management System - Web Application',
      description: 'Comprehensive full-stack gym management system with RESTful API backend and modern React frontend. Features client management, membership tracking, financial operations, session management, gym card system, and comprehensive analytics dashboard with role-based access control.',
      image: '/assets/d1.png',
      technologies: ['React 19', 'Node.js', 'Express.js', 'MySQL', 'Sequelize', 'JWT', 'Chart.js', 'CSS Modules'],
      screenshots: [
        {
          id: 'gym-web-d1',
          title: 'Analytics Dashboard',
          image: '/assets/d1.png'
        },
        {
          id: 'gym-web-d2',
          title: 'Client Management',
          image: '/assets/d2.png'
        },
        {
          id: 'gym-web-d3',
          title: 'Membership Management',
          image: '/assets/d3.png'
        },
        {
          id: 'gym-web-d4',
          title: 'Session Management',
          image: '/assets/d4.png'
        },
        {
          id: 'gym-web-d5',
          title: 'Financial Management',
          image: '/assets/d5.png'
        },
        {
          id: 'gym-web-d6',
          title: 'Gym Card System',
          image: '/assets/d6.png'
        },
        {
          id: 'gym-web-d7',
          title: 'User Administration',
          image: '/assets/d7.png'
        },
        {
          id: 'gym-web-d8',
          title: 'Reports & Analytics',
          image: '/assets/d8.png'
        },
        {
          id: 'gym-web-d9',
          title: 'System Settings',
          image: '/assets/d9.png'
        },
        {
          id: 'gym-web-d10',
          title: 'Attendance Tracking',
          image: '/assets/d10.png'
        }
      ]
    }
  ],
  'Data Analysis': [
    {
      id: 'covid-dashboard',
      title: 'COVID-19 Dashboard',
      description: 'Interactive dashboard analyzing global COVID-19 statistics and trends using data visualization techniques',
      image: '/assets/covid-dashboard.png',
      source: 'https://github.com/minosiga/data_analysis-covid',
      screenshots: [
        {
          id: 'covid-1',
          title: 'COVID-19 Statistics Overview',
          image: '/assets/covid1.png'
        },
        {
          id: 'covid-2',
          title: 'COVID-19 Data Analysis',
          image: '/assets/covid2.png'
        },
        {
          id: 'covid-dashboard',
          title: 'Main Dashboard View',
          image: '/assets/covid-dashboard.png'
        }
      ],
      technologies: ['Tableau', 'SQL', 'Excel', 'Data Analysis']
    },
    {
      id: 'video-games',
      title: 'Video Games Sales Analysis',
      description: 'Analysis of video game sales trends and market performance across different regions and platforms',
      image: '/assets/video-games.png',
      source: 'https://github.com/minosiga/data_analysis-games',
      screenshots: [
        {
          id: 'games-analysis',
          title: 'Video Games Sales Dashboard',
          image: '/assets/g1.png'
        }
      ],
      technologies: ['Tableau', 'Excel', 'Data Analysis']
    },
    {
      id: 'store-sales',
      title: 'Store Sales Analytics',
      description: 'Comprehensive analysis of store performance metrics and sales patterns using interactive visualizations',
      image: '/assets/store-sales.png',
      source: 'https://github.com/minosiga/data_analysis-powerbi-project',
      screenshots: [
        {
          id: 'sales-powerbi',
          title: 'Store Sales Power BI Dashboard',
          image: '/assets/v1.png'
        }
      ],
      technologies: ['Power BI', 'DAX', 'Data Analysis']
    },
    {
      id: 'bike-sales',
      title: 'Bike Sales Dashboard',
      description: 'Dashboard showcasing bike sales performance, customer demographics, and regional trends',
      image: '/assets/bike-sales.png',
      source: 'https://github.com/minosiga/data_analysis-excel-project',
      screenshots: [
        {
          id: 'bike-excel',
          title: 'Bike Sales Excel Analysis',
          image: '/assets/b01.png'
        }
      ],
      technologies: ['Excel', 'Data Analysis', 'Data Visualization']
    },
    {
      id: 'airbnb',
      title: 'Airbnb Market Analysis',
      description: 'Analysis of Airbnb rental market trends, pricing patterns, and property performance metrics',
      image: '/assets/airbnb.png',
      source: 'https://github.com/minosiga/data_analysis-airbnb',
      screenshots: [
        {
          id: 'airbnb-dashboard',
          title: 'Airbnb Market Analysis Dashboard',
          image: '/assets/airbnbscr.png'
        }
      ],
      technologies: ['Tableau', 'Data Analysis', 'Excel']
    }
  ],
  'Logo Designs': [
    {
      id: 'mino-design',
      title: 'Mino Design',
      description: 'Modern and creative logo design combining abstract shapes with typography',
      image: '/assets/mino-design.png'
    },
    {
      id: 'core-it',
      title: 'Core IT',
      description: 'Minimalist and professional logo design for an IT company',
      image: '/assets/scoreit.png'
    }
  ],
  'UI/UX': [
    {
      id: 'gym-crm-ui',
      title: 'GymCRM Desktop Application UI',
      description: 'Modern and intuitive user interface design for the GymCRM desktop application. Features include athlete management, session tracking, mini-market system, expense tracking, and external session management. The UI emphasizes user experience with a clean, professional design in a consistent purple theme.',
      image: '/assets/Desktop-0.png',
      technologies: ['Figma', 'Adobe XD', 'UI/UX Design'],
      screenshots: [
        {
          id: 'add-athlete',
          title: 'Add Athlete Interface',
          image: '/assets/add-a-athlete.png'
        },
        {
          id: 'desktop-1',
          title: 'Dashboard View',
          image: '/assets/Desktop-1.png'
        },
        {
          id: 'desktop-2',
          title: 'Member Management',
          image: '/assets/Desktop-2.png'
        },
        {
          id: 'desktop-3',
          title: 'Schedule View',
          image: '/assets/Desktop-3.png'
        },
        {
          id: 'desktop-4',
          title: 'Calendar Interface',
          image: '/assets/Desktop-4.png'
        },
        {
          id: 'desktop-5',
          title: 'Member Details',
          image: '/assets/Desktop-5.png'
        },
        {
          id: 'desktop-6',
          title: 'Activity Timeline',
          image: '/assets/Desktop-6.png'
        },
        {
          id: 'expenses',
          title: 'Expense Tracking',
          image: '/assets/expenses.png'
        },
        {
          id: 'external-session',
          title: 'External Session Management',
          image: '/assets/external-session.png'
        },
        {
          id: 'card-info',
          title: 'Card Information',
          image: '/assets/information-when-u-pass-the-card.png'
        },
        {
          id: 'member-info',
          title: 'Member Information',
          image: '/assets/informations.png'
        },
        {
          id: 'mini-market',
          title: 'Mini Market Interface',
          image: '/assets/mini-market.png'
        },
        {
          id: 'product-sale',
          title: 'Product Sales Interface',
          image: '/assets/sale-a-product.png'
        },
        {
          id: 'gym-crm-logo',
          title: 'GymCRM Overview',
          image: '/assets/GYMCRM.png'
        }
      ]
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