import React, { Component } from 'react';
import Image                from './Image'

class ImageList extends Component {
  render() {
    const { images } = this.props;
    return(
      <div className="image-list">
        { images.reverse().map((image, i) =>
          <Image
            key={i}
            date={image.date}
            explanation={image.explanation}
            media_type={image.media_type}
            title={image.title}
            url={image.url}
            copyright={image.copyright}
        />)}
      </div>
    )
  }
}

export default ImageList;
