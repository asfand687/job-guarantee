import React from 'react'
import { BsPencil } from 'react-icons/bs'
import { MdLibraryBooks } from 'react-icons/md'

const OurCurriculum = () => {
	return (
		<section className='bg-gray-200 py-20'>
			<h2 className='text-gray-700 text-4xl font-semibold tracking-tight text-center pb-8'>
				Our Curriculum
			</h2>
			<div className='w-full max-w-[1040px] px-4 lg:p-0 mx-auto flex flex-col items-center space-y-10 lg:space-y-0 lg:flex-row lg:space-x-6'>
				<article className='w-full max-w-[530px] rounded p-12 pb-16 bg-white shadow-lg border-b-8 border-[#968aff]'>
					<BsPencil className='text-3xl text-[#968aff] transform -rotate-90' />
					<h3 className='py-4 font-bold text-3xl tracking-tight text-gray-700'>
						Written by experts
					</h3>
					<p className='text-lg font-thin leading-6'>
						Our instructional designers and editors work together with seasoned
						and skilled practitioners to create learning materials and project
						briefs that equip you with the industry knowledge and skills that
						will get you hired.
					</p>
				</article>
				<article className='w-full max-w-[530px] rounded p-12 pb-16 bg-white shadow-lg border-b-8 border-[#ebd13d]'>
					<MdLibraryBooks className='text-3xl text-[#ebd13d]' />
					<h3 className='py-4 font-bold text-3xl tracking-tight text-gray-700'>
						Continually updated content
					</h3>
					<p className='text-lg font-thin leading-6'>
						We update our curriculum regularly to ensure that it's in sync with
						the industry. We identify the most in-demand knowledge and skills,
						then develop learning materials and projects to ensure that you’re
						job-ready.
					</p>
				</article>
			</div>
		</section>
	)
}

export default OurCurriculum
