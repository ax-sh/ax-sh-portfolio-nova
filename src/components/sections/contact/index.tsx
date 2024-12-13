'use client';

import {
  ContactForm,
  type ContactFormData,
} from '@/components/sections/contact/components/forms/contact-form';
import clsx from 'clsx';
import type { SubmitHandler } from 'react-hook-form';
import toast from 'react-hot-toast';

export function ContactSection() {
  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    console.log(data, 'ContactSection submit'); // Type-safe access to form data
    await new Promise((r) => setTimeout(r, 1000));
    toast.success('Successfully sent!');
  };

  return (
    <section
      className={clsx(
        'contact-section',
        'grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen ',
        'p-8 pb-20 gap-16 sm:p-20 ',
        'font-[family-name:var(--font-geist-sans)]'
      )}
    >
      <div
        className={clsx(
          'flex justify-center items-center',
          'h-[calc(100vh/2)] [&>*]:flex-grow',
          'w-1/2 m-auto'
        )}
      >
        <ContactForm onSubmit={onSubmit} />
      </div>
    </section>
  );
}
