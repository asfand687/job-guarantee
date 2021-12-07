import React from 'react'
import { RiComputerLine } from 'react-icons/ri'
import { DiJavascript } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { SiJest } from 'react-icons/si'
import { MdOutlineTabletAndroid } from 'react-icons/md'
import { AiOutlineGithub } from 'react-icons/ai'
import Image from 'next/image'
import Programmer from '../public/programmer.jpg'

const WebDevCourseOutline = () => {
	return (
		<section className='bg-white md:bg-gray-300 py-10'>
			<div className='w-full max-w-[900px] mx-auto space-y-12 text-center md:text-left'>
				<article className='px-6 md:px-0'>
					<h3 className='text-2xl font-medium pb-12 px-4'>
						Learn all the skills you need to become a job-ready web developer
					</h3>
					<div className='flex'>
						<article className='text-gray-700 flex-1 relative z-10 rounded'>
							<h2 className='text-center md:text-left text-6xl font-semibold tracking-tighter pb-2 md:pb-6'>
								01
							</h2>
							<div className='w-full p-6 md:p-8 bg-white md:m-0 shadow-lg md:shadow-2xl'>
								<h3 className='text-center md:text-left text-3xl tracking-wide font-light pb-2'>
									Introduction to Frontend Development
								</h3>
								<div className='flex flex-col md:flex-row md:space-x-4 items-center'>
									<article className='p-3 rounded-full inline-flex items-center justify-center border-2 border-gray-700 text-gray-700 text-5xl'>
										<RiComputerLine />
									</article>
									<article className='font-light  text-lg leading-9'>
										<strong>Learn HTML and CSS:</strong> the building blocks of
										the web. Build your portfolio site from scratch and use
										advanced CSS to add custom transitions and animations!
									</article>
								</div>
							</div>
						</article>
						<article className='hidden md:block h-[500px] w-[350px] -ml-16 narrow-img'></article>
					</div>
				</article>
				<article className='px-6 md:px-0'>
					<div className='flex flex-row-reverse items-center'>
						<article className='text-gray-700 flex-1 relative z-10 rounded'>
							<h2 className=' text-6xl font-semibold tracking-tighter pb-2 md:pb-6'>
								02
							</h2>
							<div className='w-full p-6 md:p-8 bg-white  shadow-lg md:shadow-2xl'>
								<h3 className=' text-3xl tracking-wide font-light pb-2'>
									Fullstack Immersion
								</h3>
								<section className='space-y-10'>
									<div className='flex flex-col md:flex-row md:space-x-4 items-center'>
										<article className='p-3 rounded-full inline-flex items-center justify-center border-2 border-gray-700 text-gray-700 text-5xl'>
											<DiJavascript />
										</article>
										<article className='font-light text-lg leading-9'>
											<strong>JavaScript Basics:</strong> You’ll use JavaScript
											to build a simple client-side JavaScript application that
											can communicate with an external API.
										</article>
									</div>
									<div className='flex flex-col md:flex-row md:space-x-4 items-center'>
										<article className='p-3 rounded-full inline-flex items-center justify-center border-2 border-gray-700 text-gray-700 text-5xl'>
											<FaNodeJs />
										</article>
										<article className='font-light text-lg leading-9'>
											<strong>Server-Side Programming and Node.js:</strong>{' '}
											Discover how you can use JavaScript on the server-side
											using Node.js. Using your command line, you’ll work with
											web server frameworks, REST architecture, and databases as
											you build an API from scratch.
										</article>
									</div>
									<div className='flex flex-col md:flex-row md:space-x-4 items-center'>
										<article className='p-3 rounded-full inline-flex items-center justify-center border-2 border-gray-700 text-gray-700 text-5xl'>
											<FaReact />
										</article>
										<article className='font-light text-lg leading-9'>
											<strong>Client-Side Programming and React:</strong> Learn
											how to use JavaScript to build powerful interfaces for
											server-side systems. You’ll build the frontend for your
											very own API using cutting-edge tool: React.
										</article>
									</div>
									<div className='flex flex-col md:flex-row md:space-x-4 items-center'>
										<article className='p-3 rounded-full inline-flex items-center justify-center border-2 border-gray-700 text-gray-700 text-5xl'>
											<SiJest />
										</article>
										<article className='font-light text-lg leading-9'>
											<strong>Testing in the Development Process:</strong>{' '}
											Explore test-driven development as you build a progressive
											web app with native-like functionality for your portfolio.
											You’ll also learn complex JavaScript topics such as data
											visualization.
										</article>
									</div>
									<div className='flex flex-col md:flex-row md:space-x-4 items-center'>
										<article className='p-3 rounded-full inline-flex items-center justify-center border-2 border-gray-700 text-gray-700 text-5xl'>
											<MdOutlineTabletAndroid />
										</article>
										<article className='font-light text-lg leading-9'>
											<strong>Native App Development and React Native:</strong>{' '}
											Learn about native JavaScript applications while building
											an additional project for your portfolio: a native mobile
											app.
										</article>
									</div>
									<div className='flex flex-col md:flex-row md:space-x-4 items-center'>
										<article className='p-3 rounded-full inline-flex items-center justify-center border-2 border-gray-700 text-gray-700 text-5xl'>
											<AiOutlineGithub />
										</article>
										<article className='font-light text-lg leading-9'>
											<strong>Collaboration and Documentation:</strong> Master
											the key skills required to effectively collaborate with a
											wider product team, such as communicating requirements and
											unpacking design assets, all the while completing a
											project in Angular, a popular JavaScript framework.
										</article>
									</div>
								</section>
							</div>
						</article>
						<article className='hidden md:block h-[500px] w-[350px]  narrow-img alt'></article>
					</div>
				</article>
				<article className='flex flex-col md:flex-row md:space-x-6'>
					<div className='w-full md:w-[350px] md:h-[450px] '>
						<Image
							className='w-full h-full object-cover'
							src={Programmer}
							layout='responsive'
							width='100%'
							height='100%'
							objectFit='cover'
							alt='programmer'
						/>
					</div>
					<div className='flex-1 p-4 text-left'>
						<h2 className='text-3xl pt-8 md:pt-0 font-light tracking-tighter pb-4'>
							Requirements
						</h2>
						<ul className='list-disc space-y-6 text-lg font-light'>
							<li className='ml-8'>16 Years of Education or Equivalent.</li>
							<li className='ml-8'>A computer (Mac, PC or Linux)</li>
						</ul>
					</div>
				</article>
			</div>
		</section>
	)
}

export default WebDevCourseOutline
