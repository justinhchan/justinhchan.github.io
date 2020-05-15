import React from 'react';
import Box from '@material-ui/core/Box';
import { Link } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const LinkFragments = [
	{
		icon: faGithub,
		link: 'https://github.com/justinhchan/'
	},
	{
		icon: faInstagram,
		link: 'https://www.instagram.com/jchan.jpg/'
	},
	{
		icon: faLinkedinIn,
		link: 'https://www.linkedin.com/in/justinhkchan/'
	}
];

const BottomNav = () => {
	return (
		<Box display="flex" justifyContent="space-around">
			{LinkFragments.map(({ icon, link }) => (
				<Box mx={4} key={link}>
					<Link href={link} target="_blank" rel="noreferrer">
						<FontAwesomeIcon icon={icon} size="lg" />
					</Link>
				</Box>
			))}
		</Box>
	);
};

export default BottomNav;
