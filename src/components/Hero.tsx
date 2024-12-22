import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-[500px] bg-gradient-to-r from-indigo-900 to-indigo-700">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80")',
          opacity: '0.2'
        }}
      />
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-4">
          <h1 className="text-5xl font-bold text-white mb-6">Advance your Career</h1>
          <p className="text-xl text-white mb-8">Test your Knowledge</p>
          <button className="bg-white text-indigo-900 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
            Start Learning
          </button>
        </div>
      </div>
    </div>
  );
}