import React from 'react';
import { CollegeForm } from '@/components/CollegeForm';

const CollegeApplicationPage = () => {
  return (
    <main className="bg-gray-50 py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <CollegeForm />
      </div>
    </main>
  );
};

export default CollegeApplicationPage;
