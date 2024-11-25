import { Suspense, useRef } from 'react';
import { useImage } from 'react-image';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';

// components
import Heading from './Heading';
import { Button } from './ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ChevronRightIcon } from '@radix-ui/react-icons';

const validationSchema = Yup.object({
	name: Yup.string()
		.min(2, 'Name must be at least 2 characters')
		.required('Name is required'),
	email: Yup.string()
		.email('Invalid email address')
		.required('Email is required'),
	message: Yup.string()
		.min(10, 'Message must be at least 10 characters')
		.required('Message is required'),
});

function ScribbleLine4() {
	const { src } = useImage({
		srcList: '/scribble_line5.png',
	});

	return (
		<img
			src={src}
			alt="scribble shapes"
			className="absolute -bottom-[12px] md:-left-6 mx-auto md:mx-0 items-center w-full max-w-[200px] h-6 invert opacity-50"
		/>
	);
}

export default function Contact() {
	const formRef = useRef();

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			message: '',
		},
		validationSchema,
		onSubmit: async (values, { setSubmitting, resetForm }) => {
			try {
				const templateParams = {
					from_name: values.name,
					from_email: values.email,
					message: values.message,
					to_name: 'Keanin',
					reply_to: values.email,
				};

				const response = await emailjs.send(
					'service_kt53p9x',
					'template_c1kizb5',
					templateParams,
					'uyFRDkoERfJDz-4aj'
				);

				if (response.status === 200) {
					console.log('Email sent successfully:', response);
					alert('Message sent successfully!');
					resetForm();
				}
			} catch (error) {
				console.error('EmailJS Error Details:', {
					message: error.message,
					text: error.text,
					status: error?.status,
				});
				
				try {
					const formResponse = await emailjs.sendForm(
						'service_kt53p9x',
						'template_c1kizb5',
						formRef.current,
						'uyFRDkoERfJDz-4aj'
					);
					
					console.log('Fallback email sent successfully:', formResponse);
					alert('Message sent successfully!');
					resetForm();
				} catch (fallbackError) {
					console.error('Fallback EmailJS Error:', fallbackError);
					alert('Failed to send message. Please try again or contact directly at keanin16@gmail.com');
				}
			} finally {
				setSubmitting(false);
			}
		},
	});

	return (
		<section className="w-full mt-responsive-container">
			<div className="relative flex items-center justify-center">
				<Heading
					headingMiddle="Get In Touch"
					headingShortDesc="Send me a message."
				/>

				<Suspense>
					<ScribbleLine4 />
				</Suspense>
			</div>

			<form 
				ref={formRef}
				onSubmit={formik.handleSubmit} 
				className="w-full grid mt-20"
			>
				<div className="grid w-full items-center gap-1.5">
					<Label htmlFor="name">Name</Label>
					<Input
						type="text"
						id="name"
						name="from_name"
						placeholder="Jane Doe"
						{...formik.getFieldProps('name')}
						aria-invalid={formik.touched.name && formik.errors.name ? 'true' : 'false'}
					/>
					{formik.touched.name && formik.errors.name && (
						<p className="text-red-500 text-sm" role="alert">{formik.errors.name}</p>
					)}
				</div>

				<div className="grid w-full items-center gap-1.5 mt-6">
					<Label htmlFor="email">Email</Label>
					<Input
						type="email"
						id="email"
						name="from_email"
						placeholder="janedoe@email.com"
						{...formik.getFieldProps('email')}
						aria-invalid={formik.touched.email && formik.errors.email ? 'true' : 'false'}
					/>
					{formik.touched.email && formik.errors.email && (
						<p className="text-red-500 text-sm" role="alert">{formik.errors.email}</p>
					)}
				</div>

				<div className="grid w-full gap-1.5 mt-6">
					<Label htmlFor="message">Your message</Label>
					<Textarea
						id="message"
						name="message"
						placeholder="Type your message here."
						{...formik.getFieldProps('message')}
						aria-invalid={formik.touched.message && formik.errors.message ? 'true' : 'false'}
					/>
					{formik.touched.message && formik.errors.message && (
						<p className="text-red-500 text-sm" role="alert">{formik.errors.message}</p>
					)}
				</div>

				<Button 
					type="submit" 
					className="mt-6"
					disabled={formik.isSubmitting}
					aria-busy={formik.isSubmitting}
				>
					<p className="mr-2">{formik.isSubmitting ? 'Sending...' : 'Send message'}</p>
					<ChevronRightIcon className="h-4 w-4" />
				</Button>
			</form>
		</section>
	);
}
