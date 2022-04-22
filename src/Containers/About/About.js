import React from 'react'
import styles from './About.module.css'

const about = () => {
	return (
		<React.Fragment>
			<div className={styles.About}>
				<h1>About Michel Jørgensen</h1>
				<p>Hi I'm Michel Jørgensen.</p>
				<p>I'm an Agile Coach from Copenhagen in Denmark.</p>
				<p>
					I'm serving in the role of Scrum Master for two development teams in
					SimCorp - a Danish FinTech company - awesome place BTW.
				</p>
				<p>
					Besides family, agile and technology I'm into music, pale ale and
					great cooking.
				</p>
			</div>
		</React.Fragment>
	)
}

export default about
