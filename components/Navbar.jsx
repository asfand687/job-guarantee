import { useState } from 'react'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'

const Navbar = () => {
	const [showDrawer, setShowDrawer] = useState(false)
	return (
		<nav className='px-4'>
			<div className='w-full lg:max-w-7xl p-4 mx-auto flex items-center justify-between text-white'>
				<div className='flex items-center'>
					<div className='pr-8 text-2xl font-bold font-mono'>Job Guarantee</div>
					<ul className='hidden lg:flex space-x-8'>
						<li>
							<a href='#'>Courses</a>
						</li>
						<li>
							<a href='#'>How it works</a>
						</li>
						<li>
							<a href='#'>Meet our mentors</a>
						</li>
						<li>
							<a href='#'>Graduate outcomes</a>
						</li>
						<li>
							<a href='#'>Online events</a>
						</li>
						<li>
							<a href='#'>Blog</a>
						</li>
					</ul>
					<ul
						className={`fixed h-screen w-72 bg-white shadow-2xl pt-4 px-4  top-0 left-0 transform ${
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
								<Link href='#'>
									<a>Courses</a>
								</Link>
							</li>
							<li className='border-b border-gray-400 pl-2 pb-2'>
								<Link href='#'>
									<a>How it works</a>
								</Link>
							</li>
							<li className='border-b border-gray-400 pl-2 pb-2'>
								<Link href='#'>
									<a>Meet our mentors</a>
								</Link>
							</li>
							<li className='border-b border-gray-400 pl-2 pb-2'>
								<Link href='#'>
									<a>Graduate outcomes</a>
								</Link>
							</li>
							<li className='border-b border-gray-400 pl-2 pb-2'>
								<Link href='#'>
									<a>Online events</a>
								</Link>
							</li>
							<li className='border-b border-gray-400 pl-2 pb-2'>
								<Link href='#'>
									<a>Blog</a>
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
