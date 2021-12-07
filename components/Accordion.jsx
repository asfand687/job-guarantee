import { useState } from 'react'
import { FaRegArrowAltCircleDown } from 'react-icons/fa'
function Accordion({ title, content }) {
	const [isActive, setIsActive] = useState(false)
	return (
		<div onClick={() => setIsActive(!isActive)} className='pt-4 space-y-2'>
			<div className='border-b border-gray-300'>
				<div className='flex items-center justify-between cursor-pointer px-4 pb-2 text-gray-700'>
					<div className='text-lg  font-semibold tracking-tight'>{title}</div>
					<div
						className={`${
							isActive ? 'rotate-180' : 'rotate-0'
						} transition-all ease-in duration-200 text-lg`}
					>
						<FaRegArrowAltCircleDown />
					</div>
				</div>
				{isActive && <div className='mt-2 p-4 bg-gray-100'>{content}</div>}
			</div>
		</div>
	)
}

export default Accordion
