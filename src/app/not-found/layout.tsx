import { Metadata } from 'next';
import '../../../assets/css/not-found.css';

export const metadata: Metadata = {
  title: 'page not found',
};
export default function NotFoundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
