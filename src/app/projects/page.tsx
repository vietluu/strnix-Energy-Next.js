import dynamic from 'next/dynamic';
import { metadata as meta } from '../layout';

export const metadata = meta({ title: 'Our Projects ' });

const Project = dynamic(() => import('@/ui/project/Project'));

export default function page() {
  return <Project />;
}
