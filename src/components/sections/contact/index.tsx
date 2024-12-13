"use client";
import clsx from "clsx";
import type { SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import {
	ContactForm,
	type ContactFormData,
} from "@/components/sections/contact/components/forms/contact-form";

export function ContactSection() {
	const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
		console.log(data, "ContactSection submit"); // Type-safe access to form data
		await new Promise((r) => setTimeout(r, 2000));
		toast.success("Successfully sent!");
	};

	return (
		<section className="contact-section">
			<div
				className={clsx(
					"flex justify-center items-center",
					"h-[calc(100vh/2)] [&>*]:flex-grow",
					"w-1/2 m-auto",
				)}
			>
				<ContactForm onSubmit={onSubmit} />
			</div>
		</section>
	);
}
