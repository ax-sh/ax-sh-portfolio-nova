import type { Meta, StoryObj } from "@storybook/react";
import Layout from ".";

// Define metadata for the component
const meta: Meta<typeof Layout> = {
	title: "Portfolio/Layout", // Title path in Storybook
	component: Layout, // Link the component to the story
};

export default meta;

type Story = StoryObj<typeof Layout>;

// Define a story with args
export const Primary: Story = {
	args: {
		children: (
			<div className={"bg-red-100"}>
				<h1>Custom Title</h1>
				<p>Custom content inside the layout component.</p>
			</div>
		),
	},
};
