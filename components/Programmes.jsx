import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import Blockquote from './Blockquote'

const Programmes = () => {
	return (
		<section>
			<div className='w-full px-4 md:w-9/12 mx-auto pt-12 text-gray-800'>
				<h2 className='text-3xl lg:text-4xl max-w-sm tracking-tight font-bold'>
					A program that can transform your career
				</h2>
				<p className='pt-6 max-w-xl text-justify text-xl tracking-normal leading-7 md:text-left'>
					Our program will teach you everything you need to get your first job
					in tech in as little as 4 months--even if you don't have any previous
					experiences.
				</p>
				<section className='pt-12 relative md:after:bg-gray-200 after:w-full after:h-80 after:absolute after:top-32 after:right-80 after:z-0'>
					<div className='relative z-[5]'>
						<article className='p-4 lg:p-8 bg-purple-600 w-full max-w-xl rounded-md mb-12'>
							<h3 className='bg-black inline-block text-white p-1 uppercase tracking-tight'>
								Job Guarantee
							</h3>
							<h2 className='text-3xl font-bold text-white pt-2 pb-4 tracking-tight'>
								Full Stack Web Development
							</h2>
							<p className='text-white leading-5 pb-6 font-medium'>
								Make the web beautiful. Learn to design and develop a complete
								application from scratch.
							</p>
							<div>
								<Link href='/WebDevCurriculum'>
									<a className='bg-gray-300 p-3 rounded-md inline-flex items-center hover:opacity-80'>
										<span className='tracking-tight'>View Program</span>
										<FiArrowRight />
									</a>
								</Link>
							</div>
						</article>
						<Blockquote
							width='w-full lg:w-2/3 max-w-3xl'
							href='/WebDevelopmentCourse'
							small
						/>
					</div>
				</section>
			</div>
		</section>
	)
}

export default Programmes
