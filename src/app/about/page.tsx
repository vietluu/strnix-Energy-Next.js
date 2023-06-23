import About from '@/ui/about/About'
import { metadata as meta } from '../layout';

export const metadata = meta({ title: 'About Strnix' });

export default function page() {
  return (
    <About/>
  )
}
