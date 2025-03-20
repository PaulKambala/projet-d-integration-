'use client'
import { Inter } from 'next/font/google';
import { appWithTranslation } from 'next-i18next';
import Body from '@/components/Body';
import MyContextProvider from '@/provider/MyContextProvider';
import './globals.css';
import i18n from '@/i18next';
const inter = Inter({ subsets: ['latin'] });
// export const metadata = {
//  title: 'Biblio-app',
//  description: 'Demo Cours Programmation web avancé',
// };
 function RootLayout({ children }) {
 return (
  <html lang="en">
   <MyContextProvider>
    <Body children={children} />
   </MyContextProvider>
  </html>
 );
 }
export default appWithTranslation(RootLayout)
