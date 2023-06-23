'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
export const Breadcrumbs = (value: string) => {
  const pathname = usePathname();
  const pathSnippets = pathname.split('/').filter((i) => i);

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return {
      key: url,
      title: (
        <Link className="text-white" href={url}>
          {value.trim() !== '' ? value : url}
        </Link>
      ),
    };
  });
 
  const breadcrumbItems = [
    {
      title: (
        <Link className="text-white" href="/">
          {"Strnix World's Energy"}
        </Link>
      ),
      key: "Strnix World's Energy",
    },
  ].concat(extraBreadcrumbItems[extraBreadcrumbItems.length -1]);
  
  console.log(breadcrumbItems)
  return breadcrumbItems;
};
