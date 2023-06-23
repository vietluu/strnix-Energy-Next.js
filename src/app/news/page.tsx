import News from "@/ui/news/News";
import { metadata as meta } from '../layout';

export const metadata = meta({ title: 'News' });

export default function page() {
  return (
    <News/>
  )
}
