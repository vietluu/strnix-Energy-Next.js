import { metadata as meta } from '../layout';
export const metadata = meta({ title: 'Contact Us' });

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
