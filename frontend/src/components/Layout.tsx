import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import TopBar from './TopBar';
import Breadcrumb from './Breadcrumb';
import StructuredData from './StructuredData';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <StructuredData />
      <TopBar />
      <Header />
      <Breadcrumb />
      <main className="flex-grow pt-0">{children}</main>
      <Footer />
    </div>
  );
}
