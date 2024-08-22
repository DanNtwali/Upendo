import React from "react";
import Navbar from "@/components/Navbar_user";
import Hero from "@/components/Hero";
import Approach from "@/components/Approach";
import GettingStarted from "@/components/GettingStarted";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Msme from "@/components/msme";


export default function AdminDashboard() {
    return(
      <main className="flex min-h-screen flex-col items-center justify-between bg-white">
        <Navbar />
        <Hero />
        <Approach />  
        <Msme />
        <GettingStarted />
        <ContactUs />
        <Footer />
      </main>
    )
}
