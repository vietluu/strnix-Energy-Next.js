import Project from "@/ui/project/Project";
import { metadata as meta } from '../layout';

export const metadata = meta({ title: 'Our Projects ' });

export default function page() {
  return (
    <Project/>
  )
}
