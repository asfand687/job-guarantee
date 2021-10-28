import Image from 'next/image'
import AmazonLogo from '../public/amazon.png'
import BookingLogo from '../public/booking.png'
import EbayLogo from '../public/ebay.png'
import FacebookLogo from '../public/facebook.png'
import GoogleLogo from '../public/google.png'
import NetflixLogo from '../public/netflix.png'
import PaypalLogo from '../public/paypal.png'
import VisaLogo from '../public/visa.png'

const Companies = () => {
	return (
		<div className='text-center pt-24 flex flex-col items-center'>
			<p className='font-light text-lg pb-8'>
				Our graduates now have tech jobs all over the world
			</p>
			<div className='w-9/12 flex items-center justify-around space-x-4'>
				<article className='filter grayscale'>
					<Image src={AmazonLogo} width={130} height={40} alt='Amazon' />
				</article>

				<article className='filter grayscale'>
					<Image src={EbayLogo} width={130} height={60} alt='Ebay' />
				</article>
				<article className='filter grayscale'>
					<Image src={GoogleLogo} width={130} height={45} alt='Google' />
				</article>
				<article className='filter grayscale'>
					<Image src={NetflixLogo} width={130} height={35} alt='Netflix' />
				</article>
				<article className='filter grayscale'>
					<Image src={PaypalLogo} width={130} height={35} alt='Paypal' />
				</article>
				<article className='filter grayscale'>
					<Image src={VisaLogo} width={130} height={35} alt='Visa' />
				</article>
			</div>
		</div>
	)
}

export default Companies
