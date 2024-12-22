import React from 'react';
import { Search, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <Search className="w-6 h-6" />
              <span className="font-bold text-xl">TestEdge</span>
            </Link>
            
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-indigo-200">Home</Link>
              <Link to="/about" className="hover:text-indigo-200">About Us</Link>
              <Link to="/resources" className="hover:text-indigo-200">Resources</Link>
              <Link to="/exams" className="hover:text-indigo-200">Online Testing</Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/contact" className="hover:text-indigo-200">Contact</Link>
            <Link to="/login" className="flex items-center space-x-1 hover:text-indigo-200">
              <User className="w-5 h-5" />
              <span>Login</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}