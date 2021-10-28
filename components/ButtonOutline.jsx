import Link from 'next/link'

const ButtonOutline = ({ text, icon, border }) => {
	return (
		<Link href='#'>
			<a
				className={`border-2 ${border} p-3 inline-flex items-center rounded-md`}
			>
				<span className='tracking-tighter text-sm'>{text}</span>{' '}
				{icon ? icon : null}
			</a>
		</Link>
	)
}

export default ButtonOutline
