import React from 'react';
import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="max-w-xl mx-auto px-4 mt-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for exams..."
          className="w-full px-4 py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>
    </div>
  );
}