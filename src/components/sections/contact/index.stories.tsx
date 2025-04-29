import type { Meta, StoryObj } from '@storybook/react';
import { CenterDecorator, withToast } from '@/ui/decorators';
import { expect, userEvent, waitFor, within } from '@storybook/test';

import { ContactSection } from './index.js';

// Define metadata for the component
const meta: Meta<typeof ContactSection> = {
  title: 'Sections/Contact', // Title path in Storybook
  component: ContactSection, // Link the component to the story
};

export default meta;

type Story = StoryObj<typeof ContactSection>;

// Define a story with args
export const ContactFormSection: Story = {
  decorators: [CenterDecorator, withToast],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Type into the name input field
    const nameField = canvas.getByPlaceholderText(/name/i);
    await expect(nameField).toBeInTheDocument();
    const name = 'Jon Doe';
    await userEvent.type(nameField, name);
    await expect(nameField).toHaveValue(name);

    // Type into the email input field
    const emailField = canvas.getByPlaceholderText(/email/i);
    await expect(emailField).toBeInTheDocument();
    const email = 'test@example.com';
    await userEvent.type(emailField, email);
    await expect(emailField).toHaveValue(email);

    // Type into the email input field
    const messageField = canvas.getByPlaceholderText(/message/i);
    await expect(messageField).toBeInTheDocument();
    const message = 'This is a test';
    await userEvent.type(messageField, message);
    await expect(messageField).toHaveValue(message);

    const submitButton = canvas.getByRole('button', { name: /Send/i });
    await expect(submitButton).toBeInTheDocument();

    await userEvent.click(submitButton);
    await waitFor(() => {
      expect(submitButton).toBeDisabled();
      expect(submitButton).toHaveTextContent(/sending/i);
      // Optionally check for error alert or message
      // expect(canvas.getByText(/failed to send message/i)).toBeInTheDocument();
    });
    // await expect(submitButton).toHaveValue("doing")
    // Ensure the form is submitting
    // await expect(canvas.getByRole('button', { name: /doing Submit/i })).toBeInTheDocument();
  },
};
