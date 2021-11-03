import { HiOutlineShieldCheck } from 'react-icons/hi'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { HiOutlineShare } from 'react-icons/hi'
import { MdDeveloperMode } from 'react-icons/md'
import { SiVisualstudiocode } from 'react-icons/si'
import { BiNetworkChart } from 'react-icons/bi'
import { CgWebsite } from 'react-icons/cg'
import { CgWorkAlt } from 'react-icons/cg'

export const homeInfoGrid = [
	{
		id: 1,
		icon: <HiOutlineShieldCheck size={'50px'} color='#333' />,
		heading: 'Learn Online',
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
