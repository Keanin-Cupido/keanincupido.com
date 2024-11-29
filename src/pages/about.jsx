import { Suspense } from 'react';
import { useImage } from 'react-image';
import { AnimatedSection } from '@/components/ui/animated-section';

// components
import PageHero from '@/components/PageHero';
import Skills from '@/components/Skills';

function AboutImageComponent() {
	const { src } = useImage({
		srcList: '/keanincupido.svg',
	});

	return (
		<div className="w-full h-full bg-[#4c91ff] opacity-80 rounded-lg px-4 py-2 flex items-center justify-center">
			<img
				src={src}
				alt="hero shapes"
				className="w-full max-w-[96px] h-full"
			/>
		</div>
	);
}

export default function About() {
	return (
		<main>
			<AnimatedSection animation="fade-up">
				<PageHero
					pageName={'About Me'}
					pageSubText={'A little more about me.'}
				/>
			</AnimatedSection>

			<section className="flex flex-col items-center md:items-start justify-center md:justify-start gap-8 mt-6 px-4">
				<AnimatedSection animation="fade-up">
					<div className="flex flex-col gap-3">
						{/* image */}
						<Suspense>
							<AboutImageComponent />
						</Suspense>
						<p className="text-[clamp(18px,1vw,20px)] w-full max-w-[100%] md:max-w-[70%] self-end text-right mt-6">
						As a frontend developer with a computer science background, I specialize in building high-performance web applications using cutting-edge technologies. I focus on optimizing core web vitals and implementing progressive enhancement to ensure exceptional user experiences across all devices and network conditions.
						</p>
						<p className="text-[clamp(18px,1vw,20px)] w-full max-w-[100%] md:max-w-[70%] mt-6">
						I excel in agile environments, collaborating effectively with cross-functional teams to deliver innovative solutions. My continuous learning approach keeps me updated with modern development practices, including server-side rendering and advanced build tools, while actively contributing to the developer community through open-source projects and technical content.
						</p>
					</div>
				</AnimatedSection>

				<AnimatedSection animation="fade-up">
					<Skills />
				</AnimatedSection>

				{/* Education */}
				<AnimatedSection animation="fade-up">
					<div className="flex flex-col gap-3 mt-6 text-center md:text-left">
						<h2 className="text-[clamp(24px,1.75vw,26px)] w-full">
							Education
						</h2>
						<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
							<div className="col-span-1 bg-white/15 rounded-lg px-12 py-6">
								<h3 className="text-[clamp(20px,1.5vw,24px)] w-full">
									Bachelor of Computer Science
								</h3>
								<h4 className="text-[clamp(20px,1.25vw,22px)] w-full">
									University of the Western Cape
								</h4>
								<p className="text-[clamp(18px,1.15vw,20px)] w-full opacity-80">
									2017 - 2021
								</p>
							</div>
							<div className="col-span-1 bg-white/15 rounded-lg px-12 py-6">
								<h3 className="text-[clamp(20px,1.5vw,24px)] w-full">
									High School
								</h3>
								<h4 className="text-[clamp(20px,1.25vw,22px)] w-full">
									HTS Bellville THS
								</h4>
								<p className="text-[clamp(18px,1.15vw,20px)] w-full opacity-80">
									2014 - 2016
								</p>
							</div>
						</div>
					</div>
				</AnimatedSection>

				{/* Certifications */}
				<AnimatedSection animation="fade-up">
					<div className="flex flex-col gap-3 mt-6 text-center md:text-left">
						<h2 className="text-[clamp(24px,1.75vw,26px)] w-full">
							Certifications
						</h2>
						<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
							<div className="col-span-1 bg-gradient-to-r from-blue-500/35 to-blue-800/15 rounded-lg p-6 transition-all duration-300 hover:scale-[.97] text-white border border-white/10">
								<h3 className="text-[clamp(18px,1.35,22px)] w-full mb-6 underline underline-offset-8">
									IBM
								</h3>
								<h4 className="text-[clamp(20px,1.15vw,22px)] w-full">
									Getting Started with Front-End and Web Development
								</h4>
								<p className="text-[clamp(18px,1vw,20px)] w-full opacity-80 my-3">
									IBM's Front-End Developer course on Coursera teaches essential web development skills to build responsive, interactive applications.
								</p>

								<div className="flex items-center justify-start gap-4 w-fit mx-auto md:mx-0 mt-6">
									<p>Skills:</p>
									<ul className='flex items-start justify-start gap-4'>
										<li className='bg-white/15 rounded-lg px-4 py-1'>front-end development</li>
									</ul>
								</div>
								<p className="text-[clamp(16px,1vw,20px)] w-fit mx-auto md:mx-0 opacity-60 rounded-lg mt-6">
									2024
								</p>
							</div>
							<div className="col-span-1 bg-gradient-to-r from-blue-500/35 to-blue-800/15 rounded-lg p-6 transition-all duration-300 hover:scale-[.97] text-white border border-white/10">
								<h3 className="text-[clamp(18px,1.35,22px)] w-full mb-6 underline underline-offset-8">
									IBM
								</h3>
								<h4 className="text-[clamp(20px,1.15vw,22px)] w-full">
									Getting Started with Front-End and Web Development
								</h4>
								<p className="text-[clamp(18px,1vw,20px)] w-full opacity-80 my-3">
									IBM's Front-End Developer course on Coursera teaches essential web development skills to build responsive, interactive applications.
								</p>

								<div className="flex items-center justify-start gap-4 w-fit mx-auto md:mx-0 mt-6">
									<p>Skills:</p>
									<ul className='flex items-start justify-start gap-4'>
										<li className='bg-white/15 rounded-lg px-4 py-1'>front-end development</li>
									</ul>
								</div>
								<p className="text-[clamp(16px,1vw,20px)] w-fit mx-auto md:mx-0 opacity-60 rounded-lg mt-6">
									2024
								</p>
							</div>
						</div>
					</div>
				</AnimatedSection>

				{/* Disciplines */}
				<AnimatedSection animation="fade-up">
					<div className="flex flex-col gap-3 mt-6 text-center md:text-left">
						<h2 className="text-[clamp(24px,1.75vw,26px)] w-full">
							Disciplines
						</h2>
						<ul className="flex flex-col gap-3 bg-gradient-to-r from-blue-500/10 to-blue-800/15 rounded-lg p-6 border border-white/10">
							<li className="text-[clamp(18px,1.05vw,20px)] w-full">
								Web Interface Design
							</li>

							<li className="text-[clamp(18px,1.05vw,20px)] w-full">
								User Experience Design
							</li>

							<li className="text-[clamp(18px,1.05vw,20px)] w-full">
								Interaction Design
							</li>

							<li className="text-[clamp(18px,1.05vw,20px)] w-full">
								Front-End Development
							</li>
						</ul>
					</div>
				</AnimatedSection>

				{/* Contact */}
				<AnimatedSection animation="fade-up">
					<div className="w-full flex flex-col gap-6 mt-6 text-center md:text-left">
						<h2 className="text-[clamp(24px,1.75vw,26px)] w-full">
							Contact
						</h2>
						<div className="w-full flex flex-col gap-4 bg-gradient-to-r from-blue-500/10 to-blue-800/15 rounded-lg px-6 py-8 border border-white/10">
							<p className="text-[clamp(20px,1.25vw,22px)] w-full max-w-[70%] mx-auto md:mx-0 ">
								Feel free to reach out for projects, collaborations, or
								just to say hello! Currently seeking new opportunities.
							</p>
							<div className="flex flex-col gap-2 mx-auto md:mx-0 text-center md:text-left">
								<p className="w-fit hover:underline underline-offset-4 hover:cursor-pointer text-[clamp(18px,1.15vw,24px)] opacity-80">
									keanin16@gmail.com
								</p>
								<p className="w-fit hover:underline underline-offset-4 hover:cursor-pointer text-[clamp(18px,1.15vw,24px)] opacity-80">
									LinkedIn
								</p>
							</div>
						</div>
					</div>
				</AnimatedSection>
			</section>
		</main>
	);
}
