import { NavLink } from 'react-router-dom';

// icons
import { Github, Linkedin, Twitter, Menu } from 'lucide-react';

// components
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';

// data
import { personalInfo } from '../lib/data/data';

export default function Header() {
	return (
		<header
			className="bg-white bg-opacity-5 mx-4 mb-4 mt-8 backdrop-blur-md border border-white/10 rounded-xl p-2"
			role="banner"
			id="nav">
			<div className="container mx-auto px-8 flex justify-between items-center space-x-2">
				<NavLink
					to={'/'}
					className="flex items-center justify-start gap-4 hover:opacity-80"
					aria-label="Navigate to home page">
					<img
						src="/keanincupido.svg"
						alt="Keanin Cupido's profile picture"
						className="w-[32px] h-[32px] rounded-lg"
						aria-label="Keanin Cupido's profile picture"
					/>
					<h1
						className="font-black text-base text-white/90"
						aria-label="User's name">
						{/* {personalInfo.name} */}KC.
					</h1>
				</NavLink>
				<nav className="hidden md:block" aria-label="Main navigation">
					<ul className="flex space-x-6 tracking-wider">
						{['/', '/about', '/portfolio', '/contact'].map(
							(path, index) => (
								<li key={index}>
									<NavLink
										to={path}
										className={({ isActive }) =>
											`hover:opacity-70 ${
												isActive
													? 'text-white font-semibold underline underline-offset-[6px]'
													: 'text-white/50'
											}`
										}
										aria-label={`Navigate to ${
											path === '/'
												? 'Home'
												: path.slice(1)
										}`}>
										{path === '/'
											? 'Home'
											: path
													.slice(1)
													.charAt(0)
													.toUpperCase() +
											  path.slice(2)}
									</NavLink>
								</li>
							),
						)}
					</ul>
				</nav>
				<div
					className="hidden md:flex space-x-2"
					aria-label="Social media links">
					{Object.entries(personalInfo.social).map(([key, value]) => (
						<Button key={key} variant="ghost" size="icon" asChild>
							<a
								href={value}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`Visit my ${
									key.charAt(0).toUpperCase() + key.slice(1)
								} profile`}>
								{key === 'github' && (
									<Github className="h-5 w-5 text-white" />
								)}
								{key === 'linkedin' && (
									<Linkedin className="h-5 w-5 text-white" />
								)}
								{key === 'twitter' && (
									<Twitter className="h-5 w-5 text-white" />
								)}
							</a>
						</Button>
					))}
				</div>

				{/* Mobile Menu */}
				<div className="md:hidden" aria-label="Mobile menu">
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button
								variant="ghost"
								size="icon"
								aria-label="Open menu">
								<Menu className="h-5 w-5 text-white" />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent
							align="end"
							className="p-2 flex flex-col gap-2 bg-blue-500 bg-opacity-90 border border-white/15">
							{[
								'/',
								'/about',
								'/portfolio',
								// '/blog',
								'/contact',
							].map((path, index) => (
								<DropdownMenuItem key={index}>
									<a
										href={path}
										className="text-white"
										aria-label={`Navigate to ${
											path === '/'
												? 'Home'
												: path.slice(1)
										}`}>
										{path === '/'
											? 'Home'
											: path
													.slice(1)
													.charAt(0)
													.toUpperCase() +
											  path.slice(2)}
									</a>
								</DropdownMenuItem>
							))}
							<Separator className="bg-white" />
							{Object.entries(personalInfo.social).map(
								([key, value]) => (
									<DropdownMenuItem key={key}>
										{key === 'github' && (
											<Github className="h-5 w-5 text-white mr-2" />
										)}
										{key === 'linkedin' && (
											<Linkedin className="h-5 w-5 text-white mr-2" />
										)}
										{key === 'twitter' && (
											<Twitter className="h-5 w-5 text-white mr-2" />
										)}
										<a
											href={value}
											target="_blank"
											rel="noopener noreferrer"
											className="text-white"
											aria-label={`Visit my ${
												key.charAt(0).toUpperCase() +
												key.slice(1)
											} profile`}>
											{key.charAt(0).toUpperCase() +
												key.slice(1)}
										</a>
									</DropdownMenuItem>
								),
							)}
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
		</header>
	);
}
