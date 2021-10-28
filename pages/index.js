import Head from 'next/head'
import Companies from '../components/Companies'
import Curriculum from '../components/Curriculum'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Programmes from '../components/Programmes'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Job Guarantee</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<section className='h-2xl relative after:bg-purple-900 after:w-full after:h-3xl after:absolute after:top-0 after:left-0 after:z-0'>
					<div className='relative z-10'>
						<Navbar />
						<Hero />
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
