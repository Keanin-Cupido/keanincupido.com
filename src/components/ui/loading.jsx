import { motion } from "framer-motion";

export default function LoadingScreen() {
	return (
		<motion.div
			initial={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background gap-8"
		>
			<img
				src="/keanincupido.svg"
				alt={`Keanin's avatar`}
				className="w-16 h-16 mb-4 rounded-lg"
				width="64"
				height="64"
			/>
			<div className="text-2xl font-bold">
				{["L", "o", "a", "d", "i", "n", "g", "..."].map((letter, index) => (
					<motion.span
						key={index}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.5,
							delay: index * 0.1,
							repeat: Infinity,
							repeatType: "reverse",
						}}
						className="inline-block"
					>
						{letter}
					</motion.span>
				))}
			</div>
		</motion.div>
	);
}