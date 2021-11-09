import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { RiShieldCheckLine } from 'react-icons/ri'
import { FiMonitor } from 'react-icons/fi'
import { IoMdGitNetwork } from 'react-icons/io'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { MdWorkOutline } from 'react-icons/md'
import { MdMonitor } from 'react-icons/md'
import { FiArrowRight } from 'react-icons/fi'
import Developer from '../public/dev.jpg'
import Companies from '../components/Companies'
import ButtonOutline from '../components/ButtonOutline'
import TextGrid from '../components/TextGrid'
import { whyWebDevelopmentGridData } from '../data/data'
import { whyJobGuaranteeGridData } from '../data/data'
import Dev from '../public/dev2.jpg'
import Dev3 from '../public/dev3.jpg'
import AdmissionCriteria from '../components/AdmissionCriteria'
import Pricing from '../components/Pricing'

const WebDevelopmentCourse = () => {
	return (
		<div>
			<Head>
				<title>Job Guarantee | Web Development Course</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<section className='bg-purple-900'>
					<div className='relative z-10'>
						<Navbar />
						<section className='w-full max-w-[1260px]  px-4 mx-auto text-white flex flex-col lg:flex-row pt-4'>
							<article className='flex-1 py-8 space-y-6'>
								<div className='inline-flex bg-[#8b8bd4] py-2 text-gray-600 text-sm font-medium items-center uppercase tracking-tight rounded p-1'>
									Job Guarantee
								</div>
								<h2 className='font-bold text-4xl lg:text-5xl tracking-tight lg:leading-[3.5rem]'>
									Full-Stack Web Development <br /> Program
								</h2>
								<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
									<article className='flex space-x-4 items-center'>
										<div className='text-white text-4xl'>
											<RiShieldCheckLine />
										</div>
										<div>
											<p className='font-semibold'>Become a web developer</p>
											<p>in under 7 months</p>
										</div>
									</article>
									<article className='flex md:justify-end space-x-4 items-center'>
										<div className='text-white text-4xl'>
											<FiMonitor />
										</div>
										<div>
											<p className='font-semibold'>Learn flexibly online</p>
											<p>without having to quit your job</p>
										</div>
									</article>
									<article className='flex space-x-4 items-center'>
										<div className='text-white text-4xl'>
											<IoMdGitNetwork />
										</div>
										<div>
											<p className='font-semibold'>Work with expert mentors</p>
											<p>and build your portfolio</p>
										</div>
									</article>
								</div>
							</article>
							<article className='flex-1'>
								<div className='flex justify-end pb-8'>
									<Image
										className='object-cover rounded-md'
										src={Developer}
										alt='Developer'
										width={550}
										height={400}
									/>
								</div>
							</article>
						</section>
					</div>
				</section>
				<Companies />
				<section className='text-center py-10'>
					<div className='w-full max-w-[700px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 pb-10'>
						<article>
							<div className='text-5xl text-gray-600 flex justify-center'>
								<MdMonitor />
							</div>
							<h2 className='text-gray-700 font-semibold py-4'>Fully Online</h2>
							<p className='max-w-[250px] mx-auto'>
								4 months at 30-40 hours/week or up to 7 months at 15-20
								hours/week
							</p>
						</article>
						<article>
							<div className='text-5xl text-gray-600 flex justify-center'>
								<FaChalkboardTeacher />
							</div>
							<h2 className='text-gray-700 font-semibold py-4'>Mentorship</h2>
							<p className='max-w-[250px] mx-auto'>
								Our web development mentors are rated 4.84/5 from over 6000
								student reviews.
							</p>
						</article>
						<article>
							<div className='text-5xl text-gray-600 flex justify-center'>
								<MdWorkOutline />
							</div>
							<h2 className='text-gray-700 font-semibold py-4'>
								Career Support
							</h2>
							<p className='max-w-[250px] mx-auto'>
								Free job preparation course and expert career coaching included
							</p>
						</article>
					</div>
					<div className='flex justify-center'>
						<ButtonOutline
							text='See Curriculum'
							icon={<FiArrowRight />}
							border='border-gray-700'
							path='/WebDevCurriculum'
						/>
					</div>
				</section>
				<TextGrid
					gridTextData={whyWebDevelopmentGridData}
					img={<Image className='object-cover flex-1' src={Dev} />}
					containImg='h-[520px]'
				/>
				<TextGrid
					gridTextData={whyJobGuaranteeGridData}
					img={<Image className='object-cover flex-1' src={Dev3} />}
					containImg
					reverse
					bgLight
					containImg='h-[565px]'
				/>
				<AdmissionCriteria />
				<Pricing />
				<Footer />
			</main>
		</div>
	)
}

export default WebDevelopmentCourse
