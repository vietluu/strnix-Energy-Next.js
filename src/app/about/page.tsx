import dynamic from 'next/dynamic'
const About = dynamic(()=> import("@/ui/about/About"))
import { metadata as meta } from '../layout';

export const metadata = meta({ title: 'About Strnix' });

export default function page() {
  return (
    <About/>
  )
}
