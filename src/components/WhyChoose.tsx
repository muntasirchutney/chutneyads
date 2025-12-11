'use client';

import { motion } from 'motion/react';

import { CometCard } from '@/components/ui/comet-card';

import { Title } from './Title';

const cards = [
  {
    id: 'card-impact',
    image:
      'https://images.unsplash.com/photo-1505506874110-6a7a69069a08?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'card-network',
    image:
      'https://images.unsplash.com/photo-1505506874110-6a7a69069a08?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'card-story',
    image:
      'https://images.unsplash.com/photo-1505506874110-6a7a69069a08?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export function WhyChoose() {
  return (
    <motion.section
      className="flex min-h-screen flex-col items-center justify-center gap-12 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
      }}
    >
      <Title subtitle="Engage with Strategic, Real-Time Digital Out Of Home Advertising">Why Choose Us</Title>
     
      <motion.div
        className="mx-auto flex w-full flex-wrap justify-center gap-10"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <CometCard>
              <button
                type="button"
                className="my-10 flex w-80 cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 saturate-0 duration-300 hover:saturate-100 md:my-20 md:p-4"
                aria-label="View invite"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'none',
                  opacity: 1,
                }}
              >
                <div className="mx-2 flex-1">
                  <div className="relative mt-2 aspect-[3/4] w-full">
                    <img
                      loading="lazy"
                      className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75"
                      alt="Invite background"
                      src={card.image}
                      style={{
                        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 5px 6px 0px',
                        opacity: 1,
                      }}
                    />
                  </div>
                </div>
                <div className="mt-2 flex flex-shrink-0 items-center justify-between p-2 font-mono text-white">
                  <img src="/logo-w.svg" className="mx-auto h-[30px]" alt="Chutney Ads" />
                </div>
              </button>
            </CometCard>
          </motion.div>
        ))}
      </motion.div>
      <div className="absolute right-0  bottom-0 hidden  lg:block opacity-40 rotate-180">

        <img src="/shape-1.svg" className='h-screen' alt="" />
      </div>
      <div className="absolute -left-16  bottom-0 hidden  lg:block opacity-10 rotate-90">

        <img src="/b-s.svg"  alt="" />
      </div>
    </motion.section>
  );
}
