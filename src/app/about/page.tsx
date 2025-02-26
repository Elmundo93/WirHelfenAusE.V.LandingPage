
import HeroAbout from '../../components/Hero/HeroAbout';


import BackgroundImage from '../../components/BackgroundImage';
import Header from '../../components/header';
import Footer from '../../components/footer/footer';
import PreviewAbout from '../../components/Preview/PreviewAbout';
import ZigZagAbout from '../../components/ZigZag/ZigZagAbout';
export default function About() {
  return (
    <main className='overflow-x-hidden'> 
      <Header />
      <BackgroundImage />
      <HeroAbout />
      <PreviewAbout/>
      <ZigZagAbout/>

      <Footer />

    </main>
  );
}
