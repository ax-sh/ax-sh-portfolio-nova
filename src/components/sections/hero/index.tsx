'use client';

import { SpecializedStacks } from '@/components/sections/hero/specialized-stacks';
import { ImageContain } from '@/ui';
import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

function HeroImage() {
  const className = clsx('card-fader');
  return (
    <>
      <ImageContain src='/hero-image.svg' alt='hero' className='z-10' />
      <ImageContain src='/hero-image.svg' alt='shadow' className={className} />
      <ImageContain src='/hero-image.svg' alt='shadow' className={className} />
      <ImageContain src='/hero-image.svg' alt='shadow' className={className} />
      <ImageContain src='/hero-image.svg' alt='shadow' className={className} />
      <ImageContain src='/hero-image.svg' alt='shadow' className={className} />
      <ImageContain src='/hero-image.svg' alt='shadow' className={className} />
      <ImageContain src='/hero-image.svg' alt='shadow' className={className} />
      <ImageContain src='/hero-image.svg' alt='shadow' className={className} />
    </>
  );
}

function Hero({ children }: PropsWithChildren) {
  return (
    <section
      className={clsx(
        'flex min-h-screen',
        'flex-col-reverse md:flex-row duration-150 max-w-screen'
      )}
    >
      <div className={clsx('relative grow shrink-0 basis-1/2')}>
        <HeroImage />
      </div>
      <div
        // stretched container
        className={clsx(
          'flex flex-col w-full self-stretch basis-1/2',
          'md:grow relative',
          'duration-150 z-20'
        )}
      >
        {children}
      </div>
    </section>
  );
}

function HireMeButton() {
  return (
    <a
      className='rounded-xl no-underline font-black bg-accent p-4 text-xl text-center text-white hover:bg-[#17A84D] focus:outline-none focus:ring-4 focus:ring-[#A7E9FF] transition-transform transform hover:scale-105 active:scale-95'
      href='mailto:a.test@test.co'
      aria-label='Hire Me'
    >
      Work With Me
    </a>
  );
}

export default function HeroSection() {
  return (
    <Hero>
      <article
        className={clsx(
          'prose prose-zinc prose-h1:text-red-500',
          'flex justify-center items-center',
          '[&>*]:flex-grow',
          'w-1/2 m-auto'
        )}
      >
        <header className={clsx('prose prose-h2:text-foreground')}>
          <h1>Axmin Shrestha</h1>
          <h2>Specialize in</h2>
          <SpecializedStacks />
          <div className={'mt-3 flex flex-col'}>
            <HireMeButton />
          </div>
        </header>
      </article>
    </Hero>
  );
}
