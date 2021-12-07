import Head from 'next/head'
import Image from 'next/image'
import FrequentQuestions from '../components/FrequentQuestions'
import Navbar from '../components/Navbar'
import FaqImg from '../public/faq.svg'
import FaqImg2 from '../public/faqimg-2.svg'

function Faq() {
	return (
		<div>
			<Head>
				<title>Job Guarantee | FAQs</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<section className='bg-purple-900'>
					<div className='relative z-10 py-4 md:py-2 transparent'>
						<Navbar />
						<article className='text-white w-full flex justify-around px-4 mx-auto max-w-[1240px] text-center'>
							<Image src={FaqImg} alt='FAQ' width={450} height={450} />
							<div className='hidden md:block'>
								<Image src={FaqImg2} alt='FAQ2' width={450} height={450} />
							</div>
						</article>
					</div>
				</section>
				<FrequentQuestions />
			</main>
		</div>
	)
}

export default Faq
