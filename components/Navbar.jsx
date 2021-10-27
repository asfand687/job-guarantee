import React from 'react'

const Navbar = () => {
	return (
		<nav className='px-4'>
			<div className='w-9/12 py-4 mx-auto flex items-center justify-between text-white'>
				<div className='flex items-center'>
					<div className='pr-8 text-2xl font-bold font-mono'>Job Guarantee</div>
					<ul className='flex space-x-8'>
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
				</div>
				<div>
					<a href='#'>Login</a>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
