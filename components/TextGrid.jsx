import React from 'react'
import GridHeading from './GridHeading'

const TextGrid = ({
	gridTextData,
	img,
	small,
	containImg,
	reverse,
	bgLight,
}) => {
	return (
		<section className='w-full bg-white py-16 border-0'>
			<div
				className={`w-full h-full shadow-xl ${
					small ? 'max-w-[1040px]' : 'max-w-[1200px]'
				} mx-auto ${
					bgLight ? 'bg-gray-200 text-gray-700' : 'bg-gray-600 text-white'
				}  flex ${reverse ? 'flex-row-reverse' : ''}`}
			>
				<article
					className={`hidden w-2/5 lg:flex items-stretch h-full ${
						containImg ? containImg : ''
					}`}
				>
					{img}
				</article>
				<article className='flex-1 p-10 space-y-4'>
					{gridTextData.map(({ id, heading, paragraph, big, textLight }) => (
						<div key={id} className='space-y-4'>
							<GridHeading text={heading} big={big} textLight={textLight} />
							{paragraph && <p>{paragraph}</p>}
						</div>
					))}
				</article>
			</div>
		</section>
	)
}

export default TextGrid
