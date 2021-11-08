import Link from 'next/link'
import Image from 'next/image'
import InfoGrid from './InfoGrid'
import HeroImg from '../public/hero.svg'
import ButtonOutline from './ButtonOutline'
import { homeInfoGrid } from '../data/data'

const Hero = ({
	grid,
	heading,
	text,
	button,
	image,
	imgWidth,
	imgHeight,
	imgRounded,
}) => {
	return (
		<section>
			<div className='w-9/12 mx-auto flex flex-col lg:flex-row justify-between'>
				<article className='flex-1 md:pb-6 pt-12 md:pt-28 text-white'>
					<h2 className='text-4xl md:text-5xl font-extrabold pb-6'>
						{heading}
					</h2>
					{text}
					{button && (
						<ButtonOutline
							text='Find the right program for you'
							border='border-white'
						/>
					)}
				</article>
				<article className='flex-1 hidden lg:flex justify-end mt-10'>
					<Image
						src={image}
						width={imgWidth}
						height={imgHeight}
						className={`${imgRounded ? 'rounded-md object-cover' : ''}`}
					/>
				</article>
			</div>
			{grid && <InfoGrid data={homeInfoGrid} />}
		</section>
	)
}

export default Hero
