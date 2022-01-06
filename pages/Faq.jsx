import Head from 'next/head'
import Image from 'next/image'
import FrequentQuestions from '../components/FrequentQuestions'
import Navbar from '../components/Navbar'

function Faq() {
	return (
		<div>
			<Head>
				<title>Job Guarantee | FAQs</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<section className='bg-purple-900'>
					<div className='relative z-10  '>
						<Navbar />
						<div className='w-full faq-hero h-[60vh]'></div>
					</div>
				</section>
				<FrequentQuestions />
			</main>
		</div>
	)
}

export default Faq
