import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import { Link } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

const createExperienceShape = (role, start, end) => ({
	role,
	start,
	end
});

const jobs = {
	Wayfair: {
		link: 'https://www.wayfair.com/',
		experience: createExperienceShape('Software Engineer II', 'September 2018', 'Present')
	},
	'SAP Concur': {
		link: 'https://www.concur.com/',
		experience: createExperienceShape('Software Engineer Intern', 'June 2017', 'May 2018')
	}
};

const StepIcon = () => <FontAwesomeIcon icon={faBriefcase} />;

const ContentGroup = ({ role, start, end }) => (
	<Fragment>
		<Typography variant="overline">{role}</Typography>
		<br />
		<Typography variant="caption" color="textSecondary">
			{start}
			{' - '}
			{end}
		</Typography>
	</Fragment>
);

const WorkHistory = () => {
	const companies = Object.keys(jobs);
	return (
		<Stepper orientation="vertical">
			{companies.map((company) => {
				const { link, experience } = jobs[company];
				return (
					<Step active expanded key={company}>
						<StepLabel StepIconComponent={StepIcon}>
							<Link href={link} target="_blank" rel="noreferrer">
								{company}
							</Link>
						</StepLabel>
						<StepContent>
							<ContentGroup {...experience} />
						</StepContent>
					</Step>
				);
			})}
		</Stepper>
	);
};

export default WorkHistory;
