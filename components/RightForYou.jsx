import React from 'react'
import Image from 'next/image'
import Reception from '../public/girl-receptionist.jpg'

const RightForYou = ({ removeContact }) => {
	return (
		<section className='bg-gray-100 text-gray-700 tracking-tight font-light'>
			<div className='px-4 lg:px-2 w-full h-full max-w-[1040px] mx-auto flex flex-col text-center lg:text-left lg:flex-row text-lg py-10'>
				<article className='px-2 lg:pr-8 py-10 flex-1 space-y-4 leading-6'>
					<h2 className='font-bold text-3xl'>
						Find out if Job Guarantee is for you
					</h2>
					<p>
						Take a free session or get in touch with our program advisors for a
						free consultation.
					</p>
					<ul className='list-disc pl-6  lg:pl-8 space-y-2'>
						<li>
							If Full Stack Web Development is the best fit for you based on
							your background and interests.
						</li>
						<li>
							What the tech job market is like in your area and the salary you
							can expect.
						</li>
						<li>
							If Web Development is the best fit for you based on your
							background and interests.
						</li>
						.
					</ul>
					<p>
						Don’t worry—you won’t be pressured into making a commitment. The
						goal is to ensure you make a fully informed decision.
					</p>
				</article>
				<article
					className={`${
						removeContact ? 'hidden' : ''
					} bg-white shadow-xl p-8 text-center`}
				>
					<p className='leading-[3rem] font-medium'>
						Curious about a Job Guarantee program?
					</p>
					<p>Contact us to find out which one is right for you</p>
					<div className='py-12'>
						<Image
							className='object-cover rounded-full'
							src={Reception}
							alt='Receptionist'
							width={100}
							height={100}
						/>
					</div>
					<p className='leading-[3rem]'>
						“I’m here to help you get where you want to go”
					</p>
					<p className='text-base text-gray-400 font-medium'>
						Alana, Senior Program Advisor
					</p>
					<button className='inline-flex mt-4 bg-red-500 w-full justify-center py-2 font-bold rounded text-white hover:opacity-90'>
						Send me a message
					</button>
				</article>
			</div>
		</section>
	)
}

export default RightForYou
