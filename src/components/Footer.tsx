import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              Management Edge Limited is a recognized leader in innovative solutions that assist individuals,
              organizations and Governments excel in business by providing the much needed resources, skills, and knowledge.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/resources" className="text-gray-400 hover:text-white">Resources</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Exam Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/exams/comptia" className="text-gray-400 hover:text-white">CompTIA Certification</Link></li>
              <li><Link to="/exams/cbap" className="text-gray-400 hover:text-white">CBAP Certification</Link></li>
              <li><Link to="/exams/project-management" className="text-gray-400 hover:text-white">Project Management</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@testedge.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Test Street, Suite 100</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© Copyright 2024. All Rights Reserved | <Link to="/privacy" className="hover:text-white">Privacy Policy</Link></p>
        </div>
      </div>
    </footer>
  );
}