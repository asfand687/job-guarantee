import { FaMobileAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa'
import Image from 'next/image'
import ContactUs from '../public/contactus.svg'

function ContactUsHero() {
	return (
		<section>
			<h2 className='text-white text-4xl font-medium tracking-wider uppercase text-center py-8'>
				Contact Us
			</h2>
			<div className='w-full lg:max-w-[70rem] text-center space-y-8 lg:space-y-0 p-4 mx-auto flex justify-between flex-col items-center lg:items-start lg:flex-row lg:space-x-6'>
				<article className='text-white tracking-wider space-y-4 flex-1 flex flex-col items-center max-w-[300px]'>
					<FaMobileAlt size={60} />
					<h2 className='text-light text-3xl'>Contact Us</h2>
					<a href='tel:0300-8496861'>+92 0300 8496861</a>
					<a href='tel:0318-4339109'>+92 318 4339109</a>
				</article>
				<article className='text-white space-y-4  flex-1 flex flex-col items-center max-w-[300px]'>
					<FaMapMarkerAlt size={60} />
					<h2 className='text-light text-3xl tracking-wider'>Come see us</h2>
				</article>
				<article className='text-white space-y-4 flex-1 flex flex-col items-center max-w-[300px]'>
					<FaClock size={60} />
					<h2 className='text-light text-3xl tracking-wider'>24/7 support</h2>
					<p>Plese fill the form below.</p>
				</article>
			</div>
			<div className='bg-[#f1faee]'>
				<div className='w-full lg:max-w-[70rem] mx-auto flex flex-col lg:flex-row items-center'>
					<article className='w-full flex-1 flex flex-col items-center px-8 py-4 order-2 lg:order-1'>
						<h2 className='text-center font-medium text-4xl my-4 text-[#3d405b]'>
							Email Us
						</h2>
						<div class='w-full'>
							<form className='bg-white shadow-md rounded p-8 mb-4'>
								<div className='mb-4'>
									<label
										className='block text-gray-700 text-sm font-bold mb-2'
										for='name'
									>
										Name
									</label>
									<input
										className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
										id='name'
										type='text'
										placeholder='Name'
									/>
								</div>

								<div className='mb-4'>
									<label
										className='block text-gray-700 text-sm font-bold mb-2'
										for='email'
									>
										Email
									</label>
									<input
										className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
										id='email'
										type='email'
										placeholder='Email'
									/>
								</div>

								<div className='mb-4'>
									<label
										className='block text-gray-700 text-sm font-bold mb-2'
										for='subject'
									>
										Subject
									</label>
									<input
										className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
										id='subject'
										type='text'
										placeholder='Subject'
									/>
								</div>

								<div className='mb-4'>
									<label
										className='block text-gray-700 text-sm font-bold mb-2'
										for='details'
									>
										Details
									</label>
									<textarea
										id='details'
										cols='22'
										rows='5'
										className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
										placeholder='Hello! I have a question regarding Job Guarantee courses'
									></textarea>
								</div>

								<div className='flex flex-row-reverse items-center justify-between'>
									<button
										className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
										type='button'
									>
										Submit
									</button>
								</div>
							</form>
						</div>
					</article>
					<article className='order-1 lg:order-2'>
						<Image src={ContactUs} alt='Contact Us' width={400} height={500} />
					</article>
				</div>
			</div>
		</section>
	)
}

export default ContactUsHero
