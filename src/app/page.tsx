import Approach from "@/components/Approach";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import GettingStarted from "@/components/GettingStarted";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Msme from "@/components/msme";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-fixed bg-cover bg-[url('../assets/images/signup.png')]">
      <Navbar />
      <Hero />
      <Approach />  
      <Msme />
      <GettingStarted />
      <ContactUs />
      <Footer />
    </main>
  );
}
