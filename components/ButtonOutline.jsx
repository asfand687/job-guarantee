import Link from 'next/link'

const ButtonOutline = ({
	text,
	icon,
	border = '',
	bg = '',
	full,
	path = '#',
}) => {
	return (
		<Link href={path}>
			<a
				className={`border-2 ${border} ${bg} ${
					full ? 'w-full' : ''
				} py-2 px-3 inline-flex space-x-1 justify-center items-center rounded-md`}
			>
				<span className='tracking-tighter text-[0.95rem] whitespace-nowrap lg:text-xl'>
					{text}
				</span>{' '}
				{icon ? icon : null}
			</a>
		</Link>
	)
}

export default ButtonOutline
