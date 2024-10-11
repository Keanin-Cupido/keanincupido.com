import React from 'react';
import { personalInfo } from '@/data/portfolio';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const Contact: React.FC = () => {
	return (
		<section id="contact" className="py-20">
			<div className="mx-auto px-4">
				<h2 className="text-3xl font-bold mb-8 text-center md:text-left">
					Contact Me
				</h2>
				<Card>
					<CardHeader>
						<CardTitle>Get in Touch</CardTitle>
					</CardHeader>
					<CardContent>
						<form className="space-y-4">
							<div>
								<Input type="text" placeholder="Your Name" />
							</div>
							<div>
								<Input type="email" placeholder="Your Email" />
							</div>
							<div>
								<Textarea placeholder="Your Message" />
							</div>
							<Button type="submit">Send Message</Button>
						</form>
					</CardContent>
				</Card>
			</div>
		</section>
	);
};

export default Contact;
