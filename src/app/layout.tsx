
import '/assets/css/slick.css'; 
import '/assets/css/owl.carousel.css'
import 'antd/dist/reset.css';
import '/assets/css/bootstrap.min.css'
import '/assets/css/aos.css';
import '/assets/css/globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/Header';
import { Footer } from '../components/Footer';
const inter = Inter({ subsets: ['vietnamese'] })

export const metadata = {
    title: "Strnix World's Energy",
    description: 'my next app',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
 
  return (
    <html lang="en">
          <head>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"/>

      </head>
      <body className={'container-body ' + inter.className}>
        <Header/>        
        {   
        
        children    
        }
        <Footer/>
       
        </body>

    </html>
  )
}
