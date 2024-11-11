import React from 'react';
import Image from 'next/image';

const NoResult = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 text-gray-600">
      <Image
        src="/images/file-search.svg"
        alt="NoResult"
        width={32}
        height={32}
        className="w-24 h-24 shrink-0"
      />
      <h2 className="text-xl font-semibold">No result</h2>
      <p className="text-gray-500">Try to remove filters and sorting</p>
    </div>
  );
};

export default NoResult;
