import React, { Component } from 'react';
import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider';
import Home                 from './Home';
import AppBar               from 'material-ui/AppBar';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import camera               from '../camera.svg';
import '../App.css';

class App extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<Router>
					<div>
						<AppBar
							title={ <Link to="/">NASA: IOD</Link> }
							iconElementLeft={<img src={camera} alt="camera icon"/>}
							style={{ backgroundColor: '#d04972' }}/>
						<Route exact path="/" component={Home}/>
						<Route path="/page/:page" component={Home}/>
						<Route path="/image/:id" component={Home}/>
					</div>
				</Router>
			</MuiThemeProvider>
		);
	}
}

export default App;
