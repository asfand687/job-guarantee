import React from 'react'
import Link from 'next/link'
import { AiOutlineCheck } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'

const AdmissionCriteria = () => {
	return (
		<section className='w-full pt-12 pb-16 md:px-4 max-w-[1240px] mx-auto'>
			<h2 className='text-gray-700 font-bold tracking-tight text-2xl text-center md:text-3xl px-4 pb-6'>
				Web Development Program Admission Criteria
			</h2>
			<div className='flex flex-col lg:flex-row'>
				<article className='bg-gray-200 p-6 flex-1'>
					<div className='text-white text-[80px] pb-3'>
						<AiOutlineCheck />
					</div>
					<div className='text-gray-700 space-y-4'>
						<h2 className='text-5xl tracking-tighter font-medium pb-4'>
							What you need:
						</h2>
						<h3 className='font-medium text-lg'>
							The motivation to transform your career
						</h3>
						<p>
							The program requires commitment as it takes about 420 hours to
							complete. You should be prepared to set aside at least 15-20 hours
							per week to study.
						</p>
						<h3 className='font-medium text-lg'>
							A computer (Mac or PC) and an internet connection.
						</h3>
						<h3 className='font-medium text-lg'>
							An interest in web development
						</h3>
						<p>
							If you're already reading books and blog posts about coding, that
							is a great sign. If you are unsure if web development is really
							for you, here are some great ways to explore it:
						</p>
						<ul className='list-disc'>
							<li className='ml-8'>
								Take our{' '}
								<Link href='#'>
									<a className='font-semibold underline text-gray-500 tracking-normal'>
										free coding short course
									</a>
								</Link>
								.
							</li>
							<li className='ml-8'>
								<Link href='#'>
									<a className='font-semibold underline text-gray-500 tracking-normal'>
										Get a free consultation
									</a>
								</Link>{' '}
								with one of our program advisors who will give you personal
								feedback on which direction to go based on your interests and
								goals. .
							</li>
						</ul>
					</div>
				</article>
				<article className='flex-1 pt-8 lg:pt-6 p-6'>
					<div className='text-gray-400 text-[80px] pb-3'>
						<AiOutlineClose />
					</div>
					<div className='text-gray-700 space-y-4'>
						<h2 className='text-5xl tracking-tighter font-medium pb-4'>
							What you <span className='underline'>don't</span> need:
						</h2>
						<h3 className='font-medium text-lg'>
							A background in coding or tech
						</h3>
						<p>
							This program is designed to take you from beginner to
							job-ready—regardless of your background. And now more than ever,
							employers see bootcamp graduates as excellent job candidates.{' '}
							<Link href='https://careerkarma.com/blog/bootcamp-market-report-2021/'>
								<a className='font-semibold underline text-gray-500 tracking-normal'>
									A 2021 study by Career Karma
								</a>
							</Link>{' '}
							found that companies as respected as Amazon, Google, Facebook, and
							Microsoft are some of the largest employers of bootcamp graduates.
							The same study revealed that, in 2020, those same companies hired
							up to 120% more bootcamps graduates than they did in 2019!
						</p>
						<h3 className='font-medium text-lg'>Unlimited free time</h3>
						<p>
							You can study part-time at 15-20 hours per week to finish the
							program in 7 months; or complete the program in as little as 4
							months by studying up to 30-40 hours per week.{' '}
						</p>
						<h3 className='font-medium text-lg'>To learn all on your own</h3>
						<p>
							You can enjoy the flexibility of online learning with the
							accountability and one-on-one attention traditionally associated
							with brick-and-mortar institutions. Much like a college professor
							might inspire you to pursue a career in a certain field, your
							mentor, tutor, career specialist, and student advisor will keep
							you motivated and on track.
						</p>
					</div>
				</article>
			</div>
		</section>
	)
}

export default AdmissionCriteria
