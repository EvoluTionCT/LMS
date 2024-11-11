import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <main className="p-8 text-center">
        <h1 className="text-4xl font-bold">Welcome to the Learning Management System</h1>
        <p className="text-gray-600 mt-4">Your journey to knowledge starts here.</p>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
