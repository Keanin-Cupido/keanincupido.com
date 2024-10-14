import React from 'react';
import { personalInfo } from '@/data/portfolio';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter, Menu } from 'lucide-react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header: React.FC = () => {
	return (
		<header className="bg-white bg-opacity-5 mx-4 mb-4 mt-8 backdrop-blur-md border border-white/10 rounded-xl py-2 px-2">
			<div className="container mx-auto px-8 flex justify-between items-center">
				<div className="flex items-center justify-start gap-4">
					<img
						src="/keanincupido.svg"
						alt="Hero Image"
						className="w-[32px] h-[32px] rounded-lg"
					/>
					<h1 className="text-md font-semibold text-white">
						{personalInfo.name}
					</h1>
				</div>
				<nav className="hidden md:block">
					<ul className="flex space-x-6 tracking-wider">
						<li>
							<a
								href="/about"
								className="hover:opacity-70 text-white">
								About
							</a>
						</li>
						<li>
							<a
								href="/skills"
								className="hover:opacity-70 text-white">
								Skills
							</a>
						</li>
						<li>
							<a
								href="/projects"
								className="hover:opacity-70 text-white">
								Projects
							</a>
						</li>
						<li>
							<a
								href="/blog"
								className="hover:opacity-70 text-white">
								Blog
							</a>
						</li>
						<li>
							<a
								href="/contact"
								className="hover:opacity-70 text-white">
								Contact
							</a>
						</li>
					</ul>
				</nav>
				<div className="hidden md:flex space-x-2">
					<Button variant="ghost" size="icon" asChild>
						<a
							href={personalInfo.social.github}
							target="_blank"
							rel="noopener noreferrer">
							<Github className="h-5 w-5 text-white" />
						</a>
					</Button>
					<Button variant="ghost" size="icon" asChild>
						<a
							href={personalInfo.social.linkedin}
							target="_blank"
							rel="noopener noreferrer">
							<Linkedin className="h-5 w-5 text-white" />
						</a>
					</Button>
					<Button variant="ghost" size="icon" asChild>
						<a
							href={personalInfo.social.twitter}
							target="_blank"
							rel="noopener noreferrer">
							<Twitter className="h-5 w-5 text-white" />
						</a>
					</Button>
				</div>

				<div className="md:hidden">
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="ghost" size="icon">
								<Menu className="h-5 w-5 text-white" />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent
							align="end"
							className="flex flex-col gap-1 bg-white bg-opacity-30 backdrop-blur-md border border-white/20">
							<DropdownMenuItem>
								<a href="#about" className="text-white">
									About
								</a>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<a href="#skills" className="text-white">
									Skills
								</a>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<a href="#projects" className="text-white">
									Projects
								</a>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<a href="#blog" className="text-white">
									Blog
								</a>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<a href="#contact" className="text-white">
									Contact
								</a>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<a
									href={personalInfo.social.github}
									target="_blank"
									rel="noopener noreferrer"
									className="text-white">
									GitHub
								</a>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<a
									href={personalInfo.social.linkedin}
									target="_blank"
									rel="noopener noreferrer"
									className="text-white">
									LinkedIn
								</a>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<a
									href={personalInfo.social.twitter}
									target="_blank"
									rel="noopener noreferrer"
									className="text-white">
									Twitter
								</a>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
		</header>
	);
};

export default Header;
