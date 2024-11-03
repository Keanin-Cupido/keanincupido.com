import React, { Suspense } from 'react';
import { useImage } from 'react-image';

const LogoImage = ({ size }) => {
	const { src } = useImage({
		srcList: '/keanincupido.svg',
	});

	return (
		<img
			src={src}
			alt="Logo representing Keanin Cupido"
			role="img"
			aria-label="Logo representing Keanin Cupido"
			className={`${
				size === 'sm'
					? 'w-[32px]'
					: size === 'md'
					? 'w-[48px]'
					: 'w-[92px]'
			}`}
		/>
	);
};

export default function LogoImageWrapper({ size }) {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<LogoImage size={size} />
		</Suspense>
	);
}
