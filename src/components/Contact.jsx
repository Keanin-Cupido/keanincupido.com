import { Suspense } from 'react';
import { useImage } from 'react-image';

// components
import Heading from './Heading';
import { Button } from './ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ChevronRightIcon } from '@radix-ui/react-icons';

function ScribbleLine4() {
	const { src } = useImage({
		srcList: '/scribble_line5.png',
	});

	return (
		<img
			src={src}
			alt="scribble shapes"
			className="absolute -bottom-[12px] items-center w-full max-w-[350px] h-[40px] invert opacity-50"
		/>
	);
}

export default function Contact() {
	return (
		<section className="w-full mx-auto mt-responsive-container">
			<div className="relative flex items-center justify-center">
				<Heading
					headingTop="Contact Me"
					headingMiddle="Get In Touch"
					headingShortDesc="Send me a message."
				/>

				<Suspense>
					<ScribbleLine4 />
				</Suspense>
			</div>

			{/* Form */}
			<div className="w-full max-w-md mx-auto grid mt-20">
				<div className="grid w-full items-center gap-1.5">
					<Label htmlFor="name">Name</Label>
					<Input type="text" id="name" placeholder="Jane Doe" />
				</div>
				<div className="grid w-full items-center gap-1.5 mt-6">
					<Label htmlFor="email">Email</Label>
					<Input
						type="email"
						id="email"
						placeholder="janedoe@email.com"
					/>
				</div>
				<div className="grid w-full gap-1.5 mt-6">
					<Label htmlFor="message">Your message</Label>
					<Textarea
						placeholder="Type your message here."
						id="message"
					/>
				</div>
				<Button className="mt-6">
					<p className="mr-2">Send message</p>
					<ChevronRightIcon className="h-4 w-4" />
				</Button>
			</div>
		</section>
	);
}
