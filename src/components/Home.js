import React, { Component } from 'react';
import Image from './Image';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import fire from '../fire';

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = { images: [] }
	}

  componentWillMount() {
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
		return (page && page > 1) ? parseInt(page, 10) - 1 : 1
	}

	filterByParams(id, page) {
		if(id) {
			return this.state.images.filter(image => {
				return (image.id === id) ? image : false
			})
		} else {
			const end = page ? page * 10 : 10;
			const start = end > 10 ? end - 10 : 0;
			return this.sortByDate().reverse().slice(start, end);
		}
	}

  render() {
		const { id, page } = this.props.match.params
		return(
			<div className="image-list">
				{ this.filterByParams(id, page).map((image, i) =>
					<Image info={image} key={i} />
				)}
				<RaisedButton
					containerElement={<Link to={`/page/${this.previousPage(page)}`}/>}
					label="Previous Page"
					primary={true}
					className="pagination"
					/>
				<RaisedButton
					containerElement={<Link to={`/page/${this.nextPage(page)}`}/>}
					label="Next Page"
					primary={true}
					className="pagination"
					/>
			</div>
		)
	}
}

export default Home;
