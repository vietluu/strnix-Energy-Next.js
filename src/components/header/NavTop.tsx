import React, { JSX } from 'react';
import Link from 'next/link';
import Logo from '../Logo';
import { routes } from './routes';
import { routeType } from '@/types/routesType';

export default function NavTop(): JSX.Element {
  return (
    <nav className="header-top clearfix">
      <div className="container row  flex-nowrap mx-auto">
        <div className="logo-top">
          <Logo />
        </div>
        <div className="main-menu clearfix">
        <ul className="menu">
        {
          routes.map((value: routeType) => (
            <li key={value.label}>
              <Link  href={`${value.link}`} className="hover1 ">
                <strong>{value.label}</strong>
                </Link>
                {
                  value.subDomain.length > 0 && (
                    <ul className="sub-menu ">
                      {
                        value.subDomain.map((sub) => (
                          <li key={sub.label}>
                            <Link href={`${sub.label}`}>{ sub.label}</Link>
                          </li>
                        ))
                      }
                    </ul>
                  )
                }
          
            </li>
          ))
        }
      </ul>
        </div>
      </div>
    </nav>
  );
}
