import React from 'react';
import styles from './Contact.module.css';

const contact = () => (
	<div className={styles.Contact}>
		<h1>Contact</h1>
		<a href="https://www.linkedin.com/in/micheljorgensen/" target="_blank" rel="noopener noreferrer">
			<span className={styles.Icon}>
				<i className="fab fa-linkedin" />
			</span>
			LinkedIn
		</a>
		<a href="https://github.com/sandpatrol1" target="_blank" rel="noopener noreferrer">
			<span className={styles.Icon}>
				<i className="fab fa-github" />
			</span>
			GitHub
		</a>
	</div>
);

export default contact;
