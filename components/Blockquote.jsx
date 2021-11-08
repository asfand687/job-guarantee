import Link from 'next/link'
import Image from 'next/image'
import { FaRibbon } from 'react-icons/fa'
import { FiArrowRight } from 'react-icons/fi'
import Desk from '../public/desk-transparent.png'
import ButtonOutline from './ButtonOutline'

const Blockquote = ({ width, small }) => {
	return small ? (
		<div
			className={`bg-white rounded-md shadow-2xl ${width} p-4 md:p-12 border-l-8 border-gray-900 block-quote`}
		>
			<article className='flex pb-4 items-center'>
				<FaRibbon size={'50px'} />
				<h2 className='font-bold text-2xl tracking-tight'>Job Guarantee</h2>
			</article>
			<p className='w-full lg:w-3/4'>
				We understand that changing careers is a big step. That's why our
				programs come with a guarantee: you'll get a job within 6 months of
				graduating, or we'll refund the cost of your program.
			</p>
			<Link href='#'>
				<a>Learn More</a>
			</Link>
		</div>
	) : (
		<div
			className={`bg-white rounded-md shadow-2xl ${width} p-4 py-6 md:p-16 border-l-8 border-gray-900 block-quote flex`}
		>
			<article className='flex-1'>
				<h2 className='text-4xl font-bold tracking-tight text-gray-700 pb-4'>
					A fair and accessible <br />{' '}
					<span className='pt-2 inline-block'>Job Guarantee</span>
				</h2>
				<p className='tracking-tight font-light text-lg pb-8'>
					We understand that changing careers is a big step. And we're confident
					you can make it. That's why our programs come with a guarantee. Simply
					put, you'll get a job within 6 months of graduating, or you'll get
					your tuition back.
				</p>
				<ButtonOutline
					text='How does the Job Guarantee work?'
					icon={<FiArrowRight />}
					border='border-gray-700'
				/>
			</article>
			<article className='hidden flex-1 lg:flex items-center h-full'>
				<Image src={Desk} alt='White Desk' />
			</article>
		</div>
	)
}

export default Blockquote
