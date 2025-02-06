

import Body from "@/components/Body/Body";
import Customer from '@/components/Customer/Customer';
import Why from '@/components/Why/Why'
import What from '@/components/What/What'
import Humans from '@/components/Humans/Humans'
import Faq from '@/components/Faq/Faq'
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';

import Header from "@/components/Header/Header";


export default function Home() {
  return (
    <>
      <Header/>
      <Body/>
      <Customer/>
      <Why/>
      <What/>
      <Humans/>
      <Faq/>
      <Contact/>
      <Footer/>

      </>
  );
}
