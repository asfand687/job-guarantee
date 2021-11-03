import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			<section>{children}</section>
			<Footer />
		</>
	)
}

export default Layout
