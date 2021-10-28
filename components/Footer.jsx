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
			<section className='w-full max-w-screen-xl mx-auto'>
				<div className='flex flex-col lg:flex-row lg:space-x-16'>
					<article className='flex flex-col'>
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
					</article>
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
					<article className='pt-6 lg:pt-0 flex-1 flex flex-col'>
						<div className='flex items-center space-x-4'>
							<Image
								src={Olivia}
								alt='olivia'
								className='rounded-full'
								width={80}
								height={80}
							/>
							<div className='text-white'>
								<h4 className='font-light text-3xl'>Got questions?</h4>
								<p className='text-lg font-light'>Ask Olivia</p>
							</div>
						</div>
						<textarea
							cols='22'
							rows='5'
							className='rounded-md my-4 p-4'
							placeholder='Hello Olivia! I have a question regarding Job Guarantee courses'
						></textarea>
						<div className='flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4'>
							<input
								type='text'
								placeholder='First Name'
								className='flex-1 py-2 px-4 rounded-md'
							/>
							<input
								type='email'
								placeholder='Email Address'
								className='flex-1 py-2 px-4 rounded-md'
							/>
						</div>
						<div className='py-4'>
							<button className='bg-blue-400 text-white font-bold tracking-tight inline-flex px-8 py-3 rounded-md'>
								Ask Olivia
							</button>
						</div>
					</article>
				</div>
				<div className='w-full flex flex-col lg:flex-row items-center justify-between text-white pt-12'>
					<article className='flex space-x-2 '>
						<Link href='#'>
							<a className='text-xs uppercase border-r-2 border-white pr-1  font-bold tracking-tight'>
								Terms and Conditions
							</a>
						</Link>
						<Link href='#'>
							<a className='text-xs uppercase border-r-2 border-white pr-1  font-bold tracking-tight'>
								Privacy Policy
							</a>
						</Link>
						<Link href='#'>
							<a className='text-xs uppercase border-r-2 border-white pr-1  font-bold tracking-tight'>
								Imprint
							</a>
						</Link>
						<Link href='#'>
							<a className='text-xs uppercase border-r-2 border-white pr-1  font-bold tracking-tight'>
								Security
							</a>
						</Link>
					</article>
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
