'use client';

import { ImageContain } from '@/ui';
import clsx, { ClassValue } from 'clsx';
import type { PropsWithChildren } from 'react';

function HeroImage() {
  const a: ClassValue = 'row-spa' satisfies ClassValue;
  return (
    <>
      <ImageContain src='/hero-image.svg' alt='hero' className='z-10' />
      <ImageContain src='/hero-image.svg' alt='shadow' className={clsx('card-fader', a)} />
      <ImageContain src='/hero-image.svg' alt='shadow' className={clsx('card-fader', a)} />
      <ImageContain src='/hero-image.svg' alt='shadow' className={clsx('card-fader', a)} />
      <ImageContain src='/hero-image.svg' alt='shadow' className={clsx('card-fader', a)} />
      <ImageContain src='/hero-image.svg' alt='shadow' className={clsx('card-fader', a)} />
      <ImageContain src='/hero-image.svg' alt='shadow' className={clsx('card-fader', a)} />
      <ImageContain src='/hero-image.svg' alt='shadow' className={clsx('card-fader', a)} />
      <ImageContain src='/hero-image.svg' alt='shadow' className={clsx('card-fader', a)} />
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
          'md:grow relative ',
          'duration-150 z-20'
        )}
      >
        {children}
      </div>
    </section>
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
        <h1>Axmin Shrestha</h1>
      </article>
    </Hero>
  );
}
