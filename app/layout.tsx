import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
  keywords: ['Next.js', 'React', 'JavaScript', 'Dashboard', 'Invoices', 'Customers'],
  authors: [
    {
      name: 'Vercel',
      url: 'https://vercel.com',
    },
  ],
  creator: 'Vercel',
  publisher: 'Vercel',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://next-learn-dashboard.vercel.sh',
    title: 'Acme Dashboard',
    description: 'The official Next.js Learn Dashboard built with App Router.',
    siteName: 'Acme Dashboard',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Acme Dashboard',
    description: 'The official Next.js Learn Dashboard built with App Router.',
    creator: '@vercel',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}