import React from 'react';
import Ill from '@/components/Ill';

const Index = () => {
  return (
    <>
      <Ill />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-surface rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-bold text-surface-foreground mb-4">
              Why Choose Our Platform
            </h2>
            <p className="text-surface-foreground/80 mb-6">
              Our platform provides the tools you need to streamline your workflow, 
              increase productivity, and achieve your goals faster than ever before.
            </p>
            <ul className="space-y-2">
              {['Intuitive Interface', 'Powerful Analytics', 'Team Collaboration', 'Custom Workflows'].map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                  <span className="text-surface-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-bold text-surface-foreground mb-4">
              Get Started Today
            </h2>
            <p className="text-surface-foreground/80 mb-6">
              Join thousands of satisfied users who have transformed their workflow with our platform.
            </p>
            <button className="btn-primary w-full">
              Sign Up Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;