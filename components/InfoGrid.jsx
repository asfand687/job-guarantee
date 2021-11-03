import React from 'react'

const InfoGrid = ({ data }) => {
	return (
		<article className='hidden bg-white w-4xl mx-auto p-8 shadow-xl lg:flex justify-end space-x-12 rounded-sm'>
			{data.map((item) => (
				<div key={data.id} className='flex items-center'>
					{item.icon}
					<div className='pl-4 text-xl'>
						<h3 className='font-medium text-gray-600 tracking-tight'>
							{item.heading}
						</h3>
						<p className='font-light'>{item.text}</p>
					</div>
				</div>
			))}
		</article>
	)
}

export default InfoGrid
