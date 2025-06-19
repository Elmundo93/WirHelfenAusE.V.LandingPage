import HeroAnmelden from "@/components/Screens/Anmelden/HeroAnmelden";
import PreviewAnmelden from "@/components/Screens/Anmelden/PreviewAnmelden";
import ZigZagAnmeldung from "@/components/Screens/Anmelden/ZigZagAnmelden";



export default function Anmeldung() {
  return (
    
  <main className='overflow-x-hidden'>    


      <HeroAnmelden />
      <PreviewAnmelden />
      <ZigZagAnmeldung/>

     
    </main>
  );
}