import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/logo.svg'
import { FaBars } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'

const Navbar = () => {
	const [showDrawer, setShowDrawer] = useState(false)
	return (
		<nav className='px-4'>
			<div className='w-full lg:max-w-7xl p-4 mx-auto flex items-center justify-between text-white'>
				<div className='flex items-center'>
					<div className='pr-8 text-2xl font-bold font-mono'>
						<Link href='/'>
							<a>
								<Image src={Logo} width={130} height={60} alt='Logo Image' />
							</a>
						</Link>
					</div>
					<ul className='hidden lg:flex space-x-8'>
						<li>
							<Link href='/HowItWorks'>
								<a>How it works</a>
							</Link>
						</li>
						<li>
							<Link href='/WebDevelopmentCourse'>Web Development Course</Link>
						</li>
						<li>
							<Link href='/WebDevCurriculum'>
								<a>Web Development Curriculum</a>
							</Link>
						</li>
						<li>
							<Link href='/ContactUs'>
								<a>Contact Us</a>
							</Link>
						</li>
					</ul>
					<ul
						className={`fixed h-screen w-72 bg-white shadow-2xl pt-4 px-4 top-0 left-0 z-[1000] transform ${
							showDrawer ? 'translate-x-0' : '-translate-x-full'
						} z-20 lg:hidden transition-all duration-300 ease-linear tex-gray-800`}
					>
						<header className='flex justify-end'>
							<div
								onClick={() => setShowDrawer(!showDrawer)}
								className='cursor-pointer'
							>
								<FaTimes size={20} color={'#333'} />
							</div>
						</header>
						<div className='text-gray-800 space-y-6 uppercase font-bold pt-4'>
							<li className='border-b border-gray-400 pl-2 pb-2'>
								<Link href='/'>
									<a>Home</a>
								</Link>
							</li>
							<li className='border-b border-gray-400 pl-2 pb-2'>
								<Link href='/HowItWorks'>
									<a>How it works</a>
								</Link>
							</li>
							<li className='border-b border-gray-400 pl-2 pb-2'>
								<Link href='/WebDevelopmentCourse'>Web Development Course</Link>
							</li>
							<li className='border-b border-gray-400 pl-2 pb-2'>
								<Link href='/WebDevCurriculum'>
									<a>Web Development Curriculum</a>
								</Link>
							</li>
							<li className='border-b border-gray-400 pl-2 pb-2'>
								<Link href='/ContactUs'>
									<a>Contact Us</a>
								</Link>
							</li>
						</div>
					</ul>
				</div>
				<div className='flex items-center space-x-4 lg:block'>
					<Link href='#'>
						<a>Login</a>
					</Link>
					<div className='lg:hidden cursor-pointer'>
						<div onClick={() => setShowDrawer(!showDrawer)}>
							<FaBars size={25} />
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
