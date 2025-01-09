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

function HireMeButton({ className, ...props }: ComponentPropsWithoutRef<'a'>) {
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
      Work With Me
    </a>
  );
}

function HeroInfoSection() {
  return (
    <article className={'p-4 pt-10 md:pt-0 grid place-content-center prose flex-grow'}>
      <header className='prose prose-xl prose-stone text-white prose-h eadings:text-green-500 prose-headings:my-2'>
        <h1 className={'text-5xl sm:text-6xl font-extrabold leading-tight text-green-500'}>
          Axmin Shrestha
        </h1>
        <h4 className={'text-lg sm:text-xl font-medium text-gray-300 mt-4'}>
          Full Stack developer
        </h4>
        <p className={'text-base sm:text-lg text-gray-400 mt-2 '}>
          {/*Specializing In Simplicity, Aesthetics, Responsive Design, And Utility.*/}
          Specializing in simplicity, aesthetics, and responsive design, I make dynamic Websites and
          Web Apps that combine beauty with functionality.
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
      {/*<section className='bg-black text-white p-8 sm:p-16'>*/}
      {/*  <h1 className='text-5xl sm:text-6xl font-extrabold text-green-500 leading-tight'>*/}
      {/*    Axmin Shrestha*/}
      {/*  </h1>*/}
      {/*  <p className='text-lg sm:text-xl font-medium text-gray-300 mt-4'>Full Stack Developer</p>*/}
      {/*  <p className='text-base sm:text-lg text-gray-400 mt-2'>*/}
      {/*    I develop creative websites. Specialize in aesthetics, responsive design, simplicity, and*/}
      {/*    utility.*/}
      {/*  </p>*/}
      {/*  <h2 className='text-2xl sm:text-3xl font-bold text-green-400 mt-8'>I Specialize in</h2>*/}
      {/*  <div className='flex flex-wrap gap-4 text-gray-400 text-base mt-4'>*/}
      {/*    <span>TypeScript</span>*/}
      {/*    <span>Next.js</span>*/}
      {/*    <span>React</span>*/}
      {/*    <span>TailwindCSS</span>*/}
      {/*    <span>Vite</span>*/}
      {/*    <span>Storybook</span>*/}
      {/*  </div>*/}
      {/*  <a*/}
      {/*    href='#contact'*/}
      {/*    className='mt-6 inline-block bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-6 py-3 rounded-lg shadow-md transition'*/}
      {/*  >*/}
      {/*    Work With Me*/}
      {/*  </a>*/}
      {/*</section>*/}
    </Hero>
  );
}
