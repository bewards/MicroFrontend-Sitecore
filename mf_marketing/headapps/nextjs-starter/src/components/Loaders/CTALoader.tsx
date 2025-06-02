import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const CTALoader: React.FC = () => {
  return (
    <div className="container mx-auto py-4">
      <div className="flex flex-col gap-8">
        <Skeleton
          containerClassName="w-[250px] shadow-lg rounded-md"
          height={50}
          borderRadius={8}
        />
        <Skeleton
          containerClassName="flex justify-center items-center gap-8"
          borderRadius={8}
          count={3}
          height={200}
        />
      </div>
    </div>
  );
};

export default CTALoader;
