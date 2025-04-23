import AboutSection from "@/components/about"
import FAQSection from "@/components/faq"
import MainSection from "@/components/main-section"
import Navbar from "@/components/navbar"
import ServiceSection from "@/components/services"
import FooterSection from "@/components/footer"

export default function Page() {
  return (
    <div>
      <Navbar />
      <MainSection />
      <AboutSection />
      <ServiceSection />
      <FAQSection />
      <FooterSection />
    </div>
  )
}