import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const TeamCard = ({ image, title, designation, social }) => {
	return (
		<div className='flex flex-col w-full md:max-w-[300px] text-center text-gray-700 items-center p-8 transition ease-in-out duration-300 rounded-lg bg-white shadow-xl'>
			<div className='w-20 h-20 rounded-full my-6'>
				<Image
					className='object-cover border-2 border-gray-700'
					src={image}
					alt='Team Member'
				/>
			</div>
			<div className='space-y-4'>
				<h2 className='text-lg font-semibold'>{title}</h2>
				<p>{designation}</p>
				<div className='flex w-[80%] mx-auto justify-between'>
					{social.map((item) => (
						<Link key={item.id} href={item.path}>
							{item.icon}
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}

export default TeamCard
