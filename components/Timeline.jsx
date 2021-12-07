import React from 'react'
import TimelineCard from './TimelineCard'
import { MdDeveloperMode } from 'react-icons/md'
import { timelineData } from '../data/data'

const Timeline = () => {
	return (
		<section className='mt-12 relative after:absolute after:w-3 after:h-[65%] after:bg-gray-600 after:left-[50%] after:top-[370px] after:transform after:translate-x-[-50%] after:hidden lg:after:block px-4'>
			<p className='mx-auto w-full max-w-[650px] px-6 text-center leading-8 font-normal text-xl py-8'>
				Our career change programs are 100% on-campus and and One on One
				Learning so you can learn from the industry experts and mentor. Here’s
				an overview how it works.
			</p>
			<div className='pt-16 pb-24'>
				<div className='w-full flex flex-col lg:block items-center space-y-20 max-w-[1040px] mx-auto'>
					{timelineData.map((card) => (
						<div
							key={card.id}
							className={`flex relative ${
								card.placement === 'left' ? '' : 'flex-row-reverse'
							} before:w-10 before:h-10 before:absolute before:top-20 before:left-[50%] before:transform before:translate-x-[-50%] before:bg-gray-600 before:rounded-full before:hidden lg:before:block`}
						>
							<div>
								<TimelineCard
									id={card.id}
									topText={card.topText}
									text={card.text}
								/>
							</div>
							<div className='flex-1 hidden  text-gray-700 md:flex justify-center items-center'>
								{card.icon}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Timeline
