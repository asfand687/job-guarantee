import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import Blockquote from './Blockquote'

const Programmes = () => {
	return (
		<section>
			<div className='w-full px-4 md:w-9/12 mx-auto pt-12 text-gray-800'>
				<h2 className='text-4xl tracking-tight font-bold'>
					Choose a program <br /> and transform your career
				</h2>
				<p className='pt-6 text-xl tracking-normal leading-7 text-justify md:text-left'>
					Our programs will teach you everything you need to get <br /> your
					first job in tech in as little as 5 months--even if you <br /> don't
					have any previous experiences.
				</p>
				<section className='pt-12 relative md:after:bg-gray-200 after:w-full after:h-80 after:absolute after:top-32 after:right-80 after:z-0'>
					<div className='z-10 relative'>
						<article className='p-8 bg-purple-600 w-full max-w-xl rounded-md mb-12'>
							<h3 className='bg-black inline-block text-white p-1 uppercase tracking-tight'>
								Job Guarantee
							</h3>
							<h2 className='text-3xl font-bold text-white pt-2 pb-4 tracking-tight'>
								UI Design
							</h2>
							<p className='text-white leading-5 pb-6 font-medium'>
								Make the web beautiful. Learn to design a complete application
								from scratch.
							</p>
							<div>
								<Link href='#'>
									<a className='bg-gray-300 p-3 rounded-md inline-flex items-center'>
										<span className='tracking-tight'>View Program</span>
										<FiArrowRight />
									</a>
								</Link>
							</div>
						</article>
						<Blockquote width='w-full lg:w-2/3 max-w-3xl' small />
					</div>
				</section>
			</div>
		</section>
	)
}

export default Programmes
