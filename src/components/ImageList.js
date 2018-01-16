import React, { Component } from 'react';
import Image                from './Image'

class ImageList extends Component {

  sortByDate(){
    return this.props.images.sort((first, second) => {
      if (first.date < second.date) { return -1; }
      if (first.date > second.date) { return 1; }
      return 0;
    });
  }

  render() {
    return(
      <div className="image-list">
        { this.sortByDate().reverse().map((image, i) =>
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
