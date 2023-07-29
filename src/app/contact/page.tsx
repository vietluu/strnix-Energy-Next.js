import dynamic from 'next/dynamic';
import { metadata as meta } from '../layout';

export const metadata = meta({ title: 'Contact Us' });

const Contact = dynamic(() => import('@/ui/contact/Contact'));

export default function page() {
  return <Contact />;
}
