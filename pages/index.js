import { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import WhyMunchy from "../components/WhyMunchy";
import SeveDayTrial from "../components/SeveDayTrial";
import FormSection from "../components/FormSection";
import Examples from "../components/Examples";
import Testimonials from "../components/Testimonials";
import Packages from "../components/Packages";
import Footer from "../components/Footer";
import ModalMenu from "../components/ModalMenu";

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Munchy</title>
        <meta name="description" content="Munchy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header showMenu={showMenu} setShowMenu={setShowMenu} />
      <div className="h-[92px] lg:h-[112px]"></div>
      <HeroSection />
      <WhyMunchy />
      <SeveDayTrial />
      <FormSection />
      <Examples />
      <Testimonials />
      <Packages />
      <Footer />
      <ModalMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
}
