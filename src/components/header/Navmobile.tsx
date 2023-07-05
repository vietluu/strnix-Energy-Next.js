import Link from 'next/link';
import Logo from '../Logo';
import { routes } from './routes';
import { routeType } from '@/types/routesType';

export default function Navmobile({ setMenuMobile }: any) {
  const handleShowDropdown = (e: any): void => {
    e.children[1].classList.toggle('activebtn');
    e.children[2].classList.toggle('open');
  };

  return (
    <nav className="mobile-menu">
      <div className="dropdownnav-menu">
        <ul id="dropdown">
          <li id="menu-img" onClick={(e) => setMenuMobile(false)}>
            <Logo option="light" />
          </li>
          {routes.map((route: routeType) => (
            <li
              key={route.label}
              onClick={(e) => handleShowDropdown(e.currentTarget)}
            >
              <Link
                onClick={(e) => setMenuMobile(false)}
                href={`${route.link}`}
              >
                <strong>{route.label}</strong>
              </Link>
              {route.subDomain.length > 0 && (
                <>
                  <div className="dropdown-icon">
                    <span className="fa fa-angle-right"></span>
                  </div>

                  <ul className="nav-mobile">
                    {route.subDomain.map((sub) => (
                      <li>
                        <Link
                          onClick={(e) => setMenuMobile(false)}
                          href={`${sub.label}`}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          ))}
        </ul>
        <div className="btn-close" onClick={(e) => setMenuMobile(false)}>
          <i className="fa fa-times fa-2x"></i>
        </div>
      </div>
    </nav>
  );
}
