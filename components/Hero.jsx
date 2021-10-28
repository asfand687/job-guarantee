import Link from 'next/link'
import Image from 'next/image'
import { HiOutlineShieldCheck } from 'react-icons/hi'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { HiOutlineShare } from 'react-icons/hi'
import HeroImg from '../public/hero.svg'
import ButtonOutline from './ButtonOutline'

const Hero = () => {
	return (
		<section>
			<div className='w-9/12 mx-auto flex flex-col lg:flex-row justify-between'>
				<article className='flex-1 pt-28 text-white'>
					<h2 className='text-5xl font-extrabold pb-6'>
						Build a career you love
					</h2>
					<h3 className='text-3xl font-bold tracking-tight mb-4'>
						Become a UX designer, UI designer, web <br /> developer, or data
						analyst from scratch
					</h3>
					<ButtonOutline
						text='Find the right program for you'
						border='border-white'
					/>
				</article>
				<article className='flex-1 hidden lg:block'>
					<Image src={HeroImg} width={512} height={520} />
				</article>
			</div>
			<article className='hidden bg-white w-4xl mx-auto p-8 shadow-xl lg:flex justify-end space-x-12 rounded-sm'>
				<div className='flex items-center'>
					<HiOutlineDesktopComputer size={'50px'} color={'#333'} />
					<div className='pl-4 text-xl'>
						<h3 className='font-medium text-gray-600 tracking-tight'>
							Learn Online
						</h3>
						<p className='font-light'>at a flexible pace</p>
					</div>
				</div>
				<div className='flex items-center'>
					<HiOutlineShare size={'50px'} color={'#333'} />
					<div className='pl-4 text-xl'>
						<h3 className='font-medium text-gray-600 tracking-tight'>
							Work with expert mentors
						</h3>
						<p className='font-light'>and build your portfolio</p>
					</div>
				</div>
				<div className='flex items-center'>
					<HiOutlineShieldCheck size={'50px'} color={'#333'} />
					<div className='pl-4 text-xl'>
						<h3 className='font-medium text-gray-600 tracking-tight'>
							Land a job in tech
						</h3>
						<p className='font-light'>backed by our Job Guarantee</p>
					</div>
				</div>
			</article>
		</section>
	)
}

export default Hero
