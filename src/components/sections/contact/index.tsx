'use client';

import type { ContactFormData } from '@/components/sections/contact/components/forms/contact-form';
import type { SubmitHandler } from 'react-hook-form';
import {
  ContactForm,

} from '@/components/sections/contact/components/forms/contact-form';
import clsx from 'clsx';
import toast from 'react-hot-toast';

export function ContactSection() {
  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    console.log(data, 'ContactSection submit'); // Type-safe access to form data
    await new Promise(r => setTimeout(r, 1000));
    toast.success('Successfully sent!');
  };

  return (
    <section
      className={clsx('contact-section', 'bg-[#111]', 'font-[family-name:var(--font-geist-sans)]')}
    >
      <div
        className={clsx(
          'flex justify-center items-center',
          'h-[calc(100vh/1.5)]',
          'py-3',
          '[&>*]:flex-grow',
          'w-1/2 m-auto',
        )}
      >
        <ContactForm onSubmit={onSubmit} />
      </div>
    </section>
  );
}
