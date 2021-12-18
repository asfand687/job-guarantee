import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/logo.svg'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'

const Footer = () => {
	return (
		<footer className='p-10 text-center md:text-left bg-gray-700'>
			<section className='w-full max-w-5xl mx-auto'>
				<div className='flex justify-between flex-col lg:flex-row lg:space-x-16'>
					<div className='flex flex-col'>
						<h4 className='text-lg font-bold py-2 uppercase text-gray-500 tracking-wide'>
							A Program to change your career
						</h4>
						<Link href='/WebDevelopmentCourse'>
							<a className='text-white font-bold text-lg pb-1'>
								Full Stack Development
							</a>
						</Link>
					</div>
					<div className='flex flex-col'>
						<h4 className='text-lg font-bold py-2 uppercase text-gray-500 tracking-wide'>
							Menu
						</h4>
						<Link href='/'>
							<a className='text-white font-bold text-lg pb-1'>Home</a>
						</Link>
						<Link href='/HowItWorks'>
							<a className='text-white font-bold text-lg pb-1'>How it Works</a>
						</Link>
						<Link href='/WebDevelopmentCourse'>
							<a className='text-white font-bold text-lg pb-1'>
								Web Development Course
							</a>
						</Link>
						<Link href='/WebDevCurriculum'>
							<a className='text-white font-bold text-lg pb-1'>
								Course Curriculum
							</a>
						</Link>
						<Link href='/ContactUs'>
							<a className='text-white font-bold text-lg pb-1'>Contact Us</a>
						</Link>
						<Link href='/Faq'>
							<a className='text-white font-bold text-lg pb-1'>FAQ</a>
						</Link>
					</div>

					<article className='flex flex-col lg:justify-around'>
						<div className='pt-4'>
							<Image src={Logo} alt='logo' />
						</div>
						<article className='flex justify-center mt-4 lg:mt-0 space-x-4 text-white'>
							<Link href='#'>
								<a className='text-2xl uppercase  border-white font-bold tracking-tight'>
									<FaFacebookSquare />
								</a>
							</Link>
							<Link href='#'>
								<a className='text-2xl uppercase  border-white font-bold tracking-tight'>
									<FaTwitter />
								</a>
							</Link>
							<Link href='#'>
								<a className='text-2xl uppercase  border-white font-bold tracking-tight'>
									<FaInstagram />
								</a>
							</Link>
							<Link href='#'>
								<a className='text-2xl uppercase  border-white font-bold tracking-tight'>
									<FaYoutube />
								</a>
							</Link>
						</article>
					</article>
				</div>
			</section>
		</footer>
	)
}

export default Footer
