import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono, Dancing_Script } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { CursorDot } from '@/components/ui/CursorDot';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing-script',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Full Stack Dev | MERN & Next.js Expert',
  description: 'Building scalable, high-performance web applications with a focus on CI/CD and AI integration.',
  keywords: 'Full Stack Developer, MERN, Next.js, React, TypeScript, AI Integration, DevOps',
  authors: [{ name: 'Rahul Mohite' }],
  openGraph: {
    title: 'Full Stack Dev | MERN & Next.js Expert',
    description: 'Building scalable, high-performance web applications with a focus on CI/CD and AI integration.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Full Stack Dev | MERN & Next.js Expert',
    description: 'Building scalable, high-performance web applications with a focus on CI/CD and AI integration.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${dancingScript.variable} font-body-md antialiased`}>
        <Providers>
          <ScrollProgress />
          <CursorDot />
          <Header />
          <main className="pt-20 overflow-x-hidden">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}