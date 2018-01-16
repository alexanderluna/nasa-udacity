import React, { Component } from 'react';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Media from './Media';
import nasa  from '../nasa.png'

class Image extends Component {

  render() {
    const { copyright, date, explanation, media_type, title, url } = this.props;
    return(
      <Card className="card">
        <CardHeader
          title={ `Image Credit: ${copyright}` }
          subtitle={ date }
          avatar={ <Avatar src={ nasa } alt="nasa icon"/>} />
        <Media type={ media_type } url={ url } title={ title }/>
        <CardTitle className="card-title" title={ title } />
        <CardText className="card-text">{ explanation }</CardText>
      </Card>
    )
  }
}


export default Image;
