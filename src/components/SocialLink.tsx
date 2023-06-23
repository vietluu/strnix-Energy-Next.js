import React from 'react';
import Link from 'next/link';

export default function SocialLink() {
  return (
    <ul className="social-comunity">
      <li>
        <Link href="# ">
          <i className="fab fa-twitter"></i>
        </Link>
      </li>
      <li>
        <Link href="# ">
          <i className="fab fa-facebook-f"></i>
        </Link>
      </li>
      <li>
        <Link href="# ">
          <i className="fab fa-instagram "></i>
        </Link>
      </li>
      <li>
        <Link href="# ">
          <i className="fab fa-linkedin-in "></i>
        </Link>
      </li>
      <li>
        <Link href="# ">
          <i className="fab fa-pinterest-p "></i>
        </Link>
      </li>
    </ul>
  );
}
