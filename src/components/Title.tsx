import { BackgroundRippleEffect } from "./ui/background-ripple-effect";

 export function Title({ children, subtitle }: { children: React.ReactNode; subtitle?: React.ReactNode }) {
  return (
    <div className="relative flex  w-full flex-col items-start justify-start overflow-hidden">
      <BackgroundRippleEffect />
      <div className="mt-20 w-full">
        <h2 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-neutral-800 md:text-4xl lg:text-5xl dark:text-neutral-100">
          {children}
        </h2>
        <p className="relative z-10 text-[24px] mx-auto mt-4 max-w-lg text-center text-neutral-800 dark:text-neutral-500">
          {subtitle}
        </p>
      </div>
    </div>
  );
}