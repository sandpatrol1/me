import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from '../../Components/Layout/Header/Header';
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
import NoMatch from '../NoMatch/NoMatch';

class Me extends Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<main>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/about" component={About} />
						<Route path="/contact" component={Contact} />
						<Route component={NoMatch} />
					</Switch>
				</main>
			</React.Fragment>
		);
	}
}

export default Me;
