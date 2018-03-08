import React, { Component } from 'react';
import { CardMedia } from 'material-ui/Card';
import ReactPlayer from 'react-player'

class Media extends Component {

  render() {
		const { type, url, title } = this.props;
		return(
			<div>
				{ (type === 'video')
				? <CardMedia className="card-media">
						<ReactPlayer url={url} controls={true}/>
					</CardMedia>
				: <CardMedia className="card-media">
						<img src={ url } alt={ title } />
					</CardMedia>
				}
			</div>
		)
	}
}

export default Media
