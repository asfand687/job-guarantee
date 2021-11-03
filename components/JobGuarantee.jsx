import React from 'react'
import Image from 'next/image'
import Discussion from '../public/discussion.jpg'

const JobGuarantee = () => {
	return (
		<section className='w-full bg-white py-16'>
			<div className='w-full h-full max-w-[1040px] mx-auto bg-gray-600 flex'>
				<article className='hidden w-2/5 lg:flex items-stretch'>
					<Image className='h-full flex-1' src={Discussion} />
				</article>
				<article className='flex-1 p-10 space-y-4 text-white'>
					<h2 className='font-bold text-4xl tracking-tight'>
						Get ready to land a job you'll love
					</h2>
					<p>
						We know that the job hunt can be the most challenging part of a
						career changer's journey. That's why our career change prorams
						include personalized career caoching and job preparation.
					</p>
					<h2 className='font-bold text-3xl tracking-tight'>Job guarantee</h2>
					<p>
						Land a job within six months of graduation or we'll refund your full
						tuition. Learn more about our Job Guarantee.
					</p>
					<h2 className='font-bold text-3xl tracking-tight'>Job preparation</h2>
					<p>
						Every career change program includes our Job Preparation Course,
						which walks you through our proven strategies to succeed in your job
						hunt.
					</p>
					<h2 className='font-bold text-3xl tracking-tight'>
						Personalized career coaching
					</h2>
					<p>
						Work 1:1 with a career specialist who knows the art of the job
						search and the job market in your area. They'll help you refine your
						job search strategy and application materials to ensure you stand
						out from the crowd.
					</p>
				</article>
			</div>
		</section>
	)
}

export default JobGuarantee
