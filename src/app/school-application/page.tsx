import React from 'react';
import { SchoolForm } from '@/components/SchoolForm';

const SchoolApplicationPage = () => {
  return (
    <main className="bg-gray-50 py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <SchoolForm />
      </div>
    </main>
  );
};

export default SchoolApplicationPage;
