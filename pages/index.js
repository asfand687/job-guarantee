import Head from 'next/head'
import Companies from '../components/Companies'
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
				<section className='h-2xl bg-purple-900'>
					<Navbar />
					<Hero />
					<Companies />
					<Programmes />
				</section>
			</main>
		</div>
	)
}
