import Link from 'next/link';
export default function Navpc({ setSearch }: any) {
  return (
    <nav className="nav-pc">
      <ul className="menu">
        <li>
          <Link href="/" className="hover1 ">
            <strong>HOME</strong>
          </Link>
          <ul className="sub-menu">
            <li>
              <Link href="# ">Home Solar Energy</Link>
            </li>
            <li>
              <Link href="# ">Home Wind Power</Link>
            </li>
            <li>
              <Link href="# ">Home Bio Power</Link>
            </li>
            <li>
              <Link href="# ">Home Fuel Power</Link>
            </li>
            <li>
              <Link href="# ">Home Hydro Power</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="about" className="hover1 ">
            <strong>ABOUT US</strong>
          </Link>
          <ul className="sub-menu ">
            <li>
              <Link href="about">ABOUT US</Link>
            </li>
            <li>
              <Link href="# ">{"FAQ's"}</Link>
            </li>
            <li>
              <Link href="# ">Delicated Project</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="services" className="hover1 ">
            <strong>SERVICES</strong>
          </Link>
          <ul className="sub-menu ">
            <li>
              <Link href="# ">Our Services</Link>
            </li>
            <li>
              <Link href="# ">Commercial Services</Link>
            </li>
            <li>
              <Link href="# ">Panel Installation</Link>
            </li>
            <li>
              <Link href="# ">Replacement Upgrade</Link>
            </li>
            <li>
              <Link href="# ">Residential EV Charges</Link>
            </li>
            <li>
              <Link href="# ">Solar Maintenance</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="projects" className="hover1 ">
            <strong>PROJECTS</strong>
          </Link>
        </li>
        <li>
          <Link href="news" className="hover1 ">
            <strong>NEWS</strong>
          </Link>
          <ul className="sub-menu ">
            <li>
              <Link href="# ">Blog Grid Style</Link>
            </li>
            <li>
              <Link href="# ">Blog with Sidebar</Link>
            </li>
            <li>
              <Link href="# ">Blog Post Details</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="contact" className="hover1 ">
            <strong>CONTACT</strong>
          </Link>
        </li>
      </ul>
      <div className="search">
        <span onClick={(e) => setSearch(true)}>
          <i className="fas fa-search "></i>
        </span>
      </div>
    </nav>
  );
}
