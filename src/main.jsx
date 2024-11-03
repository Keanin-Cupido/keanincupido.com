import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

// pages imports
import Root from './layouts/Root.jsx';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Portfolio from './pages/portfolio.jsx';
import ProjectInfo from './pages/projectInfo';
import Blog from './pages/blog.jsx';
import BlogPost from './pages/blogPost.jsx';
import Contact from './pages/contact.jsx';
import Error from './pages/error.jsx';

// pages
const router = createBrowserRouter([
	{
		path: '/',
		element: <Root role="main" aria-label="Main Application Layout" />,
		errorElement: <Error role="alert" aria-live="assertive" />,
		children: [
			{
				path: '/',
				element: <Home role="contentinfo" aria-label="Home Page" />,
			},
			{
				path: '/about',
				element: <About role="contentinfo" aria-label="About Page" />,
			},
			{
				path: '/portfolio',
				element: (
					<Portfolio role="contentinfo" aria-label="Portfolio Page" />
				),
			},
			{
				path: '/portfolio/:project_title',
				element: (
					<ProjectInfo
						role="contentinfo"
						aria-label="Project Info Page"
					/>
				),
			},
			// {
			// 	path: '/blog',
			// 	element: <Blog role="contentinfo" aria-label="Blog Page" />,
			// },
			// {
			// 	path: '/blog/:filename',
			// 	element: (
			// 		<BlogPost role="contentinfo" aria-label="Blog Post Page" />
			// 	),
			// },
			{
				path: '/contact',
				element: (
					<Contact role="contentinfo" aria-label="Contact Page" />
				),
			},
		],
	},
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
