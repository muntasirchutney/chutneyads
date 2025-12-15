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
  title: "Next.js Boilerplate Presentation",
  description: "Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework.",
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

