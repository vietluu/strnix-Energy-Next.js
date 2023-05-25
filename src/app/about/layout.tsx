import { metadata as meta } from '../layout';
export const metadata = meta({ title: 'About Strnix' });

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
