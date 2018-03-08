import React, { Component } from 'react';
import { CardMedia } from 'material-ui/Card';
import Youtube from 'react-youtube';

class Media extends Component {
  getVideoID() {
    if (this.props.url.match("embed/")) {
      return this.props.url.split("embed/")[1].split("?")[0]
    }
  }

  render() {
    const { type, url, title } = this.props;

    return(
      <div>
        { (type === 'video')
          ? <CardMedia className="card-media">
              <Youtube videoId={ this.getVideoID() } />
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
