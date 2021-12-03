import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ContactUsHero from '../components/ContactUsHero'

function ContactUs() {
	return (
		<>
			<header className='w-full bg-purple-900 bg-hero-image'>
				<Navbar />
				<ContactUsHero />
			</header>
			<Footer />
		</>
	)
}

export default ContactUs
