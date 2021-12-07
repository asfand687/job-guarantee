import Image from 'next/image'
import Olx from '../public/olx.png'
import Cheetay from '../public/cheetay.svg'
import Airlift from '../public/airlift-logo.png'
import Zameen from '../public/zameen.svg'

const Companies = () => {
	return (
		<div className='text-center pt-8 flex flex-col items-center'>
			<p className='font-light px-4 text-lg pb-8'>Our recruitment partners</p>
			<div className='w-full px-4 max-w-6xl flex items-center justify-around'>
				<article>
					<Image src={Zameen} width={130} height={65} alt='Zameen' />
				</article>

				<article>
					<Image src={Olx} width={130} height={100} alt='Olx' />
				</article>
				<article>
					<Image src={Airlift} width={70} height={70} alt='Air Lift' />
				</article>
				<article>
					<Image src={Cheetay} width={130} height={35} alt='Netflix' />
				</article>
			</div>
		</div>
	)
}

export default Companies
