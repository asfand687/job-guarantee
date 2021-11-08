import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Programmer from '../public/programmer.jpg'
import Timeline from '../components/Timeline'
import OurCurriculum from '../components/OurCurriculum'
import TextGrid from '../components/TextGrid'
import RightForYou from '../components/RightForYou'
import { jobGuaranteeGridData } from '../data/data'
import Discussion from '../public/discussion.jpg'

const HowItWorks = () => {
	return (
		<div>
			<Head>
				<title>Job Guarantee | How it works</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<section className='relative md:after:bg-purple-900 md:after:w-full md:after:h-[80vh] md:after:absolute md:after:top-0 md:after:left-0 md:after:z-0'>
					<div className='relative z-10 py-4 md:py-2 bg-purple-900 md:bg-transparent'>
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
					<TextGrid
						gridTextData={jobGuaranteeGridData}
						img={<Image className='h-full flex-1' src={Discussion} />}
						small
					/>
					<RightForYou />
					<Footer />
				</section>
			</main>
		</div>
	)
}

export default HowItWorks
