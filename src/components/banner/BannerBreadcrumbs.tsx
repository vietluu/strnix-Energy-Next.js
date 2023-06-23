import React from 'react';
import { Breadcrumb } from 'antd';
import { Breadcrumbs } from '../breadcrums/breadcrumMap';

interface Breadcrumb {
  title: string;
  url: string;
}
export default function BannerBreadcrumbs(props: Breadcrumb) {
  return (
    <div
      className="page-baner banner-title"
      style={{
        backgroundImage: `url(${props.url})`,
      }}
    >
      <div className="mt-11 pt-8 font-weight-bold">
        <h5>
          <Breadcrumb separator="→" items={Breadcrumbs(`${props.title}`)} />
        </h5>
        <h1 className="text-6xl mt-4">{props.title}</h1>
      </div>
    </div>
  );
}
