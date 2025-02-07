import Link from 'next/link';
import Header from "@/components/header/header";
import Body from "@/components/body/body";
import Customer from '@/components/customer/customer';
import Why from '@/components/why/why';
import What from '@/components/what/what';
import Humans from '@/components/humans/humans';
import Faq from '@/components/faq/faq';
import Contact from '@/components/contact/contact';
import Footer from '@/components/footer/footer';

export default function Home() {
  return (
    <>
      <Header />
      <Body />
      <Customer />
      <Why />
      <What />
      <Humans />
      <Faq />
      <Contact />
      <Footer />

      {/* Fix the navigation links */}
      <div>
        <Link href='/Blog'>
         
        </Link>

        <Link href='/create'>
         
        </Link>
      </div>
    </>
  );
}
