import { CenterDecorator, withToast } from '@/ui/decorators';
import type { Meta, StoryObj } from '@storybook/react';

import { Hero } from '.';

function HeroNew() {
  return (
    <Hero>
      <section className='bg-black text-white p-8 sm:p-16'>
        <h1 className='text-5xl sm:text-6xl font-extrabold text-green-500 leading-tight'>
          Axmin Shrestha
        </h1>
        <p className='text-lg sm:text-xl font-medium text-gray-300 mt-4'>Full Stack Developer</p>
        <p className='text-base sm:text-lg text-gray-400 mt-2'>
          I develop creative websites. Specialize in aesthetics, responsive design, simplicity, and
          utility.
        </p>
        <h2 className='text-2xl sm:text-3xl font-bold text-green-400 mt-8'>I Specialize in</h2>
        <div className='flex flex-wrap gap-4 text-gray-400 text-base mt-4'>
          <span>TypeScript</span>
          <span>Next.js</span>
          <span>React</span>
          <span>TailwindCSS</span>
          <span>Vite</span>
          <span>Storybook</span>
        </div>
        <a
          href='#contact'
          className='mt-6 inline-block bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-6 py-3 rounded-lg shadow-md transition'
        >
          Work With Me
        </a>
      </section>
    </Hero>
  );
}

const meta: Meta<typeof HeroNew> = {
  title: 'Sections/Hero', // Title path in Storybook
  component: HeroNew, // Link the component to the story
};

export default meta;

type Story = StoryObj<typeof HeroNew>;

export const VVV: Story = { decorators: [CenterDecorator, withToast] };
