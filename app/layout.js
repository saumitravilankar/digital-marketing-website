import Navbar from '@components/Navbar'
import './globals.css'
import { Outfit } from 'next/font/google'
import ScrollComponent from '@components/ScrollComponent'
import FooterNew from '@components/FooterNew'
import ScrollToTop from '@components/ScrollToTop'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: "Dynastical Communication",
    template: "%s | Dynastical Communication"
  },
  description: 'Drive engagement, boost ROI with our best digital marketing agency. SEO, PPC, branding, content, web design, SMM. Result-driven strategies for success!',
  keywords: "Best Digital Marketing Agency, drives engagement, Result driven SEO, ROI driven PPC campaigns , Branding, SMO, PPC, PR, Web design, branding, branding marketing, content, content marketing, web designing, web development, website development, social media marketing, smm, online marketing, social media optimization, smo, sem, search engine marketing, seo, seo optimization, seo is"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Navbar />
        {/* <ScrollComponent /> */}
        <ScrollToTop />
        {children}
        <FooterNew />
      </body>
    </html>
  )
}
