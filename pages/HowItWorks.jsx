import React from 'react'
import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Programmer from '../public/programmer.jpg'
import Timeline from '../components/Timeline'
import OurCurriculum from '../components/OurCurriculum'
import JobGuarantee from '../components/JobGuarantee'
import RightForYou from '../components/RightForYou'

const HowItWorks = () => {
	return (
		<div>
			<Head>
				<title>Job Guarantee | How it works</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<section className='relative after:bg-purple-900 after:w-full after:h-2xl after:absolute after:top-0 after:left-0 after:z-0'>
					<div className='relative z-10'>
						<Navbar />
						<Hero
							heading='How it works'
							text={
								<p className='text-2xl font-light tracking-tight mb-4 lg:pr-8'>
									Whether you're forging a career in UX design, UI design, web
									development, or data analytics - here's how a Job Guarantee
									program will kickstart your caree-change journey.
								</p>
							}
							image={Programmer}
							imgWidth={530}
							imgHeight={570}
							imgRounded
						/>
					</div>
					<Timeline />
					<OurCurriculum />
					<JobGuarantee />
					<RightForYou />
					<Footer />
				</section>
			</main>
		</div>
	)
}

export default HowItWorks
