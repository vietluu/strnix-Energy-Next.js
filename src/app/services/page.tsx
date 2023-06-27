import dynamic from 'next/dynamic'
const Service = dynamic(()=> import("@/ui/service/Service"))
import { metadata as meta } from '../layout';

export const metadata = meta({ title: 'Our Services' });

export default function page() {
  return (
    <Service/>
  )
}
