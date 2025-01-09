'use client';

import { SpecializedStacks } from '@/components/sections/hero/specialized-stacks';
import { ImageContain } from '@/ui';
import { GithubIcon } from '@storybook/icons';
import clsx from 'clsx';
import { GithubOriginal, GithubOriginalWordmark, LinkedinOriginal } from 'devicons-react';
import type { ComponentPropsWithoutRef, PropsWithChildren } from 'react';

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

function HireMeButton({ className }: Pick<ComponentPropsWithoutRef<'a'>, 'className'>) {
  return (
    <a
      className={clsx(
        'rounded-xl bg-accent p-3',
        'no-underline font-black text-xl text-center text-white',
        'hover:bg-[#17A84D] focus:outline-none focus:ring-4 focus:ring-[#A7E9FF]',
        'transition-transform transform hover:scale-105 active:scale-95',
        className
      )}
      href='mailto:a.test@test.co'
      aria-label='Hire Me'
    >
      Work With Me
    </a>
  );
}

function HeroInfoSection() {
  return (
    <article className={'p-4 pt-10 md:pt-0 grid place-content-center prose flex-grow'}>
      <header className='prose prose-xl prose-stone text-white prose-headings:text-green-500'>
        <h1>Axmin Shrestha | Portfolio</h1>
        <p>
          I Develop Creative Websites. Specialize In Aesthetics, Responsive Design, Simplicity, And
          Utility.
        </p>
        <SpecializedStacks />
        <div className={'mt-3 flex items-center gap-4 w-10/12'}>
          <HireMeButton className={'flex-grow'} />
          <GithubIcon size={36} />
          <LinkedinOriginal size={36} />
        </div>
      </header>
    </article>
  );
}

export default function HeroSection() {
  return (
    <Hero>
      <HeroInfoSection />
    </Hero>
  );
}
