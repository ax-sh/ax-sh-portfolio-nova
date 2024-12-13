import type { Decorator } from "@storybook/react";
import React from "react";
import { Toaster } from "react-hot-toast";

export const withToast: Decorator = (Story) => (
	<div>
		<Toaster />
		<Story />
	</div>
);

export const CenterDecorator: Decorator = (Story) => (
	<div
		className={
			"flex justify-center items-center h-dvh [&>*]:flex-grow w-1/2 m-auto"
		}
	>
		<Story />
	</div>
);
