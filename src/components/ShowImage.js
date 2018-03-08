import React, { Component } from 'react';
import Image from './Image';
import fire from '../fire';

export default class ShowImage extends Component {
	constructor(props) {
    super(props)
		this.state = { image: {}}
  }

	componentWillMount() {
		let imagesRef = fire.database().ref('/Images/' + this.props.match.params.id);
		imagesRef.once('value')
		.then(image => {
			this.setState(image.val())
		});
	}

	render() {
		return(
			<div className="image-list">
				<Image info={this.state} />
			</div>
		)
	}
}
