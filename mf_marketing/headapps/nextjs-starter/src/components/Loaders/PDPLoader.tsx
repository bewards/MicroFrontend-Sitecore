import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const PDPLoader: React.FC = () => {
  return (
    <div className="container mx-auto py-4">
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="flex-1">
          <Skeleton height={400} borderRadius={12} containerClassName="w-full h-full" />
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <Skeleton width={300} height={32} borderRadius={8} />
          <Skeleton width={120} height={24} borderRadius={8} />
          <Skeleton width={80} height={24} borderRadius={8} />
          <Skeleton count={4} height={16} borderRadius={4} />
          <div className="flex gap-4 mt-4">
            <Skeleton width={120} height={40} borderRadius={8} />
            <Skeleton width={120} height={40} borderRadius={8} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDPLoader;
