import React from 'react'
import ButtonOutline from './ButtonOutline'
import { FiArrowRight } from 'react-icons/fi'
import { RiCheckboxCircleFill } from 'react-icons/ri'
import { BsQuestionCircleFill } from 'react-icons/bs'
import Badge from '../public/job-guarantee-badge.png'
import Image from 'next/image'
import Link from 'next/link'

const Pricing = () => {
	return (
		<section className='py-8 bg-[#5e337a] text-white'>
			<div className='w-full px-4 max-w-[1240px] mx-auto'>
				<h2 className='text-[2.5rem] tracking-tighter font-medium pb-2'>
					Price and payment options
				</h2>
				<div className='py-1 border-l-[10px] pl-4 space-y-1 border-[#5CA2B2]'>
					<h3 className='text-white font-semibold font-xl'>
						Next start dates:
					</h3>
					<div>
						<p>Monday, November 15th, 2021 | Monday, November 29th, 2021 |</p>
						<p>
							Monday, December 13th, 2021 | Monday, January 10th, 2022 | Monday,
						</p>
						<p>January 24th, 2022 | Monday, February 7th, 2022</p>
					</div>
				</div>
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-6 py-8'>
					<div className='lg:col-span-2 space-y-4'>
						<article className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4'>
							<div className='p-6 rounded bg-white flex flex-col justify-between h-[380px] flex-1'>
								<div>
									<header className='flex space-x-2 text-white text-sm font-medium'>
										<div className='uppercase inline-flex py-1 px-2 bg-[#1C7488]'>
											Best Value
										</div>
										<div className='uppercase inline-flex py-1 px-2 bg-[#FC7B57]'>
											5% off
										</div>
									</header>
									<div className='flex space-x-2 items-end text-gray-700 tracking-tighter py-8 border-b border-gray-700'>
										<span className='line-through text-lg'>$7900</span>
										<span className='text-5xl font-medium'>$7505</span>
									</div>
									<div className='text-gray-700 space-y-4 pt-4'>
										<h2 className='font-medium text-3xl tracking-tighter'>
											Pay upfront
										</h2>
										<p className='font-light'>Save 5% on your tuition.</p>
									</div>
								</div>
								<div className='text-white pt-6'>
									<ButtonOutline
										text='Enroll now'
										bg='bg-gray-700'
										icon={<FiArrowRight />}
										border='border-gray-700'
										full
									/>
								</div>
							</div>
							<div className='p-6 rounded bg-white flex flex-col justify-between h-[380px] flex-1'>
								<div>
									<header className='flex space-x-2 text-white text-sm font-medium'>
										<div className='uppercase inline-flex py-1 px-2 bg-[#1C7488]'>
											Most Flexible
										</div>
									</header>
									<div className='flex flex-col text-gray-700 tracking-tighter pt-8 border-b border-gray-700'>
										<span className='text-5xl font-medium'>$7900</span>
										<p className='text-xs pt-1 pb-3 tracking-wide'>
											$1400 upfront, then $650 for 10 months
										</p>
									</div>
									<div className='text-gray-700 space-y-4 pt-4'>
										<h2 className='font-medium text-3xl tracking-tighter'>
											Pay monthly
										</h2>
										<p className='font-light'>
											Pay $1400 today to secure your place, and then $650 per
											month for 10 months.
										</p>
									</div>
								</div>
								<div className='text-white pt-6'>
									<ButtonOutline
										text='Enroll now'
										bg='bg-gray-700'
										icon={<FiArrowRight />}
										border='border-gray-700'
										full
									/>
								</div>
							</div>
						</article>
						<article className='w-full bg-white rounded border-l-[12px] border-[#5CA2B2] text-gray-700 p-6'>
							<h2 className='font-medium text-3xl tracking-tighter'>
								Need a more flexible payment plan?
							</h2>
							<p className='w-full max-w-[450px] py-4'>
								We can set up a custom payment plan that better suits your
								needs. Book a call with a program advisor to learn more.
							</p>
							<div className='text-gray-700 pt-2'>
								<ButtonOutline
									text='Talk to your program advisor'
									icon={<FiArrowRight />}
									border='border-gray-700'
								/>
							</div>
						</article>
					</div>
					<div className='col-span-1 flex flex-col space-y-4'>
						<article className='bg-[#E8EBED] rounded p-6 text-gray-700 space-y-3'>
							<h2 className='text-3xl py-2 font-semibold tracking-tighter'>
								What you'll get:
							</h2>
							<div className='flex items-center space-x-2'>
								<div className='text-green-400 text-2xl'>
									<RiCheckboxCircleFill />
								</div>
								<p>A project-based curriculum</p>
							</div>
							<div className='flex items-center space-x-2'>
								<div className='text-green-400 text-2xl'>
									<RiCheckboxCircleFill />
								</div>
								<p>Professional portfolio</p>
							</div>
							<div className='flex items-center space-x-2'>
								<div className='text-green-400 text-2xl'>
									<RiCheckboxCircleFill />
								</div>
								<p>Job-ready skills</p>
							</div>
							<div className='flex items-center space-x-2'>
								<div className='text-green-400 text-2xl'>
									<RiCheckboxCircleFill />
								</div>
								<p>Dedicated mentor and tutor</p>
							</div>
							<div className='flex items-center space-x-2'>
								<div className='text-green-400 text-2xl'>
									<RiCheckboxCircleFill />
								</div>
								<p>Support from a career specialist</p>
							</div>
						</article>
						<article className='bg-[#E8EBED] rounded p-8 text-gray-700 space-y-3'>
							<header className='w-full flex justify-between'>
								<div className='space-y-4 flex-1'>
									<h2 className='text-3xl font-semibold tracking-tighter'>
										Job Guarantee
									</h2>
									<p className='font-medium'>
										Land a job within 6 months of graduation or your money back!
									</p>
								</div>
								<div>
									<Image src={Badge} alt='Job guarantee badge' />
								</div>
							</header>
							<div className='text-gray-700 text-sm border-l-4 tracking-tight border-[#5CA2B2] pl-2'>
								96% of our eligible graduates get a job in their new field
								within 180 days of graduation
							</div>
						</article>
						<article className='bg-[#E8EBED] rounded p-8 text-gray-700 space-y-3'>
							<div className='flex items-center'>
								<div className='text-green-700 text-xl pr-2'>
									<BsQuestionCircleFill />
								</div>{' '}
								<span className='pr-1 font-medium'>Any questions?</span>{' '}
								<Link href='#'>
									<a className='underline font-semibold'>Contact us</a>
								</Link>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Pricing
