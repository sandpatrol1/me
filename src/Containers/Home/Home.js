import React from 'react';
import styles from './Home.module.css';

const home = () => {
	return (
		<React.Fragment>
			<div>
				<h1>Michel Jørgensen</h1>
				<h3 className={styles.HomeH3}>
					Father | Husband | Agile Coach | React | JavaScript | Scrum Master | Web Development | Heavy Metal |
					History | Motorcycles | Meditation | Cooking | Seafood | Copenhagen
				</h3>
			</div>
		</React.Fragment>
	);
};

export default home;
