import Link from 'next/link';
import { routes } from './routes';
import { routeType } from '@/types/routesType';

export default function Navpc({ setSearch }: any) {
  return (
    <nav className="nav-pc">
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
      <div className="search">
        <span onClick={(e) => setSearch(true)}>
          <i className="fas fa-search "></i>
        </span>
      </div>
    </nav>
  );
}
