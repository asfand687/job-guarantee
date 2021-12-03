import Collapse from 'rc-collapse'
import 'rc-collapse/assets/index.css'
import { faqData } from '../data/data'

function FrequentQuestions() {
	const Panel = Collapse.Panel
	return (
		<section className='w-full max-w-7xl mx-auto mt-8 px-4 pb-12'>
			<h2 className='font-medium text-center pb-6 text-3xl text-gray-600 tracking-tight'>
				Frequently Asked Questions
			</h2>
			<Collapse accordion={true}>
				{faqData.map((item, index) => (
					<Panel key={index} header={item.title}>
						{item.content}
					</Panel>
				))}
			</Collapse>
		</section>
	)
}

export default FrequentQuestions
