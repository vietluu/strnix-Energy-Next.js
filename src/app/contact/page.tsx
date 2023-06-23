import Contact from '@/ui/contact/Contact'
import { metadata as meta } from '../layout';

export const metadata = meta({ title: 'Contact Us' });

export default function page() {
  return (
    <Contact/>
  )
}
