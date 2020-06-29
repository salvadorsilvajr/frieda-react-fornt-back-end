import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import About from './components/layout/About';
import Login from './components/auth/Login';
import './App.css';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';

// redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
	<Provider store={store}>
		<Router>
			<Fragment>
				<Header />
				<Alert />
				<Route exact path='/' component={About} />
				<Switch>
					<Route exact path='/login' component={Login} />
					<Route exact path='/register' component={Register} />
				</Switch>
				<Footer />
			</Fragment>
		</Router>
	</Provider>
);

export default App;
