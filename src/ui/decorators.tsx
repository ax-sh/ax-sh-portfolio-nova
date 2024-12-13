import type { Decorator } from "@storybook/react";
import React from "react";

export const withToast: Decorator = (Story) => (
	<div>
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
