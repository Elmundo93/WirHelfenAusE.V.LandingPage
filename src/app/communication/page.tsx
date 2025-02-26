


import Footer from "../../components/footer/footer";
import Header from "../../components/header";
import CRules from "../../components/Communication/cRules";
import BackgroundImage from '../../components/BackgroundImage';
export default function Communication() {
  return (
  <main className='overflow-x-hidden'>     
      <Header />
      <BackgroundImage />
      <CRules />
      <Footer />    
    </main>
  );
}