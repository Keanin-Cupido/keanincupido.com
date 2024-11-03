import { useRouteError, Link } from 'react-router-dom';
import { ExclamationTriangleIcon, HomeIcon } from '@radix-ui/react-icons';

export default function ErrorPage() {
	const error = useRouteError();
	const errorMessage =
		error?.statusText || error?.message || 'Something went wrong';
	const errorStatus = error?.status || '500';

	return (
		<main
			className="min-h-screen flex flex-col items-center justify-center p-4 bg-background"
			role="alert"
			aria-labelledby="error-title">
			<div className="text-center space-y-6 max-w-md mx-auto">
				<ExclamationTriangleIcon className="h-12 w-12 text-destructive mx-auto" />

				<div className="space-y-2">
					<h1
						id="error-title"
						className="text-4xl font-bold tracking-tight">
						{errorStatus === '404' ? 'Page Not Found' : 'Oops!'}
					</h1>

					<p className="text-muted-foreground text-lg">
						{errorStatus === '404'
							? "The page you're looking for doesn't exist."
							: 'Sorry, an unexpected error has occurred.'}
					</p>

					<p className="text-sm text-muted-foreground font-mono bg-muted/30 p-2 rounded-md">
						{errorMessage}
					</p>
				</div>

				<Link
					to="/"
					className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-full transition-colors"
					aria-label="Return to homepage">
					<HomeIcon className="h-4 w-4" />
					<span>Return Home</span>
				</Link>
			</div>
		</main>
	);
}
