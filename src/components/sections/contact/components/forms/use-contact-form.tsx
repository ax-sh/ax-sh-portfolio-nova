import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'), // Non-empty string validation
  email: z.string().min(1, 'Email is required').email('Invalid email address'), // Email validation
  message: z.string().min(1, 'Message is required'), // Non-empty string validation
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export function useContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur', // Validate on field blur/not focused
  });
  return { register, handleSubmit, errors, isSubmitting };
}
