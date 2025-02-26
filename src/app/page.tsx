
import HeroMain from '../components/Hero/HeroMain';
import ZigZag from '../components/ZigZag/zigzag';
import Features from '../components/features';

import Header from '../components/header';
import Footer from '../components/footer/footer';
import BackgroundImage from '../components/BackgroundImage';

export default function Home() {




  return (
    <main className='overflow-x-hidden'>
  


      <Header  />
      <BackgroundImage /> 
      <HeroMain />
      <Features/>
      <ZigZag/>
      <Footer />

    
    

    </main>
  );
}
