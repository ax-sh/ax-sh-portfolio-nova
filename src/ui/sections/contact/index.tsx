import clsx from "clsx";
import type { SubmitHandler } from "react-hook-form";

import {
	ContactForm,
	type ContactFormData,
} from "@/ui/sections/contact/components/forms/contact-form";

export function ContactSection() {
	const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
		console.log(data, "ContactSection submit"); // Type-safe access to form data
		await new Promise((r) => setTimeout(r, 2000));
	};

	return (
		<section className="contact-section">
			<div
				className={clsx(
					"flex justify-center items-center",
					"h-[calc(100vh/2)] [&>*]:flex-grow ",
					"w-1/2 m-auto ",
				)}
			>
				<ContactForm onSubmit={onSubmit} />
			</div>
		</section>
	);
}
