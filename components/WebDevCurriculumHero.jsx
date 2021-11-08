import React from 'react'
import Frontend from '../public/frontend.svg'
import Image from 'next/image'
import Link from 'next/link'

const WebDevCurriculumHero = () => {
	return (
		<section className='bg-overlay'>
			<div className='w-full max-w-[1200px] mx-auto flex flex-col md:flex-row md:space-x-8'>
				<article className='flex justify-center items-center'>
					<Image
						src={Frontend}
						alt='Javascript Frameworks'
						width={300}
						height={400}
					/>
				</article>
				<article className='flex-1 text-white p-8'>
					<h2 className='text-3xl tracking-tighter font-light py-10'>
						Web Development Program Details
					</h2>
					<div className='tracking-wider text-lg font-light max-w-[650px]'>
						<p className='pb-8'>
							Imagine you had a clear step-by-step to follow to become a web
							developer.
						</p>
						<div className='space-y-4'>
							<p className='leading-10'>
								Maybe you are complete beginner who wants a fulfilling new
								career. Maybe you already have some coding knowledge but aren't
								quite job-ready, or perhaps you want to learn web development in
								order to excel in your current career. If you identify with any
								of the above, then no "maybes": Make it happen with our Web
								Development Program.
							</p>
						</div>
					</div>
				</article>
			</div>
			<div className='bg-white p-4'>
				<div className='w-full max-w-[1050px] mx-auto'>
					<Link href='/WebDevelopmentCourse'>
						<a className='text-blue-400'>
							Back to Web Development Program Page
						</a>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default WebDevCurriculumHero
