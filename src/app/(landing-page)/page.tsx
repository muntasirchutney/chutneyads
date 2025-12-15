import Hero from '@/components/Hero';
import { WhyChoose } from '@/components/WhyChoose';
import type { Metadata } from 'next';
import { ReactLenis } from 'lenis/react'
import { Banner } from '@/components/Banner';
import { Benefits } from '@/components/Benefits';
import StatisticsSection from '@/components/Stats';
import ImpactCoverage from '@/components/Coverage';
import { Footer } from '@/components/Footer';
import { Contact } from '@/components/Contact';

export const metadata: Metadata = {
  title: "Chutney Ads",
  description: "Chutney Ads is a leading digital marketing agency in Bangladesh. We provide a range of services to help businesses grow and succeed online.",
};

export default function Index() {
  return (
    <>
     <ReactLenis root options={{
      duration: 1.5,
     
      lerp: 0.5,
      infinite: false,
    }} />

      <Hero />
      <Banner/>
      <WhyChoose />
      <Benefits/>
      <StatisticsSection />
      <ImpactCoverage/>
      <Contact />
      <Footer />
    </>
  );
};

