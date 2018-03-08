import React, { Component } from 'react';
import Image from './Image';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import fire from '../fire';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { images: [], image_keys: [] }
  }

  componentWillMount() {
    let imagesRef = fire.database().ref('Images');
    imagesRef.on('child_added', image => {
      this.setState(prev => ({
        images: [ image.val() ].concat(prev.images),
				image_keys: [image.ref.key].concat(prev.image_keys)
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

	nextPage() {
		const page = this.props.match.params.page;
		if(page) return parseInt(page, 10) + 1;
		return 1;
	}

	previousPage() {
		const page = this.props.match.params.page;
		if(page && page > 1) return parseInt(page, 10) - 1;
		return 1;
	}

	filterByParams() {
		const page = this.props.match.params.page;
		const end = page ? page * 10 : 10;
		const start = end > 10 ? end - 10 : 0;
		return this.sortByDate().reverse().slice(start, end);
	}

  render() {
    return(
			<div className="image-list">
				{ this.filterByParams().map((image, i) =>
					<Image info={image} key={i} id={this.state.image_keys[i]} />
				)}
				<RaisedButton
					containerElement={<Link to={`/page/${this.previousPage()}`}/>}
					label="Previous Page"
					primary={true}
					className="pagination"
					/>
				<RaisedButton
					containerElement={<Link to={`/page/${this.nextPage()}`}/>}
					label="Next Page"
					primary={true}
					className="pagination"
					/>
			</div>
		)
	}
}

export default Home;
