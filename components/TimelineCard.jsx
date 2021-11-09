import React from 'react'

const TimelineCard = ({ id, topText, text }) => {
	return (
		<article className='w-full max-w-[430px] shadow-2xl py-10 pl-[70px] pr-16 relative rounded'>
			<div className='absolute -top-4 lg:-top-14 right-4 lg:-right-8 flex text-gray-700 items-center'>
				<span className='hidden md:inline-block pr-4 text-5xl lg:text-[66px] font-bold'>
					{id}
				</span>
				<span className='bg-gray-700 text-white font-bold text-xl rounded inline-block min-w-[304px] text-center tracking-tight p-2'>
					{topText}
				</span>
			</div>
			<p className='tracking-wide font-light text-md leading-6'>{text}</p>
		</article>
	)
}

export default TimelineCard
