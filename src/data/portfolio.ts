import {
	Code,
	Briefcase,
	GraduationCap,
	Laptop,
	Palette,
	PenTool,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Skill {
	name: string;
	level: number;
	icon: LucideIcon;
}

export interface Project {
	title: string;
	description: string;
	image: string;
	technologies: string[];
	demoUrl: string;
	sourceUrl: string;
	category: string;
}

export interface BlogPost {
	title: string;
	excerpt: string;
	date: string;
	url: string;
}

export interface CaseStudy {
	title: string;
	problem: string;
	approach: string;
	solution: string;
	outcome: string;
	image: string;
}

export const skills: Skill[] = [
	{ name: 'JavaScript', level: 90, icon: Code },
	{ name: 'React', level: 85, icon: Code },
	{ name: 'Node.js', level: 80, icon: Code },
	{ name: 'TypeScript', level: 75, icon: Code },
	{ name: 'HTML/CSS', level: 95, icon: Palette },
	{ name: 'UI/UX Design', level: 70, icon: PenTool },
];

export const projects: Project[] = [
	{
		title: 'E-commerce Platform',
		description: 'A full-stack e-commerce solution with React and Node.js',
		image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
		technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
		demoUrl: 'https://example-ecommerce.com',
		sourceUrl: 'https://github.com/yourusername/ecommerce-platform',
		category: 'Full Stack',
	},
	{
		title: 'Weather App',
		description:
			'A responsive weather application using React and OpenWeatherMap API',
		image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
		technologies: ['React', 'API Integration', 'CSS3'],
		demoUrl: 'https://example-weather-app.com',
		sourceUrl: 'https://github.com/yourusername/weather-app',
		category: 'Frontend',
	},
	{
		title: 'Personal Finance Manager',
		description:
			'A web application for managing personal finances, built with React and Firebase',
		image: 'https://images.unsplash.com/photo-1518770653252-f79506e36f7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
		technologies: ['React', 'Firebase', 'CSS3'],
		demoUrl: 'https://example-personal-finance-manager.com',
		sourceUrl: 'https://github.com/yourusername/personal-finance-manager',
		category: 'Frontend',
	},
	{
		title: 'Real-time Chat Application',
		description:
			'A real-time chat application built with Node.js, Express, and Socket.IO',
		image: 'https://images.unsplash.com/photo-1518770653252-f79506e36f7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
		technologies: ['Node.js', 'Express', 'Socket.IO', 'JavaScript'],
		demoUrl: 'https://example-chat-app.com',
		sourceUrl: 'https://github.com/yourusername/real-time-chat-application',
		category: 'Full Stack',
	},
	{
		title: 'Portfolio Website',
		description:
			'A personal portfolio website built with React, TypeScript, and Astro',
		image: 'https://images.unsplash.com/photo-1518770653252-f79506e36f7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
		technologies: ['React', 'TypeScript', 'Astro', 'CSS3'],
		demoUrl: 'https://example-portfolio-website.com',
		sourceUrl: 'https://github.com/yourusername/portfolio-website',
		category: 'Frontend',
	},
	{
		title: 'To-Do List App',
		description:
			'A simple to-do list application built with React and local storage',
		image: 'https://images.unsplash.com/photo-1518770653252-f79506e36f7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
		technologies: ['React', 'JavaScript', 'CSS3'],
		demoUrl: 'https://example-to-do-list-app.com',
		sourceUrl: 'https://github.com/yourusername/to-do-list-app',
		category: 'Frontend',
	},
];

export const blogPosts: BlogPost[] = [
	{
		title: 'Mastering React Hooks',
		excerpt:
			'Learn how to effectively use React Hooks to manage state and side effects in your applications.',
		date: '2023-05-15',
		url: '/blog/mastering-react-hooks',
	},
	{
		title: 'Building Scalable Node.js Applications',
		excerpt:
			'Discover best practices for creating scalable and maintainable Node.js applications.',
		date: '2023-04-22',
		url: '/blog/scalable-nodejs-applications',
	},
	{
		title: 'E-commerce Website',
		excerpt:
			'Explore the development of a scalable e-commerce website using Node.js, Express, and MongoDB.',
		date: '2023-03-15',
		url: '/blog/e-commerce-website-development',
	},
	{
		title: 'Introduction to WebAssembly',
		excerpt:
			'Learn about the basics of WebAssembly and its potential applications in web development.',
		date: '2023-02-10',
		url: '/blog/introduction-to-webassembly',
	},
];

export const caseStudies: CaseStudy[] = [
	{
		title: 'Redesigning a Financial Dashboard',
		problem:
			'A fintech startup struggled with user engagement due to a complex and unintuitive dashboard.',
		approach:
			'Conducted user research, created wireframes, and iteratively designed a new interface.',
		solution:
			'Implemented a clean, modern design with improved data visualization and user flow.',
		outcome:
			'Increased user engagement by 40% and reduced support tickets by 25%.',
		image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
	},
	{
		title: 'Optimizing an E-learning Platform',
		problem:
			'An e-learning platform faced performance issues and slow load times, affecting user experience.',
		approach:
			'Profiled the application, identified bottlenecks, and implemented performance optimizations.',
		solution:
			'Implemented code splitting, lazy loading, and server-side rendering for critical components.',
		outcome:
			'Reduced initial load time by 60% and improved overall user satisfaction scores.',
		image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
	},
	{
		title: 'Enhancing User Experience for a Healthcare App',
		problem:
			'A healthcare app struggled with user retention due to a cluttered and confusing interface.',
		approach:
			'Conducted user research, created wireframes, and iteratively designed a new interface.',
		solution:
			'Implemented a clean, modern design with improved navigation and user flow.',
		outcome:
			'Increased user retention by 30% and improved overall user satisfaction scores.',
		image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
	},
];

export const personalInfo = {
	name: 'Keanin Cupido',
	title: 'Frontend Web Developer',
	email: 'iamkeanincupido@gmail.com',
	phone: '0817058297',
	location: 'Cape Town, South Africa',
	bio: 'Passionate frontend developer with experience in creating robust and scalable web applications. Specialized in React, Node.js, and modern web technologies.',
	social: {
		github: 'https://github.com/johndoe',
		linkedin: 'https://linkedin.com/in/johndoe',
		twitter: 'https://twitter.com/johndoe',
	},
};
