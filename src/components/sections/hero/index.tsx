'use client';

import { SpecializedStacks } from '@/components/sections/hero/specialized-stacks';
import { HireMeButton } from '@/components/sections/hero/work-with-me-button';
import { ImageContain } from '@/ui';
import clsx from 'clsx';
import { GithubOriginal, LinkedinOriginal } from 'devicons-react';
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

export function Hero({ children }: PropsWithChildren) {
  return (
    <section
      className={clsx(
        'flex min-h-screen',
        'flex-col-reverse md:flex-row duration-150 max-w-screen'
      )}
    >
      <div className={clsx('relative grow shrink-0 basis-1/2')}>{/*<HeroImage />*/}</div>
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

// [Your Name]
//
// Full Stack Developer
//
// "Crafting beautiful, functional web experiences."
//
// Specializing in simplicity, aesthetics, and responsive design.
//
// Creating dynamic websites and web apps that combine beauty with functionality.
//
// Ensuring seamless user experiences across all devices.
//
// Let’s Collaborate

function HeroInfoSection() {
  return (
    <article className={'p-4 pt-10 md:pt-0 grid place-content-center prose flex-grow'}>
      <header className='prose prose-xl prose-stone text-white prose-h eadings:text-green-500 prose-headings:my-2'>
        <h1 className={'text-8xl sm:text-6xl font-extrabold leading-tight text-green-500'}>
          Axmin Shrestha
        </h1>
        <h2 className={'text-lg sm:text-xl font-medium text-gray-300 mt-4'}>
          Full Stack developer | Crafting beautiful, functional web experiences.
          {/*Simplifying Complexity with Style.*/}
        </h2>
        <p className={'text-base sm:text-lg text-gray-400 mt-2 '}>
          I specialize in creating dynamic websites and web applications that blend aesthetics with
          functionality, ensuring seamless user experiences across all devices.
          {/*Specializing In Simplicity, Aesthetics, Responsive Design, And Utility.*/}
          {/*Specializing in simplicity, aesthetics, and responsive design, I make dynamic Websites and*/}
          {/*Web Apps that combine beauty with functionality.*/}
        </p>
        {/*<p className={'text-base sm:text-lg text-gray-400 mt-2 '}>*/}
        {/*  My mission is to deliver modern, user-friendly interfaces that engage audiences and drive*/}
        {/*  measurable results for businesses.*/}
        {/*  /!*  I Develop Creative Websites. Delivering modern, user-friendly interfaces that drive*!/*/}
        {/*  /!*  engagement and results.*!/*/}
        {/*</p>*/}
        <SpecializedStacks />
        <div
          className={
            'mt-3 flex items-center gap-4 w-10/12 [&>a]:no-underline border-white/20 border-t py-4'
          }
        >
          <a href='https://github.com/' aria-label='View my GitHub profile' className='social-link'>
            <GithubOriginal className={'bg-white rounded-full'} size={36} />
          </a>
          <a
            href='https://linkedin.com/in/'
            aria-label='Connect with me on LinkedIn'
            className='social-link'
          >
            <LinkedinOriginal size={36} />
          </a>
          <HireMeButton
            className='flex-grow'
            href='mailto:a.test@test.co'
            aria-label='Contact me for work opportunities'
          />
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
