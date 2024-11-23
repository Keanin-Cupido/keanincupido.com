import { Suspense } from 'react';
import { useImage } from 'react-image';
import { Button } from './ui/button';
import Heading from './Heading';

const SKILLS_DATA = [
	{
		name: 'JavaScript',
		icon: (
<svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24"><path fill="currentColor" d="M7.5 15q-.625 0-1.062-.437T6 13.5v-.25q0-.325.213-.537t.537-.213t.538.213t.212.537v.25H9V9.75q0-.325.213-.537T9.75 9t.538.213t.212.537v3.75q0 .625-.437 1.063T9 15zm5.5 0q-.425 0-.712-.288T12 14v-.5q0-.2.15-.35t.35-.15h.5q.2 0 .35.15t.15.35h2v-1H13q-.425 0-.712-.288T12 11.5V10q0-.425.288-.712T13 9h3q.425 0 .713.288T17 10v.5q0 .2-.15.35t-.35.15H16q-.2 0-.35-.15t-.15-.35h-2v1H16q.425 0 .713.288T17 12.5V14q0 .425-.288.713T16 15z"/></svg>
		)
	},
	{
		name: 'react',
		icon: (
			<svg
				viewBox="0 0 512 512"
				fill="currentColor"
				height="0.9em"
				width="0.9em">
				<path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
			</svg>
		),
	},
	{
		name: 'typescript',
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="0.9em"
				height="0.9em"
				viewBox="0 0 32 32">
				<path
					fill="currentColor"
					d="M0 16v16h32V0H0zm25.786-1.276a4.023 4.023 0 0 1 2.005 1.156c.292.312.729.885.766 1.026.01.042-1.38.974-2.224 1.495-.031.021-.156-.109-.292-.313-.411-.599-.844-.859-1.505-.906-.969-.063-1.594.443-1.589 1.292a1.26 1.26 0 0 0 .135.599c.214.443.615.708 1.854 1.245 2.292.984 3.271 1.635 3.88 2.557.682 1.031.833 2.677.375 3.906-.51 1.328-1.771 2.234-3.542 2.531-.547.099-1.849.083-2.438-.026-1.286-.229-2.505-.865-3.255-1.698-.297-.323-.87-1.172-.833-1.229.016-.021.146-.104.292-.188l1.188-.688.922-.536.193.286c.271.411.859.974 1.214 1.161 1.021.542 2.422.464 3.115-.156.281-.234.438-.594.417-.958 0-.37-.047-.536-.24-.813-.25-.354-.755-.656-2.198-1.281-1.651-.714-2.365-1.151-3.01-1.854a4.236 4.236 0 0 1-.88-1.599c-.12-.453-.151-1.589-.057-2.042.339-1.599 1.547-2.708 3.281-3.036.563-.109 1.875-.068 2.427.068zm-7.51 1.339.01 1.307h-4.167v11.839h-2.948V17.37H7.01v-1.281c0-.714.016-1.307.036-1.323.016-.021 2.547-.031 5.62-.026l5.594.016z"
				/>
			</svg>
		),
	},
	{
		name: 'node',
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlSpace="preserve"
				width="0.9em"
				height="0.9em"
				viewBox="0 0 512 512">
				<path
					fill="currentColor"
					d="M482.585 147.869v216.113c0 14.025-7.546 27.084-19.672 34.143L275.665 506.241c-5.989 3.474-12.782 5.259-19.719 5.259-6.838 0-13.649-1.785-19.639-5.259l-62.521-36.99c-9.326-5.207-4.775-7.059-1.692-8.128 12.454-4.322 14.973-5.318 28.268-12.863 1.387-.793 3.216-.483 4.647.343l48.031 28.519c1.741.981 4.2.981 5.801 0l187.263-108.086c1.744-.996 2.862-2.983 2.862-5.053V147.869c0-2.117-1.118-4.094-2.906-5.163L258.874 34.716c-1.726-1.01-4.03-1.01-5.768 0L65.962 142.736c-1.818 1.04-2.965 3.079-2.965 5.133v216.113c0 2.069 1.146 4.009 2.954 4.99l51.299 29.654c27.829 13.903 44.875-2.485 44.875-18.956V166.309c0-3.017 2.423-5.396 5.439-5.396h23.747c2.969 0 5.429 2.378 5.429 5.396v213.362c0 37.146-20.236 58.454-55.452 58.454-10.816 0-19.347 0-43.138-11.713l-49.098-28.287c-12.133-6.995-19.638-20.117-19.638-34.143V147.869c0-14.043 7.505-27.15 19.638-34.135L236.308 5.526c11.85-6.701 27.608-6.701 39.357 0l187.248 108.208c12.126 7.014 19.672 20.092 19.672 34.135z"
				/>
			</svg>
		),
	},
	{
		name: 'next',
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="0.9em"
				height="0.9em"
				preserveAspectRatio="xMidYMid"
				viewBox="0 0 256 256">
				<path
					fill="currentColor"
					d="M119.617.069c-.55.05-2.302.225-3.879.35-36.36 3.278-70.419 22.894-91.99 53.044-12.012 16.764-19.694 35.78-22.597 55.922C.125 116.415 0 118.492 0 128.025c0 9.533.125 11.61 1.151 18.64 6.957 48.065 41.165 88.449 87.56 103.411 8.309 2.678 17.067 4.504 27.027 5.605 3.879.425 20.645.425 24.524 0 17.192-1.902 31.756-6.155 46.12-13.486 2.202-1.126 2.628-1.426 2.327-1.677-.2-.15-9.584-12.735-20.845-27.948l-20.47-27.648-25.65-37.956c-14.114-20.868-25.725-37.932-25.825-37.932-.1-.025-.2 16.84-.25 37.431-.076 36.055-.1 37.506-.551 38.357-.65 1.226-1.151 1.727-2.202 2.277-.801.4-1.502.475-5.28.475h-4.33l-1.15-.725a4.679 4.679 0 0 1-1.677-1.827l-.526-1.126.05-50.166.075-50.192.776-.976c.4-.525 1.251-1.2 1.852-1.526 1.026-.5 1.426-.55 5.755-.55 5.105 0 5.956.2 7.282 1.651.376.4 14.264 21.318 30.88 46.514 16.617 25.195 39.34 59.599 50.5 76.488l20.27 30.7 1.026-.675c9.084-5.905 18.693-14.312 26.3-23.07 16.191-18.59 26.626-41.258 30.13-65.428 1.026-7.031 1.151-9.108 1.151-18.64 0-9.534-.125-11.61-1.151-18.641-6.957-48.065-41.165-88.449-87.56-103.411-8.184-2.652-16.892-4.479-26.652-5.58-2.402-.25-18.943-.525-21.02-.325Zm52.401 77.414c1.201.6 2.177 1.752 2.527 2.953.2.65.25 14.562.2 45.913l-.074 44.987-7.933-12.16-7.958-12.16v-32.702c0-21.143.1-33.028.25-33.603.4-1.401 1.277-2.502 2.478-3.153 1.026-.525 1.401-.575 5.33-.575 3.704 0 4.354.05 5.18.5Z"
				/>
			</svg>
		),
	},
	{
		name: 'astro',
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1.5em"
				height="1.5em"
				viewBox="0 0 128 128">
				<path
					fill="currentColor"
					d="M81.504 9.465c.973 1.207 1.469 2.836 2.457 6.09l21.656 71.136a90 90 0 0 0-25.89-8.765L65.629 30.28a1.833 1.833 0 0 0-3.52.004L48.18 77.902a90.1 90.1 0 0 0-26.003 8.778l21.758-71.14c.996-3.25 1.492-4.876 2.464-6.083a8 8 0 0 1 3.243-2.398c1.433-.575 3.136-.575 6.535-.575H71.72c3.402 0 5.105 0 6.543.579a8 8 0 0 1 3.242 2.402Zm2.59 80.61c-3.57 3.054-10.696 5.136-18.903 5.136c-10.07 0-18.515-3.137-20.754-7.356c-.8 2.418-.98 5.184-.98 6.954c0 0-.527 8.675 5.508 14.71a5.67 5.67 0 0 1 5.672-5.671c5.37 0 5.367 4.683 5.363 8.488v.336c0 5.773 3.527 10.719 8.543 12.805a11.6 11.6 0 0 1-1.172-5.098c0-5.508 3.23-7.555 6.988-9.938c2.989-1.894 6.309-4 8.594-8.222a15.5 15.5 0 0 0 1.875-7.41a15.6 15.6 0 0 0-.734-4.735Zm0 0"
				/>
			</svg>
		),
	},
];
const SKILLS_DATA_EXTRA = [
	{
		name: 'HTML',
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="0.9em" height="0.9em" viewBox="0 0 512 512">
				<path fill="currentColor" d="M0 0h512v512H0z" />
				<path fill="#E44D26" d="M0 0h512v512H0z" />
				<path fill="#F16529" d="M0 0h512v512H0z" />
				<path fill="#FFFFFF" d="M0 0h512v512H0z" />
			</svg>
		),
	},
	{
		name: 'CSS',
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="0.9em" height="0.9em" viewBox="0 0 512 512">
				<path fill="currentColor" d="M0 0h512v512H0z" />
				<path fill="#1572B6" d="M0 0h512v512H0z" />
				<path fill="#33A9DC" d="M0 0h512v512H0z" />
				<path fill="#FFFFFF" d="M0 0h512v512H0z" />
			</svg>
		),
	},
	{
		name: 'Node.js',
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="0.9em" height="0.9em" viewBox="0 0 512 512">
				<path fill="currentColor" d="M0 0h512v512H0z" />
				<path fill="#8CC84B" d="M0 0h512v512H0z" />
				<path fill="#FFFFFF" d="M0 0h512v512H0z" />
			</svg>
		),
	},
	{
		name: 'Git',
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="0.9em" height="0.9em" viewBox="0 0 512 512">
				<path fill="currentColor" d="M0 0h512v512H0z" />
				<path fill="#F05032" d="M0 0h512v512H0z" />
				<path fill="#FFFFFF" d="M0 0h512v512H0z" />
			</svg>
		),
	},
	{
		name: 'Webpack',
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="0.9em" height="0.9em" viewBox="0 0 512 512">
				<path fill="currentColor" d="M0 0h512v512H0z" />
				<path fill="#8CC84B" d="M0 0h512v512H0z" />
				<path fill="#FFFFFF" d="M0 0h512v512H0z" />
			</svg>
		),
	},
	{
		name: 'Jest',
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="0.9em" height="0.9em" viewBox="0 0 512 512">
				<path fill="currentColor" d="M0 0h512v512H0z" />
				<path fill="#C21325" d="M0 0h512v512H0z" />
				<path fill="#FFFFFF" d="M0 0h512v512H0z" />
			</svg>
		),
	},
];

function LoadingCard() {
	return (
		<div className="flex flex-col items-center gap-4 animate-pulse">
			<div className="h-16 w-16 rounded-full bg-muted/15" />
			<div className="h-4 w-24 bg-muted/15 rounded" />
		</div>
	);
}

function ScribbleLine() {
	const { src, isLoading } = useImage({
		srcList: '/scribble_line3.png',
		useSuspense: false,
	});

	if (isLoading) {
		return (
			<div className="absolute -bottom-3 w-full max-w-[350px] h-10 bg-muted/15 animate-pulse" />
		);
	}

	return (
		<img
			src={src}
			alt=""
			role="presentation"
			className="absolute -bottom-3 w-full max-w-[350px] h-10 invert opacity-50"
		/>
	);
}

function SkillCard({ name, icon }) {
	return (
		<div className="group flex flex-col items-center gap-4" role="listitem">
			<div className="relative flex items-center justify-center transition-all duration-300 group-hover:scale-75">
				<div className="skill skill-primary z-10" aria-hidden="true">
					{icon}
				</div>
				<div className="skill-set_pulseRing__t_FmF z-0">
					{[1, 2, 3].map((i) => (
						<span key={i} />
					))}
				</div>
			</div>
			<p className="text-lg md:text-xl font-semibold capitalize">
				{name}
			</p>
		</div>
	);
}

export default function Skills({ buttonDisplay = false }) {
	return (
		<section
			className="mt-responsive-container"
			aria-labelledby="skills-heading">
			<div className="relative flex items-center justify-center">
				<Heading
					headingTop="What Can I Do?"
					headingMiddle="Skills"
					headingShortDesc="A set of skills to tackle the web."
					id="skills-heading"
				/>
				<Suspense
					fallback={
						<div className="absolute -bottom-3 w-full max-w-[350px] h-10 bg-muted/15 animate-pulse" />
					}>
					<ScribbleLine />
				</Suspense>
			</div>

			<div
				className="w-full max-w-[75%] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-24 mt-44"
				role="list">
				<Suspense
					fallback={[...Array(6)].map((_, i) => (
						<LoadingCard key={i} />
					))}>
					{SKILLS_DATA.map((skill) => (
						<SkillCard key={skill.name} {...skill} />
					))}
				</Suspense>
			</div>

			<p className="w-full max-w-[85%] mx-auto text-center text-base md:text-xl mt-28">
				While my toolkit spans numerous technologies,{' '}
				<span className="underline underline-offset-4">
					React and its powerful ecosystem
				</span>{' '}
				remain my go-to framework for building robust, scalable
				solutions. This tech stack, combined with modern development
				practices and performance optimization techniques, enables me to
				transform complex requirements into{' '}
				<span className="underline underline-offset-4">
					elegant, user-centric applications
				</span>{' '}
				that deliver exceptional experiences across all platforms.
			</p>

			{/* Extra Skills */}
			{window.location.pathname === '/about' ? (
			<div
				className="w-full max-w-[75%] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-24 mt-44"
				role="list">
				<Suspense
					fallback={[...Array(6)].map((_, i) => (
						<LoadingCard key={i} />
					))}>
				{/* Render extra skills if on the about page */}
				{window.location.pathname === '/about' && (
					SKILLS_DATA_EXTRA.map((skill) => (
						<SkillCard key={skill.name} {...skill} />
					))
				)}
				</Suspense>
			</div>) : null}

			{buttonDisplay && (
				<div className="text-center p-8 mt-12">
					<Button asChild variant="defaultGradient" size="md">
						<a href="/about">Read More</a>
					</Button>
				</div>
			)}
		</section>
	);
}
