import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
	render() {
		const {prev, next} = this.props;
		return(
			<div>
				<RaisedButton
					containerElement={<Link to={`/page/${prev}`}/>}
					label="Previous Page"
					primary={true}
					className="pagination"
				/>
				<RaisedButton
					containerElement={<Link to={`/page/${next}`}/>}
					label="Next Page"
					primary={true}
					className="pagination"
				/>
			</div>
		)
	}
}
