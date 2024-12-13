import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import type { ComponentPropsWithRef, InputHTMLAttributes } from 'react';
import React from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'), // Non-empty string validation
  email: z.string().min(1, 'Email is required').email('Invalid email address'), // Email validation
  message: z.string().min(1, 'Message is required'), // Non-empty string validation
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// eslint-disable-next-line react/display-name
const TextField = React.forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  (props, ref) => {
    return (
      <input
        type='text'
        ref={ref}
        {...props}
        className={clsx('block w-full px-3 py-2 border rounded-md shadow-sm', props.className)}
      />
    );
  }
);

const TextAreaField = React.forwardRef<HTMLTextAreaElement, ComponentPropsWithRef<'textarea'>>(
  (props, ref) => {
    return (
      <textarea
        ref={ref} // Attach the ref
        {...props}
        className={clsx('block w-full px-3 py-2 border rounded-md shadow-sm', props.className)}
      />
    );
  }
);
// Set the displayName for better debugging
TextAreaField.displayName = 'Textarea';
export function ContactForm({ onSubmit }: { onSubmit: SubmitHandler<ContactFormData> }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur', // Validate on field blur
  });

  // console.log(watch('email')); // watch input value by passing the name of it
  // console.log(Object.values(errors).map((i) => i.message));
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={'flex flex-col gap-2'}>
      {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
      <label className='text-sm font-medium text-gray-700 flex flex-col gap-2'>
        <span>Name</span>
        <TextField
          placeholder={'Name'}
          {...register('name')}
          className={clsx(errors.name ? 'border-red-500' : 'border-gray-300')}
        />
        {errors.name && <span className={'text-red-500'}>{errors.name.message}</span>}
      </label>

      {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
      <label className='text-sm font-medium text-gray-700 flex flex-col gap-2'>
        <span>Email</span>

        <TextField
          placeholder={'Email'}
          {...register('email')}
          className={clsx(errors.email ? 'border-red-500' : 'border-gray-300')}
        />
        {errors.email && <span className={'text-red-500'}>{errors.email.message}</span>}
      </label>
      {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
      <label className='text-sm font-medium text-gray-700 flex flex-col gap-2'>
        <span>Message</span>

        <TextAreaField
          {...register('message')}
          placeholder={'Message'}
          className={clsx(errors.message ? 'border-red-500' : 'border-gray-300')}
        />
        {errors.message && <span className={'text-red-500'}>{errors.message.message}</span>}
      </label>

      <button
        type='submit'
        disabled={isSubmitting}
        className='w-full py-2 bg-green-500 text-white rounded-md'
      >
        {isSubmitting ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
}
