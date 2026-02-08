import Navbar from "@/components/sections/navbar";
import HeroSection from "@/components/sections/hero";
import BrandMarquee from "@/components/sections/brand-marquee";
import InfluencersSection from "@/components/sections/influencers";
import Schedule from "@/components/sections/schedule";
import InstagramGrid from "@/components/sections/instagram-grid";
import PhotoGallery from "@/components/sections/photo-gallery";
import CTABanner from "@/components/sections/cta-banner";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <BrandMarquee />
      <InfluencersSection />
      <Schedule />
      <InstagramGrid />
      <PhotoGallery />
      <CTABanner />
      <Footer />
    </>
  );
}
