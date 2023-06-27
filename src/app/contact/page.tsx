import dynamic from 'next/dynamic'
const Contact = dynamic(()=> import("@/ui/contact/Contact"))
import { metadata as meta } from '../layout';

export const metadata = meta({ title: 'Contact Us' });

export default function page() {
  return (
    <Contact/>
  )
}
