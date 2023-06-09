import { Hind } from 'next/font/google';
import Header from '../components/header/Header';
import Footer from '../components/Footer';
import { Providers } from '@/redux/providers';
import { Analytics } from '@vercel/analytics/react';
import '/assets/css/slick.css';
import '/assets/css/owl.carousel.css';
import 'antd/dist/reset.css';
import '/assets/css/bootstrap.min.css';
import '/assets/css/aos.css';
import '/assets/css/keyframe.css';
import '/assets/css/flaticon.css';
import '/assets/css/all.min.css';
import '/assets/scss/style.scss';
import { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';

const inter = Hind({ subsets: ['latin'], weight: '400' });

export const metadata = (params: Metadata): Metadata => ({
  viewport: 'width=device-width, initial-scale=1',
  colorScheme: 'light',
  title: {
    default: params?.title
      ? `${params.title}`
      : "Strnix world's energy by Next.js",
    template: "%s | Strnix World's Energy",
  },
  description:
    params.description ||
    'Strnix - Solar and Green Energy WordPress Theme by SmartDataSoft on ThemeForest. Strnix – Solar and Green Energy WordPress Theme Strnix WordPress Theme is web masterpiece which is perfect to promote...',
  authors: [{ name: 'Viet luu' }],
  category: 'next.js',
  keywords: ['next.js', 'reactjs', 'typescript', 'strnix'],
  icons: { icon: '/next.svg', apple: '/next.svg' },
  appleWebApp: true,
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary',
    title: params.twitter?.title || 'strnix energy by next.js',
    description:
      params.twitter?.description ||
      'Strnix - Solar and Green Energy WordPress Theme by SmartDataSoft on ThemeForest. Strnix – Solar and Green Energy WordPress Theme Strnix WordPress Theme is web masterpiece which is perfect to promote...',
    siteId: '1467726470533754880',
    creator: '@nextjs',
    creatorId: '1467726470533754880',
    images: ['/assets/images/home/featured-image-2.jpg'],
  },
  themeColor: 'black',
  openGraph: {
    images:
      params.openGraph?.images || '/assets/images/home/featured-image-1.jpg',
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={'container-body ' + inter.className}>
        <NextTopLoader />
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
