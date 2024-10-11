import React from 'react';
import { personalInfo } from '@/data/portfolio';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About: React.FC = () => {
	return (
		<section id="about" className="py-20 mx-4 mt-2 mb-4 rounded-2xl">
			<div className="">
				<h2 className="text-3xl font-bold mb-8 text-center md:text-left">
					About Me
				</h2>
				<Card>
					<CardHeader>
						<CardTitle>Background</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="mb-4">{personalInfo.bio}</p>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div>
								<h3 className="font-semibold">Location</h3>
								<p>{personalInfo.location}</p>
							</div>
							<div>
								<h3 className="font-semibold">Email</h3>
								<p>{personalInfo.email}</p>
							</div>
							<div>
								<h3 className="font-semibold">Phone</h3>
								<p>{personalInfo.phone}</p>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	);
};

export default About;
