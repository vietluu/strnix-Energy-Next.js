import React, { useEffect, useLayoutEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Logo({ option }: any) {
  const [logo, setLogo] = useState('logo.svg');
 
  useLayoutEffect(() => {
    (() => {
      console.log('run');
      switch (option) {
        case 'dark':
          setLogo('logo.svg');

          break;
        case 'light':
          setLogo('logo-3.png');

          break;
        case 'footer':
          setLogo('footer-logo-1.svg');
          break;

        default:
          return;
      }
    })();
  }, [option]);

  return (
    <Link href='/'>
      <Image
        width={130}
        height={60}
        priority
        src={`/assets/images/home/${logo}`}
        alt='Logo'
      />
    </Link>
  );
}
