import Head from 'next/head'
import Companies from '../components/Companies'
import Curriculum from '../components/Curriculum'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Programmes from '../components/Programmes'
import ButtonOutline from '../components/ButtonOutline'
import FrequentQuestions from '../components/FrequentQuestions'
import HeroImg from '../public/hero.svg'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Job Guarantee</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<section
					className='md:h-2xl relative md:after:bg-purple-900 after:w-full md:after:h-[110%] 
				md:after:absolute md:after:top-0 md:after:left-0 md:after:z-0'
				>
					<div className='relative z-10 bg-purple-900 md:bg-transparent pb-8'>
						<Navbar />
						<Hero
							grid
							button={
								<ButtonOutline
									text='Find the right program for you'
									border='border-white'
								/>
							}
							heading='Build a career you love'
							text={
								<p className='text-3xl font-bold tracking-tight mb-4'>
									Become a Fullstack Web Developer from Scratch.
								</p>
							}
							image={HeroImg}
							imgWidth={512}
							imgHeight={520}
						/>
					</div>
					<Companies />
					<Programmes />
					<Curriculum />
					<FrequentQuestions />
					<Footer />
				</section>
			</main>
		</div>
	)
}
