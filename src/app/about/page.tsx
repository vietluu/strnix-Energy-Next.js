import dynamic from 'next/dynamic';
import { metadata as meta } from '../layout';

const About = dynamic(() => import('@/ui/about/About'));

export const metadata = meta({ title: 'About Strnix' });

export default function page() {
  return <About />;
}
