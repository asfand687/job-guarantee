import {
	HiOutlineShieldCheck,
	HiOutlineDesktopComputer,
	HiOutlineShare,
} from 'react-icons/hi'
import { MdDeveloperMode } from 'react-icons/md'
import { SiVisualstudiocode } from 'react-icons/si'
import { BiNetworkChart } from 'react-icons/bi'
import { CgWebsite, CgWorkAlt } from 'react-icons/cg'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import Member1 from '../public/member-1.png'
import Member2 from '../public/member-2.png'
import Member3 from '../public/member-3.png'
import Member4 from '../public/member-4.png'
import Member5 from '../public/member-5.png'
import Member6 from '../public/member-6.png'
import Link from 'next/link'

export const homeInfoGrid = [
	{
		id: 1,
		icon: <HiOutlineShieldCheck size={'50px'} color='#333' />,
		heading: 'One on One Learning',
		text: 'at a flexible pace',
	},
	{
		id: 2,
		icon: <HiOutlineDesktopComputer size={'50px'} color='#333' />,
		heading: 'Work with expert mentors',
		text: 'and build your portfolio',
	},
	{
		id: 3,
		icon: <HiOutlineShare size={'50px'} color='#333' />,
		heading: 'Land a job in tech',
		text: 'backed by our Job Guarantee',
	},
]

export const timelineData = [
	{
		id: 1,
		topText: 'Learn for the real world',
		text: 'Our curriculum is designed by a team of experts and learning specialists to teach you the in-demand skills you’ll need on the job.',
		icon: <MdDeveloperMode size={'90px'} />,
		placement: 'left',
	},
	{
		id: 2,
		topText: 'Learn by building',
		text: 'Apply what you learn to hands-on projects that enhance your professional portfolio.',
		icon: <SiVisualstudiocode size={'90px'} />,
		placement: 'right',
	},
	{
		id: 3,
		topText: 'Learn with experts',
		text: 'Get support, feedback, and industry insights from your dedicated mentor and tutor.',
		icon: <BiNetworkChart size={'90px'} />,
		placement: 'left',
	},
	{
		id: 4,
		topText: 'Learn to showcase your best work',
		text: 'Build and refine your professional portfolio with expert guidance from your mentor.',
		icon: <CgWebsite size={'90px'} />,
		placement: 'right',
	},
	{
		id: 5,
		topText: 'Learn how to land the job you want',
		text: 'Work 1:1 with a career specialist to fine-tune your job search and amp up your interview skills.',
		icon: <CgWorkAlt size={'90px'} />,
		placement: 'left',
	},
]

export const jobGuaranteeGridData = [
	{
		id: 1,
		heading: "Get ready to land a job you'll love",
		big: true,
		paragraph:
			"We know that the job hunt can be the most challenging part of a career changer's journey. That's why our career change programs include personalized career coaching and job preparation.",
	},
	{
		id: 2,
		heading: 'Job guarantee',
		big: false,
		paragraph:
			"Land a job within six months of graduation or we'll refund your full tuition.",
	},
	{
		id: 3,
		heading: 'Job preparation',
		big: false,
		paragraph:
			'Every career change program includes our Job Preparation Course, which walks you through our proven strategies to succeed in your job hunt.',
	},
	{
		id: 4,
		heading: 'Personalized career coaching',
		big: false,
		paragraph:
			"Work 1:1 with a career specialist who knows the art of the job search and the job market in your area. They'll help you refine your job search strategy and application materials to ensure you stand out from the crowd.",
	},
]

export const whyWebDevelopmentGridData = [
	{
		id: 1,
		heading: 'Why become a web developer?',
		big: true,
		paragraph: false,
	},
	{
		id: 2,
		heading: "A job you'll love",
		big: false,
		paragraph:
			"As a web developer, you have the satisfaction of solving complex problems and turning your ideas into reality with just your laptop. Web development was rated in Career Karma's top 25 tech jobs in 2021.",
	},
	{
		id: 3,
		heading: 'High demand means high pay',
		big: false,
		paragraph:
			'Employers struggle to find qualified web developers, and the demand keeps growing. The average developer salary in the United States is $75,773—though that will vary depending on seniority and location.',
	},
	{
		id: 4,
		heading: 'A flexible career path',
		big: false,
		paragraph:
			'As a web developer, you will have the opportunity to work for startups, agencies, large corporates, on a freelance basis, or even remotely.',
	},
]

export const whyJobGuaranteeGridData = [
	{
		id: 1,
		heading: 'Why choose Job Guarantee?',
		big: true,
		textLight: false,
		paragraph: false,
	},
	{
		id: 2,
		big: false,
		textLight: true,
		paragraph:
			'Our model ensures that you get all the support you need. You’ll have both a tutor-an experienced web developer responsible for evaluating your exercises, and a mentor-a web development industry expert who have a detailed One on One session with you.',
	},

	{
		id: 4,
		heading: 'Successful, satisfied graduates',
		big: false,
		textLight: true,
		paragraph:
			'With 96% of our eligible alumni getting a tech job within 180 days of graduation at top companies including Google, Apple, and Amazon, you can be confident that taking the program will get you where you want to go—working as a web developer in a job you love.',
	},
]

export const teamData = [
	{
		id: 1,
		imgSrc: Member1,
		altText: 'Saimon Harmer',
		title: 'Saimon Harmer',
		designation: 'CEO and Founder',
		socialProfile: [
			{
				id: 1,
				name: 'facebook',
				path: '#',
				icon: <FaFacebookF />,
			},
			{
				id: 2,
				name: 'twitter',
				path: '#',
				icon: <FaTwitter />,
			},
			{
				id: 3,
				name: 'instagram',
				path: '#',
				icon: <FaInstagram />,
			},
		],
	},
	{
		id: 2,
		imgSrc: Member2,
		altText: 'Aaron Nunez',
		title: 'Aaron Nunez',
		designation: 'Founder',
		socialProfile: [
			{
				id: 1,
				name: 'facebook',
				path: '#',
				icon: <FaFacebookF />,
			},
			{
				id: 2,
				name: 'twitter',
				path: '#',
				icon: <FaTwitter />,
			},
			{
				id: 3,
				name: 'instagram',
				path: '#',
				icon: <FaInstagram />,
			},
		],
	},
	{
		id: 3,
		imgSrc: Member3,
		altText: 'Aaron Nunez',
		title: 'Aaron Nunez',
		designation: 'Web Designer',
		socialProfile: [
			{
				id: 1,
				name: 'facebook',
				path: '#',
				icon: <FaFacebookF />,
			},
			{
				id: 2,
				name: 'twitter',
				path: '#',
				icon: <FaTwitter />,
			},
			{
				id: 3,
				name: 'instagram',
				path: '#',
				icon: <FaInstagram />,
			},
		],
	},
	{
		id: 4,
		imgSrc: Member4,
		altText: 'Lina Jutila',
		title: 'Lina Jutila',
		designation: 'Web Developer',
		socialProfile: [
			{
				id: 1,
				name: 'facebook',
				path: '#',
				icon: <FaFacebookF />,
			},
			{
				id: 2,
				name: 'twitter',
				path: '#',
				icon: <FaTwitter />,
			},
			{
				id: 3,
				name: 'instagram',
				path: '#',
				icon: <FaInstagram />,
			},
		],
	},
	{
		id: 5,
		imgSrc: Member5,
		altText: 'Saimon Harmer',
		title: 'Saimon Harmer',
		designation: 'CEO and Founder',
		socialProfile: [
			{
				id: 1,
				name: 'facebook',
				path: '#',
				icon: <FaFacebookF />,
			},
			{
				id: 2,
				name: 'twitter',
				path: '#',
				icon: <FaTwitter />,
			},
			{
				id: 3,
				name: 'instagram',
				path: '#',
				icon: <FaInstagram />,
			},
		],
	},
	{
		id: 6,
		imgSrc: Member6,
		altText: 'Aaron Nunez',
		title: 'Aaron Nunez',
		designation: 'Web Designer',
		socialProfile: [
			{
				id: 1,
				name: 'facebook',
				path: '#',
				icon: <FaFacebookF />,
			},
			{
				id: 2,
				name: 'twitter',
				path: '#',
				icon: <FaTwitter />,
			},
			{
				id: 3,
				name: 'instagram',
				path: '#',
				icon: <FaInstagram />,
			},
		],
	},
]

export const faqData = [
	{
		title: 'Are there payment plans available?',
		content: `Yes, we offer two payment options. You can save 5% of your total tuition by paying it upfront. Alternatively, you can pay a set amount upfront to reserve your place in the program, and the remainder in 3 monthly payments.
		Still not feasible for you? Book a call with a program advisor to see if you’re eligible for a customized payment plan.
		`,
	},
	{
		title: 'Does Job guarantee offer full or partial scholarships?',
		content:
			'Currently, we do not offer any full scholarships or funds at this time.',
	},
	{
		title: 'Are there eligibility requirements for the job guarantee?',
		content: (
			<>
				<p>
					There are conditions that graduates need to meet to be eligible for
					the job guarantee. We’re transparent about these requirements because
					we want them to be easy for you to follow and because we know they
					genuinely. help graduates succeed in their job search.
				</p>
				<p>You’re eligible for the job guarantee when:</p>
				<ul className='leading-7 list-disc pl-6'>
					<li className='ml-4'>
						You’ve completed a 100% Web development program
					</li>
					<li className='ml-4'>
						You’re applying to at least five relevant jobs a week.
					</li>
				</ul>
			</>
		),
	},
	{
		title: 'Is the program 100% online?',
		content: 'No, the program is entirely on-campus.',
	},
	{
		title: 'Do I get a certificate at the end?',
		content:
			'Yes, you will receive a certificate when you complete the program. ',
	},
	{
		title: 'What kind of job can I get after the program?',
		content: (
			<>
				<ul>
					<p>
						<strong>
							Based on the program’s comprehensive curriculum, you’ll be ready
							to apply for these roles:
						</strong>
					</p>
					<ul className='list-disc ml-8 mt-2'>
						<li>Junior web developer</li>
						<li>Web Developer</li>
						<li>Frontend Developer</li>
						<li>Full-stack Developer</li>
					</ul>
				</ul>
			</>
		),
	},
	{
		title: 'How long does the program take to complete',
		content: 'The program can be completed within a 3-month duration. ',
	},
	{
		title: 'Is Web Development is a secure career choice?',
		content: (
			<p>
				Yes, Web Development is a burgeoning field with a large number of
				opportunites available if you are skilled.
				<Link href='https://careerfoundry.com/en/blog/web-development/what-does-it-take-to-become-a-web-developer-everything-you-need-to-know-before-getting-started/#is-now-a-good-time-to-become-a-web-developer-2021-update'>
					<a
						target='_blank'
						className='font-bold text-blue-500 uppercase hover:opacity-80'
					>
						{' '}
						Learn More
					</a>
				</Link>
			</p>
		),
	},
]
