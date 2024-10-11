import React from 'react';
import { caseStudies } from '@/data/portfolio';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CaseStudies: React.FC = () => {
	return (
		<section id="case-studies" className="py-20">
			<div className="mx-auto px-4">
				<h2 className="text-3xl font-bold mb-8 text-center md:text-left">
					Case Studies
				</h2>
				<div className="space-y-8">
					{caseStudies.map((study) => (
						<Card key={study.title}>
							<CardHeader>
								<CardTitle>{study.title}</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div>
										<img
											src={study.image}
											alt={study.title}
											className="w-full h-64 object-cover rounded"
										/>
									</div>
									<div>
										<h3 className="font-semibold mb-2">
											Problem
										</h3>
										<p className="mb-4">{study.problem}</p>
										<h3 className="font-semibold mb-2">
											Approach
										</h3>
										<p className="mb-4">{study.approach}</p>
										<h3 className="font-semibold mb-2">
											Solution
										</h3>
										<p className="mb-4">{study.solution}</p>
										<h3 className="font-semibold mb-2">
											Outcome
										</h3>
										<p>{study.outcome}</p>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default CaseStudies;
