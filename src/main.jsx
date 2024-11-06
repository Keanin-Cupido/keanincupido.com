import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import emailjs from '@emailjs/browser';
import LoadingScreen from './components/ui/loading.jsx';

try {
	emailjs.init("uyFRDkoERfJDz-4aj");
	console.log('EmailJS initialized successfully');
} catch (error) {
	console.error('EmailJS initialization error:', error);
}

// pages imports
import Root from './layouts/root.jsx';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Portfolio from './pages/portfolio.jsx';
import ProjectInfo from './pages/projectInfo';
// import Blog from './pages/blog.jsx';
// import BlogPost from './pages/blogPost.jsx';
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
				element: (
					<Suspense fallback={<LoadingScreen />}>
						<Home role="contentinfo" aria-label="Home Page" />
					</Suspense>
				),
			},
			{
				path: '/about',
				element: (
					<Suspense fallback={<LoadingScreen />}>
						<About role="contentinfo" aria-label="About Page" />
					</Suspense>
				),
			},
			{
				path: '/portfolio',
				element: (
					<Suspense fallback={<LoadingScreen />}>
						<Portfolio role="contentinfo" aria-label="Portfolio Page" />
					</Suspense>
				),
			},
			{
				path: '/portfolio/:project_title',
				element: (
					<Suspense fallback={<LoadingScreen />}>
						<ProjectInfo
							role="contentinfo"
							aria-label="Project Info Page"
						/>
					</Suspense>
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
					<Suspense fallback={<LoadingScreen />}>
						<Contact role="contentinfo" aria-label="Contact Page" />
					</Suspense>
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
