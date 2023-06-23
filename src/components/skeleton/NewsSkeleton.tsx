import React from 'react';
import { Skeleton } from 'antd';

export default function NewsSkeleton() {
  return (
    <div className="px-3 mb-[20px]">
      <Skeleton.Avatar shape="square" className="w-full" active />
      <Skeleton active paragraph className="py-2" />
    </div>
  );
}
