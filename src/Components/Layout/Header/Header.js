import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Header.module.css';

const header = () => (
	<nav>
		<ul className={styles.Nav}>
			<li className={styles.NavigationItem}>
				<NavLink to="/" exact activeClassName={styles.active}>
					Home
				</NavLink>
			</li>
			<li className={styles.NavigationItem}>
				<NavLink to="/about" exact activeClassName={styles.active}>
					About
				</NavLink>
			</li>
			<li className={styles.NavigationItem}>
				<NavLink to="/contact" exact activeClassName={styles.active}>
					Contact
				</NavLink>
			</li>
		</ul>
	</nav>
);

export default header;
