import clsx from "clsx";
import React, {
	InputHTMLAttributes,
	TextareaHTMLAttributes,
	forwardRef,
} from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	type?: "text" | "email" | "password" | "number";
};

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

type FormFieldProps = (InputProps | TextAreaProps) & {
	variant?: "input" | "textarea";
};

const FormField = forwardRef<
	HTMLInputElement | HTMLTextAreaElement,
	FormFieldProps
>(({ variant = "input", ...props }, ref) => {
	const baseClasses = "block w-full px-3 py-2 border rounded-md shadow-sm";

	if (variant === "textarea") {
		return (
			<textarea
				ref={ref as React.Ref<HTMLTextAreaElement>}
				{...(props as TextAreaProps)}
				className={clsx(baseClasses, props.className)}
			/>
		);
	}

	return (
		<input
			type="text"
			ref={ref as React.Ref<HTMLInputElement>}
			{...(props as InputProps)}
			className={clsx(baseClasses, props.className)}
		/>
	);
});

FormField.displayName = "FormField";

export default FormField;
