import React, { Component } from 'react';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import Media from './Media';
import nasa  from '../nasa.png'

class Image extends Component {

  render() {
		const { info, id } = this.props;
    return(
			<Card className="card">
				<CardHeader
					title={ `Image Credit: ${info.copyright}` }
					subtitle={ info.date }
					avatar={ <Avatar src={ nasa } alt="nasa icon"/>} />
				<Media type={ info.media_type } url={ info.url } title={ info.title }/>
				<CardTitle className="card-title" title={ info.title } />
				<CardText className="card-text">{ info.explanation }</CardText>
				<RaisedButton
					containerElement={<Link to={`/image/${id}`}/>}
					label="View Image"
					secondary={true}
					fullWidth={true}
					/>
			</Card>
    )
  }
}


export default Image;
