import React from 'react'
import TeamCard from './TeamCard'
import Team1 from '../public/member-1.png'
import { teamData } from '../data/data'

const TeamSection = () => {
	return (
		<section className='w-full px-4 max-w-[1200px] mx-auto py-10  text-gray-700'>
			<header className='p-4 text-center'>
				<h2 className='text-3xl font-semibold'>Our Team</h2>
				<p className='text-lg py-4'>
					The most qualified and talented individuals
				</p>
			</header>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
				{teamData.map((item) => (
					<TeamCard
						key={item.id}
						image={item.imgSrc}
						title={item.altText}
						designation={item.designation}
						social={item.socialProfile}
					/>
				))}
			</div>
		</section>
	)
}

export default TeamSection
