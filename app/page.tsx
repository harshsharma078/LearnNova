 import Hero from "../components/Hero"
 import FeaturesSection from "@/components/features"
 import TestimonialsSection from "@/components/testimonials"
 import ContactSection from "@/components/contactSection"
 import  Footer  from "@/components/footer"
export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesSection/>
      <TestimonialsSection/>
      <ContactSection/>
      <Footer/>
    </>
  )
}