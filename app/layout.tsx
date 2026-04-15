import type { Metadata } from 'next';
import './globals.css';
import EnhancedNavbar from '@/components/EnhancedNavbar';

export const metadata: Metadata = {
  title: 'My Next.js App',
  description: 'Created with Next.js, TypeScript, and Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <EnhancedNavbar />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}