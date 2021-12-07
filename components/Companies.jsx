import Image from 'next/image'
import Olx from '../public/olx.png'
import Cheetay from '../public/cheetay.svg'
import Airlift from '../public/air-lift.svg'
import Zameen from '../public/zameen.svg'

const Companies = () => {
	return (
		<div className='text-center pt-8 flex flex-col items-center'>
			<p className='font-light px-4 text-lg pb-8'>
				Our graduates now have tech jobs in top organizations of Pakistan
			</p>
			<div className='w-full px-4 max-w-6xl flex items-center justify-around'>
				<article>
					<Image src={Zameen} width={130} height={65} alt='Zameen' />
				</article>

				<article>
					<Image src={Olx} width={130} height={90} alt='Olx' />
				</article>
				<article>
					<Image src={Airlift} width={130} height={65} alt='Air Lift' />
				</article>
				<article>
					<Image src={Cheetay} width={130} height={35} alt='Netflix' />
				</article>
			</div>
		</div>
	)
}

export default Companies
