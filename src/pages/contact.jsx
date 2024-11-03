import { useState } from 'react';
import ClipboardCopy from '@/components/ClipboardCopy';
import PageHero from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ChevronRightIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';

export default function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [statusMessage, setStatusMessage] = useState({
		type: '',
		message: '',
	});

	const validateForm = () => {
		const newErrors = {};
		if (!formData.name.trim()) newErrors.name = 'Name is required';
		if (!formData.email.trim()) {
			newErrors.email = 'Email is required';
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = 'Please enter a valid email';
		}
		if (!formData.message.trim()) newErrors.message = 'Message is required';

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!validateForm()) return;

		setIsSubmitting(true);
		setStatusMessage({ type: '', message: '' });

		try {
			// Add your form submission logic here
			await new Promise((resolve) => setTimeout(resolve, 1000));
			setStatusMessage({
				type: 'success',
				message:
					'Message sent successfully! I will get back to you soon.',
			});
			setFormData({ name: '', email: '', message: '' });
			setErrors({});
		} catch (error) {
			console.error('Error submitting form:', error);
			setStatusMessage({
				type: 'error',
				message: 'Failed to send message. Please try again.',
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleChange = (e) => {
		const { id, value } = e.target;
		setFormData((prev) => ({ ...prev, [id]: value }));
		// Clear error when user starts typing
		if (errors[id]) {
			setErrors((prev) => ({ ...prev, [id]: '' }));
		}
	};

	return (
		<main className="container mx-auto px-4 py-8">
			<PageHero pageName="Contact" pageSubText="Get in touch." />

			<section
				aria-labelledby="email-section"
				className="mt-16 md:mt-32 text-center">
				<ClipboardCopy
					copyMessage="Email Copied!"
					onCopy={() => toast.success('Email copied to clipboard!')}>
					<div className="w-full max-w-md mx-auto">
						<h2 id="email-section" className="sr-only">
							Email Contact
						</h2>
						<p className="font-normal text-[clamp(18px,1.5vw,24px)]">
							Get in touch{' '}
							<span className="text-muted-foreground">
								(Click to copy)
							</span>
						</p>
						<div
							className="text-[clamp(24px,8vw,36px)] font-bold cursor-pointer 
									 hover:text-primary/90 transition-colors focus:outline-none 
									 focus:ring-2 focus:ring-primary rounded-md"
							id="copy"
							role="button"
							tabIndex={0}
							data-clipboard-text="keanin16@gmail.com"
							aria-label="Click to copy email address: keanin16@gmail.com">
							keanin16@gmail.com
						</div>
					</div>
				</ClipboardCopy>
			</section>

			<form
				onSubmit={handleSubmit}
				className="w-full max-w-md mx-auto mt-16 md:mt-32 space-y-6"
				aria-label="Contact form"
				noValidate>
				<div className="space-y-1.5">
					<Label htmlFor="name">Name</Label>
					<Input
						type="text"
						id="name"
						value={formData.name}
						onChange={handleChange}
						placeholder="Jane Doe"
						required
						aria-required="true"
						aria-invalid={!!errors.name}
						aria-describedby={
							errors.name ? 'name-error' : undefined
						}
						className={cn(
							'focus:ring-2 focus:ring-primary',
							errors.name && 'border-red-500',
						)}
					/>
					{errors.name && (
						<p
							id="name-error"
							className="text-red-500 text-sm mt-1"
							role="alert">
							{errors.name}
						</p>
					)}
				</div>

				<div className="space-y-1.5">
					<Label htmlFor="email">Email</Label>
					<Input
						type="email"
						id="email"
						value={formData.email}
						onChange={handleChange}
						placeholder="janedoe@email.com"
						required
						aria-required="true"
						aria-invalid={!!errors.email}
						aria-describedby={
							errors.email ? 'email-error' : undefined
						}
						className={cn(
							'focus:ring-2 focus:ring-primary',
							errors.email && 'border-red-500',
						)}
					/>
					{errors.email && (
						<p
							id="email-error"
							className="text-red-500 text-sm mt-1"
							role="alert">
							{errors.email}
						</p>
					)}
				</div>

				<div className="space-y-1.5">
					<Label htmlFor="message">Your message</Label>
					<Textarea
						id="message"
						value={formData.message}
						onChange={handleChange}
						placeholder="Type your message here."
						required
						aria-required="true"
						aria-invalid={!!errors.message}
						aria-describedby={
							errors.message ? 'message-error' : undefined
						}
						className={cn(
							'min-h-[150px] focus:ring-2 focus:ring-primary',
							errors.message && 'border-red-500',
						)}
					/>
					{errors.message && (
						<p
							id="message-error"
							className="text-red-500 text-sm mt-1"
							role="alert">
							{errors.message}
						</p>
					)}
				</div>

				<Button
					type="submit"
					disabled={isSubmitting}
					className={cn(
						'w-full transition-all',
						isSubmitting && 'opacity-70 cursor-not-allowed',
					)}
					aria-busy={isSubmitting}>
					<span className="mr-2">
						{isSubmitting ? 'Sending...' : 'Send message'}
					</span>
					<ChevronRightIcon className="h-4 w-4" />
				</Button>

				{statusMessage.message && (
					<div
						className={cn(
							'mt-4 p-4 rounded-md text-center',
							statusMessage.type === 'success'
								? 'bg-green-50 text-green-800 border border-green-200'
								: 'bg-red-50 text-red-800 border border-red-200',
						)}
						role="status"
						aria-live="polite">
						{statusMessage.message}
					</div>
				)}
			</form>
		</main>
	);
}
