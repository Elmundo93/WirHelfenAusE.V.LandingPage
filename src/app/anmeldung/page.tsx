


import Footer from "../../components/footer/footer";
import Header from "../../components/header";

import HeroAnmelden from "../../components/Hero/HeroAnmelden";
import BackgroundImage from '../../components/BackgroundImage';
import PreviewAnmelden from "../../components/Preview/PreviewAnmelden";
import ZigZagAnmeldung from "../../components/ZigZag/ZigZagAnmeldung";
export default function Anmeldung() {
  return (
    
  <main className='overflow-x-hidden'>    
      <Header />
      <BackgroundImage /> 
      <HeroAnmelden />
      <PreviewAnmelden />
      <ZigZagAnmeldung/>
      <Footer />
     
    </main>
  );
}