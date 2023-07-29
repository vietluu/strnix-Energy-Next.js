import dynamic from 'next/dynamic';
import { metadata as meta } from '../layout';

export const metadata = meta({ title: 'Our Services' });

const Service = dynamic(() => import('@/ui/service/Service'));

export default function page() {
  return <Service />;
}
