import { metadata as meta } from '../layout';
export const metadata = meta({ title: 'Our Services' });

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
