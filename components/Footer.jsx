import Link from 'next/link'
import Image from 'next/image'
import Olivia from '../public/olivia.jpg'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'

const Footer = () => {
	return (
		<footer className='p-10 bg-gray-700'>
			<section className='w-full max-w-5xl mx-auto'>
				<div className='flex justify-between flex-col lg:flex-row lg:space-x-16'>
					<div className='flex flex-col'>
						<h4 className='text-xs font-bold py-4 uppercase text-gray-500 tracking-tighter'>
							Programs to change your career
						</h4>
						<Link href='#'>
							<a className='text-white font-bold text-md tracking-tight pb-1'>
								UX Design
							</a>
						</Link>
						<Link href='#'>
							<a className='text-white font-bold text-md tracking-tight pb-1'>
								UI Design
							</a>
						</Link>
						<Link href='#'>
							<a className='text-white font-bold text-md tracking-tight pb-1'>
								Web Development
							</a>
						</Link>
						<Link href='#'>
							<a className='text-white font-bold text-md tracking-tight pb-1'>
								Data Analytics
							</a>
						</Link>
					</div>
					<div className='flex flex-col'>
						<h4 className='text-xs font-bold py-4 uppercase text-gray-500 tracking-tighter'>
							Introductory courses
						</h4>
						<Link href='#'>
							<a className='text-white font-bold text-md tracking-tight pb-1'>
								Intro to UX Design
							</a>
						</Link>
						<Link href='#'>
							<a className='text-white font-bold text-md tracking-tight pb-1'>
								Intro to UI Design
							</a>
						</Link>
						<Link href='#'>
							<a className='text-white font-bold text-md tracking-tight pb-1'>
								Intro to Frontend Development
							</a>
						</Link>
						<Link href='#'>
							<a className='text-white font-bold text-md tracking-tight pb-1'>
								Intro to Data Analytics
							</a>
						</Link>
					</div>
					<div className='flex flex-col'>
						<h4 className='text-xs font-bold py-4 uppercase text-gray-500 tracking-tighter'>
							Advanced courses for designers
						</h4>
						<Link href='#'>
							<a className='text-white font-bold text-md tracking-tight pb-1'>
								Voice User Interface Design
							</a>
						</Link>
						<Link href='#'>
							<a className='text-white font-bold text-md tracking-tight pb-1'>
								UI for UX Designers
							</a>
						</Link>
						<Link href='#'>
							<a className='text-white font-bold text-md tracking-tight pb-1'>
								Frontend Development for Designers
							</a>
						</Link>
					</div>
					<article className='flex flex-col'>
						<h4 className='text-xs font-bold py-4 uppercase text-gray-500 tracking-tighter'>
							Company
						</h4>
						<Link href='#'>
							<a className='text-white font-bold text-md tracking-tight pb-1'>
								About Us
							</a>
						</Link>
						<Link href='#'>
							<a className='text-white font-bold text-md tracking-tight pb-1'>
								Job Guarantee
							</a>
						</Link>
						<Link href='#'>
							<a className='text-white font-bold text-md tracking-tight pb-1'>
								For Business
							</a>
						</Link>
						<Link href='#'>
							<a className='text-white font-bold text-md tracking-tight pb-1'>
								Jobs at JobGuarantee
							</a>
						</Link>
						<Link href='#'>
							<a className='text-white font-bold text-md tracking-tight pb-1'>
								Become a Mentor
							</a>
						</Link>
						<Link href='#'>
							<a className='text-white font-bold text-md tracking-tight pb-1'>
								CareerHub
							</a>
						</Link>
						<Link href='#'>
							<a className='text-white font-bold text-md tracking-tight pb-1'>
								Hire our Grads
							</a>
						</Link>
						<Link href='#'>
							<a className='text-white font-bold text-md tracking-tight pb-1'>
								Career Services
							</a>
						</Link>
					</article>
				</div>
				<div className='w-full flex lg:flex-row-reverse items-center justify-center lg:justify-between text-white pt-12'>
					<article className='flex mt-4 lg:mt-0 space-x-4'>
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
				</div>
			</section>
		</footer>
	)
}

export default Footer
