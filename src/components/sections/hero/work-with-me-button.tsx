import clsx from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';

export function HireMeButton({ className, ...props }: ComponentPropsWithoutRef<'a'>) {
  return (
    <a
      className={clsx(
        'rounded-xl bg-accent p-3',
        'no-underline font-black text-xl text-center text-white',
        'hover:bg-[#17A84D] focus:outline-none focus:ring-4 focus:ring-[#A7E9FF]',
        'transition-transform transform hover:scale-105 active:scale-95',
        className
      )}
      {...props}
    >
      Get in Touch
      {/*Work With Me*/}
    </a>
  );
}
