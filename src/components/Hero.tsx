import Link from "next/link";
import { ContainerTextFlip } from "./ui/container-text-flip";

export default function Hero() {
  return (
    <div className='h-screen'>
      <img src="/bg.png" alt="hero" className=' absolute top-0 right-0  max-w-[42.7%] h-full ' />
      <img src="/shape-1.svg" alt="" className='absolute top-0 left-0' />
      <img src="/shape-3.svg" alt="" className='absolute -rotate-90 -left-14 bottom-10 w-[150px]' />
      <div className=' w-full xl:max-w-[1200px] 3xl:max-w-[1400px]  mx-auto content-center h-full align-middle'>
        <div className=' max-w-1/2 font-sans'>
          <img src="/logo.svg" alt="logo" className='h-[70px] mb-10' />
          <div className='text-[48px] leading-[1.3] '>Amplify Your Brand’s
           
            Voice in the Heart of <strong>Bangladesh’s</strong> <br /> <ContainerTextFlip
              words={["Better", "Modern", "Awesome"]}
            /> Marketplaces</div>
          <p className='text-lg leading-[1.6] text-[#666666] mt-6'>Engage with Strategic, Real-Time DOOH Advertising</p>

          <Link href="/contact" className='btn'>Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
