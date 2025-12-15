import Hero from '@/components/Hero';
import { WhyChoose } from '@/components/WhyChoose';
import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ReactLenis } from 'lenis/react'
import { Banner } from '@/components/Banner';
import { Benefits } from '@/components/Benefits';
import StatisticsSection from '@/components/Stats';
import ImpactCoverage from '@/components/Coverage';
import { Footer } from '@/components/Footer';
import { Contact } from '@/components/Contact';

type IIndexProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IIndexProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function Index(props: IIndexProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
// comment

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

