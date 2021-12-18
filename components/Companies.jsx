import Image from 'next/image'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Olx from '../public/olx.png'
import Cheetay from '../public/cheetay.svg'
import Airlift from '../public/airlift-logo.png'
import Zameen from '../public/zameen.svg'
import ABFA from '../public/abfa-logo.jpg'
import CustomBoxes from '../public/the-custom-boxes-logo.jpg'
import DataMagnetics from '../public/data-magnetics-logo.png'
import Foxtek from '../public/foxtek-logo.jpg'
import Jobbee from '../public/job-bee-logo.png'
import Nextbridge from '../public/next-bridge-logo.png'
import Programmersforce from '../public/programmers-force-logo.png'
import Recen from '../public/recen-logo.png'
import Rozee from '../public/rozee-pk-logo.gif'
import Sunztech from '../public/sunztech-logo.jpg'
import Superiorconnections from '../public/superior-connections-logo.png'

const Companies = () => {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	}
	return (
		<div className='text-center pt-8 flex flex-col items-center'>
			<p className='font-light px-4 text-lg pb-8'>Our recruitment partners</p>
			<div className='w-full px-4 max-w-6xl'>
				<Carousel
					ssr
					responsive={responsive}
					partialVisbile
					itemClass='self-center'
				>
					<Image src={Zameen} width={130} height={65} alt='Zameen' />
					<Image src={Olx} width={130} height={100} alt='Olx' />
					<Image src={Airlift} width={70} height={70} alt='Air Lift' />
					<Image src={Cheetay} width={130} height={35} alt='Cheetay' />
					<Image src={ABFA} width={130} height={35} alt='ABFA' />
					<Image src={CustomBoxes} width={75} height={75} alt='Custom Boxes' />
					<Image
						src={DataMagnetics}
						width={130}
						height={55}
						alt='Data Magnetics'
					/>
					<Image src={Foxtek} width={150} height={55} alt='Foxtek' />
					<Image src={Jobbee} width={160} height={55} alt='Jobbee' />
					<Image src={Nextbridge} width={160} height={95} alt='Next Bridge' />
					<Image
						src={Programmersforce}
						width={160}
						height={55}
						alt='Programmers Force'
					/>
					<Image src={Recen} width={160} height={65} alt='Recen' />
					<Image src={Rozee} width={160} height={65} alt='Rozee' />
					<Image src={Sunztech} width={160} height={65} alt='Sunztech' />
					<Image
						src={Superiorconnections}
						width={180}
						height={95}
						alt='Superior Connections'
					/>
				</Carousel>
			</div>
		</div>
	)
}

export default Companies
