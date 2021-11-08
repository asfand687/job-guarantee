import React from 'react'

const GridHeading = ({ text, big, textLight }) => {
	return (
		<h2
			className={`${textLight ? 'font-light' : 'font-bold'} ${
				big ? 'text-4xl' : 'text-3xl'
			} tracking-tight`}
		>
			{text}
		</h2>
	)
}

export default GridHeading
