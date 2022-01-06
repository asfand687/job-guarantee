import Image from 'next/image'
import WebDev from '../public/web-dev.jpg'
import Blockquote from './Blockquote'

const Curriculum = () => {
	return (
		<section className='py-6 px-4 md:p-12 mt-8 relative after:bg-gray-700 after:w-full after:h-[1100px] lg:after:h-[750px] after:absolute after:top-0 after:left-0 after:z-0'>
			<div className='w-full lg:w-4/5 mx-auto flex justify-between text-white relative z-[5]'>
				<article className='flex-1'>
					<h2 className='text-4xl font-light pb-4 tracking-tight'>
						A project-based curriculum:
					</h2>
					<h2 className='text-4xl font-bold tracking-tight pb-8'>
						Finished with a polished, job-ready portfolio
					</h2>
					<h3 className='text-2xl font-bold tracking-wide py-3'>
						A curriculum created in-house
					</h3>
					<p className='pb-2 text-justify md:pr-4'>
						Authored and updated by industry-leading experts and structured by
						experienced instructional designers, our superior curriculum ensures
						that you learn the skills that employers need.
					</p>
					<h3 className='text-2xl font-bold tracking-wide py-3'>
						An intuitive learning platform
					</h3>
					<p className='pb-2 text-justify md:pr-4'>
						Enjoy a seamless learning experience. Connect with your tutor,
						mentor and fellow students, submit your work and receive feedback,
						watch video tutorials, and plan out your study schedule with the
						help of our time management features.
					</p>
					<h3 className='text-2xl font-bold tracking-wide py-3'>
						Exclusive access to all our career-change programs
					</h3>
					<p className='pb-2 text-justify md:pr-4 mb-12'>
						Request free, read-only access to our other career-change programs,
						enjoy free or discounted access to popular industry tools, and
						receive a certificate on completion of your program.
					</p>
				</article>
				<article className='hidden w-1/2 rounded lg:flex justify-end items-center'>
					<Image
						className='object-cover'
						src={WebDev}
						alt='Web Developer'
						width={500}
						height={400}
					/>
				</article>
			</div>
			<Blockquote
				width='w-full max-w-screen-xl relative z-10 mx-auto'
				href='/HowItWorks'
			/>
		</section>
	)
}

export default Curriculum
