import Link from 'next/link'
import Image from 'next/image'
import { HiOutlineShieldCheck } from 'react-icons/hi'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { HiOutlineShare } from 'react-icons/hi'
import HeroImg from '../public/hero.svg'

const Hero = () => {
	return (
		<section className='w-9/12 mx-auto flex justify-between relative'>
			<article className='w-1/2 pt-28 text-white'>
				<h2 className='text-5xl font-extrabold pb-6'>
					Build a career you love
				</h2>
				<h3 className='text-3xl font-bold tracking-tight mb-4'>
					Become a UX designer, UI designer, web <br /> developer, or data
					analyst from scratch
				</h3>
				<Link href='#'>
					<a className='border-2 border-white p-3 inline-block rounded-md'>
						Find the right program for you
					</a>
				</Link>
			</article>
			<article className='w-1/2'>
				<Image src={HeroImg} width={512} height={580} />
			</article>
			<article
				className='absolute bg-white w-4xl p-8 shadow-xl flex justify-end space-x-12 rounded-sm'
				style={{ bottom: '0px' }}
			>
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
