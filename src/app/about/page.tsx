import Header from "@/components/sections/header";
import AboutHero from "@/components/sections/about-hero";
import DeliveryExcellence from "@/components/sections/delivery-excellence";
import WhyAttendSection from "@/components/sections/why-attend";
import SpeakersGrid from "@/components/sections/speakers-grid";
import GalleryPreview from "@/components/sections/gallery-preview";
import CTACard from "@/components/sections/cta-card";
import Footer from "@/components/sections/footer";

export default function AboutPage() {
  return (
    <>
      <Header activePage="About" />
      <AboutHero />
      <DeliveryExcellence />
      <WhyAttendSection />
      <SpeakersGrid />
      <GalleryPreview />
      <CTACard />
      <Footer />
    </>
  );
}
