import Header from "@/components/sections/header";
import ContactBanner from "@/components/sections/banner";
import ContactForm from "@/components/sections/contact-form";
import MapSection from "@/components/sections/map";
import Footer from "@/components/sections/footer";

export default function ContactPage() {
  return (
    <>
      <Header activePage="Contact" />
      <ContactBanner />
      <ContactForm />
      <MapSection />
      <Footer />
    </>
  );
}
