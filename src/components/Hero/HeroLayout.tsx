// @/components/Hero/HeroLayout.tsx



import AnimatedElement from "../Animation/AnimatedElement";
import { ReactNode } from "react";
import MehrErfahren from "../Buttons/MehrErfahren";
import StepButton, { ButtonAction } from "../Buttons/Button";


interface HeroLayoutProps {
  title: ReactNode;
  subtitle: string;
  buttonText: string;
  children?: ReactNode;
  preTitle?: string;
  buttonAction: ButtonAction;
  MehrErfahrenButtonLabel: string;
  MehrErfahrenTarget: string;
}
  
export default function HeroLayout({ title, subtitle, buttonText, preTitle, buttonAction, MehrErfahrenButtonLabel, MehrErfahrenTarget }: HeroLayoutProps) {


  return (
    <section className="relative  overflow-x-hidden  z-20  ">
      <div className="md:h-20 h-10"></div>

      <AnimatedElement >
     

          <div className="flex flex-col gap-4 justify-center h-screen max-w-3xl w-screen mx-auto text-center border-t-0 backdrop-blur-sm rounded-2xl">

            <div className="flex flex-col gap-4 justify-center ">
            {preTitle && <h2 className="text-2xl md:text-3xl text-gray-600 " data-aos="fade-up" data-aos-delay="200">{preTitle}</h2>}
            <h1 className=" text-4xl md:text-6xl lg:text-6xl xl:text-6xl ">{title}</h1>
            <p className="text-2xl md:text-3xl text-gray-600">{subtitle}</p>
            </div>
            <div className="flex flex-col gap-8"> 
           
            <StepButton
            buttonLabel={buttonText}
            buttonAction={buttonAction}
            variant="cta"
          />
<MehrErfahren MehrErfahrenButtonLabel={MehrErfahrenButtonLabel} MehrErfahrenTarget={MehrErfahrenTarget} />
            </div>


        </div>

      </AnimatedElement>
    </section>
  );
}