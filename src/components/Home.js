import React, { Component } from 'react';
import Image from './Image';
import Navigation from './Navigation';
import fire from '../fire';

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = { images: [], detail: true }
	}

	componentWillMount() {
		if(this.props.match.params.id) {
			this.setState({detail: false});
		}
		let imagesRef = fire.database().ref('Images');
		imagesRef.on('child_added', image => {
			const data = image.val();
			data.id = image.ref.key;
			this.setState(prev => ({
				images: [ data ].concat(prev.images),
			}));
		});
	}

	sortByDate(){
		return this.state.images.sort((first, second) => {
			if (first.date < second.date) { return -1; }
			if (first.date > second.date) { return 1; }
			return 0;
		});
	}

	nextPage(page) {
		return  page ? parseInt(page, 10) + 1 : 2;
	}

	previousPage(page) {
		return (page && page > 1) ? parseInt(page, 10) - 1 : 1;
	}

	filterByParams(id, page) {
		if(id) {
			return this.state.images.filter(image => {
				return (image.id === id) ? image : false;
			})
		} else {
			const end = page ? page * 10 : 10;
			const start = end > 10 ? end - 10 : 0;
			return this.sortByDate().reverse().slice(start, end);
		}
	}

	render() {
		const {id, page} = this.props.match.params;
		return(
			<div className="image-list">
				{ this.filterByParams(id, page).map((img, i) =>
					<Image info={img} key={i}/>
				)}
				{ this.state.detail
					? <Navigation prev={this.previousPage(page)} next={this.nextPage(page)}/>
					: <div/>
				}
			</div>
		)
	}
}

export default Home;
