import { ContactForm } from '@/components/sections/contact/components/forms/contact-form';
import { CenterDecorator, withToast } from '@/ui/decorators';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, waitFor, within } from '@storybook/test';
import toast from 'react-hot-toast';

// Define metadata for the component
const meta: Meta<typeof ContactForm> = {
  title: 'Portfolio/Form/Contact', // Title path in Storybook
  component: ContactForm, // Link the component to the story
};

export default meta;

type Story = StoryObj<typeof ContactForm>;

// Define a story with args
export const PortfolioContactForm: Story = {
  decorators: [CenterDecorator, withToast],
  args: {
    onSubmit: async (data) => {
      console.log(data, 'ContactSection submit'); // Type-safe access to form data
      await new Promise((r) => setTimeout(r, 1000));
      toast.success('Successfully sent!');
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // data
    const name = 'Jon Doe';
    const email = 'test@example.com';
    const message = 'This is a test';
    // Type into the name input field
    const nameField = canvas.getByPlaceholderText(/name/i);
    await expect(nameField).toBeInTheDocument();

    await userEvent.type(nameField, name);
    await expect(nameField).toHaveValue(name);

    // Type into the email input field
    const emailField = canvas.getByPlaceholderText(/email/i);
    await expect(emailField).toBeInTheDocument();

    await userEvent.type(emailField, email);
    await expect(emailField).toHaveValue(email);

    // Type into the email input field
    const messageField = canvas.getByPlaceholderText(/message/i);
    await expect(messageField).toBeInTheDocument();

    await userEvent.type(messageField, message);
    await expect(messageField).toHaveValue(message);

    const submitButton = canvas.getByRole('button', { name: /Send/i });
    await expect(submitButton).toBeInTheDocument();

    await userEvent.click(submitButton);
    await waitFor(() => {
      expect(submitButton).toBeDisabled();
      expect(submitButton).toHaveTextContent(/sending/i);
      expect(submitButton).toBeDisabled();
    });
    // Test toast message
    await waitFor(() => {
      expect(canvas.getByText(/Successfully sent!/i)).toBeInTheDocument();
    });
  },
};
