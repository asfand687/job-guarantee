import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import WebDevCurriculumHero from '../components/WebDevCurriculumHero'
import WebDevCourseOutline from '../components/WebDevCourseOutline'
import RightForYou from '../components/RightForYou'
import TeamSection from '../components/TeamSection'

const WebDevCurriculum = () => {
	return (
		<div>
			<Head>
				<title>Job Guarantee | Web Development Curriculum</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<nav className='bg-purple-900'>
					<Navbar />
				</nav>
				<WebDevCurriculumHero />
				<WebDevCourseOutline />
				<TeamSection />
				<RightForYou />
				<Footer/>
			</main>
		</div>
	)
}

export default WebDevCurriculum
