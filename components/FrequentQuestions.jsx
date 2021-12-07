import { faqData } from '../data/data'
import Accordion from './Accordion'

function FrequentQuestions() {
	return (
		<section className='w-full max-w-7xl mx-auto mt-8 px-4 pb-12'>
			<h2 className='font-medium text-center pb-6 text-2xl md:text-4xl text-gray-600 tracking-tight'>
				Frequently Asked Questions
			</h2>
			<div className='rounded-md border border-gray-300'>
				{faqData.map((item, index) => (
					<Accordion key={index} title={item.title} content={item.content} />
				))}
			</div>
		</section>
	)
}

export default FrequentQuestions
