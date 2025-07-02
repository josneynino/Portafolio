import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Josney Alejandro Niño Gómez - Frontend Developer',
  description: 'Experienced Frontend Developer specializing in React, Next.js, and TypeScript. Creating modern, responsive web applications.',
  keywords: ['Frontend Developer', 'React', 'Next.js', 'TypeScript', 'JavaScript', 'Web Development'],
  authors: [{ name: 'Josney Alejandro Niño Gómez' }],
  creator: 'Josney Alejandro Niño Gómez',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://josney-portfolio.vercel.app',
    title: 'Josney Alejandro Niño Gómez - Frontend Developer',
    description: 'Experienced Frontend Developer specializing in React, Next.js, and TypeScript.',
    siteName: 'Josney Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Josney Alejandro Niño Gómez - Frontend Developer',
    description: 'Experienced Frontend Developer specializing in React, Next.js, and TypeScript.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}