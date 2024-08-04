import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
import { DocumentChartBarIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Data Control',
  },
  description: 'Control de datos de campo.',
  metadataBase: new URL('https://datacontrol-roan.vercel.app/'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
