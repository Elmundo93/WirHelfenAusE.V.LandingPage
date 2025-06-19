// components/ContactUs/ContactUs.tsx
import ContactUsLayout from "@/components/layout/ContactUs"
import ContactForm from "@/components/ui/forms/ContactForm"
import AnimatedElement from "@/components/Animation/AnimatedElement"

export default function ContactUs() {
  return (
    <AnimatedElement id="contact-us">
      <ContactUsLayout>
        <ContactForm />
      </ContactUsLayout>
    </AnimatedElement>
  )
}