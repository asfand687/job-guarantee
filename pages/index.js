import Head from 'next/head'
import Companies from '../components/Companies'
import Curriculum from '../components/Curriculum'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Programmes from '../components/Programmes'
import ButtonOutline from '../components/ButtonOutline'
import HeroImg from '../public/hero.svg'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Job Guarantee</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<section className='h-2xl relative after:bg-purple-900 after:w-full after:h-[95vh] after:absolute after:top-0 after:left-0 after:z-0'>
					<div className='relative z-10'>
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
									Become a UX designer, UI designer, web <br /> developer, or
									data analyst from scratch
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
					<Footer />
				</section>
			</main>
		</div>
	)
}
