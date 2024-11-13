import { Suspense } from 'react';
import { useImage } from 'react-image';

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
			<PageHero
				pageName={'About Me'}
				pageSubText={'A little more about me.'}
			/>

			<section className="flex flex-col items-center md:items-start justify-center md:justify-start gap-12 mt-8 px-4">
				<div className="flex flex-col gap-4">
					{/* image */}
					<Suspense>
						<AboutImageComponent />
					</Suspense>
					<p className="text-[clamp(20px,1.35vw,24px)] w-full max-w-[100%] md:max-w-[70%] self-end text-right mt-8">
					Driven by a deep curiosity for emerging web technologies, I consistently explore and implement cutting-edge development practices to optimize performance, accessibility, and user engagement. My computer science background enables me to approach frontend challenges with a systematic mindset, whether I'm architecting component systems, optimizing build processes, or implementing state management solutions. <br/><br/> I'm particularly passionate about creating blazing-fast web applications that prioritize core web vitals and progressive enhancement, ensuring that every user receives the best possible experience regardless of their device or network conditions.
					</p>
					<p className="text-[clamp(20px,1.35vw,24px)] w-full max-w-[100%] md:max-w-[70%] mt-8">
					Beyond technical skills, I bring strong collaboration and communication abilities to every project. I thrive in agile environments where I can work closely with designers, product managers, and fellow developers to deliver innovative solutions. <br/><br/> My commitment to continuous learning keeps me at the forefront of frontend development trends, including server-side rendering, static site generation, and modern build tools. I regularly attend tech conferences, contribute to open-source projects, and share my knowledge through technical blog posts.
					</p>
				</div>

				<Skills />


				{/* Education */}
				<div className="flex flex-col gap-4 mt-8 text-center md:text-left">
					<h2 className="text-[clamp(24px,2.5vw,32px)] w-full underline underline-offset-8">
						Education
					</h2>
					<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="col-span-1 bg-white/15 rounded-lg px-12 py-6">
							<h3 className="text-[clamp(22px,2vw,28px)] w-full">
								Bachelor of Computer Science
							</h3>
							<h4 className="text-[clamp(20px,1.5vw,26px)] w-full">
								University of the Western Cape
							</h4>
							<p className="text-[clamp(18px,1.25vw,24px)] w-full opacity-80">
								2017 - 2021
							</p>
						</div>
						<div className="col-span-1 bg-white/15 rounded-lg px-12 py-6">
							<h3 className="text-[clamp(22px,2vw,28px)] w-full">
								High School
							</h3>
							<h4 className="text-[clamp(20px,1.5vw,26px)] w-full">
								HTS Bellville THS
							</h4>
							<p className="text-[clamp(18px,1.25vw,24px)] w-full opacity-80">
								2014 - 2016
							</p>
						</div>
					</div>
				</div>

				{/* Certifications */}
				<div className="flex flex-col gap-4 mt-8 text-center md:text-left">
					<h2 className="text-[clamp(24px,2.5vw,32px)] w-full underline underline-offset-8">
						Certifications
					</h2>
					<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="col-span-1 bg-gradient-to-r from-blue-500/35 to-blue-800/15 rounded-lg p-6 transition-all duration-300 hover:scale-[.97] text-white border border-white/10">
							<h3 className="text-[clamp(22px,2vw,28px)] w-full mb-6 underline underline-offset-8">
								IBM
							</h3>
							<h4 className="text-[clamp(20px,1.5vw,26px)] w-full">
								Getting Started with Front-End and Web Development
							</h4>
							<p className="text-[clamp(18px,1.2vw,22px)] w-full opacity-90 my-3">
								Have you encountered a website with stunning design, user-friendly interactivity, and dynamic elements and wondered how it was put together? If so, this course is designed for you! It is tailored for aspiring front-end developers or those who want to get started in this field. 
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
							<h3 className="text-[clamp(22px,2vw,28px)] w-full mb-6 underline underline-offset-8">
								IBM
							</h3>
							<h4 className="text-[clamp(20px,1.5vw,26px)] w-full">
								Getting Started with Front-End and Web Development
							</h4>
							<p className="text-[clamp(18px,1.2vw,22px)] w-full opacity-90 my-3">
								Have you encountered a website with stunning design, user-friendly interactivity, and dynamic elements and wondered how it was put together? If so, this course is designed for you! It is tailored for aspiring front-end developers or those who want to get started in this field. 
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

				{/* Disciplines */}
				<div className="flex flex-col gap-4 mt-8 text-center md:text-left">
					<h2 className="text-[clamp(24px,2.5vw,32px)] w-full underline underline-offset-8">
						Disciplines
					</h2>
						<ul className="flex flex-col gap-4 bg-gradient-to-r from-blue-500/10 to-blue-800/15 rounded-lg p-6 border border-white/10">
							<li className="text-[clamp(20px,1.5vw,26px)] w-full">
								Web Interface Design
							</li>

							<li className="text-[clamp(20px,1.5vw,26px)] w-full">
								User Experience Design
							</li>

							<li className="text-[clamp(20px,1.5vw,26px)] w-full">
								Interaction Design
							</li>

							<li className="text-[clamp(20px,1.5vw,26px)] w-full">
								Front-End Development
							</li>
						</ul>
				</div>

				{/* Contact */}
				<div className="w-full flex flex-col gap-6 mt-16 text-center md:text-left">
					<h2 className="text-[clamp(24px,2.5vw,32px)] w-full underline underline-offset-8">
						Contact
					</h2>
					<div className="w-full flex flex-col gap-4 bg-gradient-to-r from-blue-500/10 to-blue-800/15 rounded-lg px-6 py-8 border border-white/10">
						<p className="text-[clamp(20px,1.5vw,26px)] w-full max-w-[70%] mx-auto md:mx-0 ">
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
			</section>
		</main>
	);
}
