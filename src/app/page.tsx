<<<<<<< HEAD
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
=======


import Body from "@/components/Body/Body";
import Customer from '@/components/Customer/Customer';
import Why from '@/components/Why/Why'
import What from '@/components/What/What'
import Humans from '@/components/Humans/Humans'
import Faq from '@/components/Faq/Faq'
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';

import Header from "@/components/Header/Header";

>>>>>>> bfcec4e5800a7ae4ed206e241235437288d8c134

export default function Home() {
  return (
    <>
<<<<<<< HEAD
      <Header />
      <Body />
      <Customer />
      <Why />
      <What />
      <Humans />
      <Faq />
      <Contact />
      <Footer />
=======
      <Header/>
      <Body/>
      <Customer/>
      <Why/>
      <What/>
      <Humans/>
      <Faq/>
      <Contact/>
      <Footer/>
>>>>>>> bfcec4e5800a7ae4ed206e241235437288d8c134

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
