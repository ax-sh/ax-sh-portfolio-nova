import { ErrorMessage } from '@hookform/error-message';
import clsx from 'clsx';
import type { ComponentPropsWithRef, InputHTMLAttributes } from 'react';
import React from 'react';
import type { SubmitHandler } from 'react-hook-form';

import { type ContactFormData, useContactForm } from './use-contact-form';

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
  const { register, handleSubmit, errors, isSubmitting } = useContactForm();

  // console.log(watch('email')); // watch input value by passing the name of it
  // console.log(Object.values(errors).map((i) => i.message));
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={'flex flex-col gap-2 [&>label>span]:text-foreground'}
    >
      {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
      <label className='text-sm font-medium text-gray-700 flex flex-col gap-2'>
        <span>Name</span>
        <TextField
          placeholder={'Name'}
          {...register('name')}
          className={clsx(errors.name ? 'border-red-500' : 'border-gray-300')}
        />
        <ErrorMessage
          errors={errors}
          name='name'
          render={({ message }) => <p className={'text-red-500'}>{message}</p>}
        />
      </label>

      {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
      <label className='text-sm font-medium text-gray-700 flex flex-col gap-2'>
        <span>Email</span>

        <TextField
          type='email'
          placeholder={'Email'}
          {...register('email')}
          className={clsx(errors.email ? 'border-red-500' : 'border-gray-300')}
        />
        <ErrorMessage
          errors={errors}
          name='email'
          render={({ message }) => <p className={'text-red-500'}>{message}</p>}
        />
      </label>
      {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
      <label className='text-sm font-medium text-gray-700 flex flex-col gap-2'>
        <span>Message</span>

        <TextAreaField
          {...register('message')}
          placeholder={'Message'}
          className={clsx(errors.message ? 'border-red-500' : 'border-gray-300')}
        />
        <ErrorMessage
          errors={errors}
          name='message'
          render={({ message }) => <p className={'text-red-500'}>{message}</p>}
        />
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
