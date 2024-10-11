import React from 'react';
import { skills } from '@/data/portfolio';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills: React.FC = () => {
	return (
		<section id="skills" className="py-20">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold mb-8 text-center md:text-left">
					Skills & Technologies
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{skills.map((skill) => (
						<Card key={skill.name}>
							<CardHeader>
								<CardTitle className="flex items-center">
									<skill.icon className="mr-2 h-5 w-5" />
									{skill.name}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<Progress
									value={skill.level}
									className="w-full"
								/>
								<p className="text-sm text-muted-foreground mt-2">
									{skill.level}%
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
