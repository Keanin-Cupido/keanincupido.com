import React from 'react';
import { personalInfo } from '@/data/portfolio';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
	return (
		<section className="min-h-[calc(100vh-9rem)] flex flex-col items-center justify-center h-full mx-4 mt-2 mb-4 py-20 bg-gradient-to-b from-blue-600/50 to-blue-900/5 rounded-2xl">
			<div className="h-full flex flex-col items-center justify-center mx-auto px-4 text-center">
				<img
					src="/keanincupido.svg"
					alt="Hero Image"
					className="w-[64px] h-[64px] mb-4 rounded-lg"
				/>
				<h1 className="text-4xl font-bold mb-4">{personalInfo.name}</h1>
				<h2 className="text-2xl text-muted-foreground mb-6">
					{personalInfo.title}
				</h2>
				<p className="text-lg mb-8 max-w-2xl mx-auto">
					{personalInfo.bio}
				</p>
				<Button asChild>
					<a href="#contact">Hire Me</a>
				</Button>
			</div>
		</section>
	);
};

export default Hero;
