import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 1,
    title: 'CompTIA Certification',
    image: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80',
    path: '/exams/comptia'
  },
  {
    id: 2,
    title: 'CBAP Certification',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80',
    path: '/exams/cbap'
  },
  {
    id: 3,
    title: 'Project Management Management',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80',
    path: '/exams/project-management'
  }
];

export default function ExamCategories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Exam Categories</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={category.path}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:-translate-y-1">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${category.image})` }}
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-center group-hover:text-indigo-600">
                    {category.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}