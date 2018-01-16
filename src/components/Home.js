import React, { Component } from 'react';
import AppBar               from 'material-ui/AppBar';
import ImageList            from './ImageList';
import camera               from '../camera.svg';
import fire                 from '../fire';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { images: [] }
  }

  componentWillMount() {
    let imagesRef = fire.database().ref('Images');
    imagesRef.on('child_added', image => {
      this.setState(prev => ({
        images: [image.val()].concat(prev.images),
      }));
    });
  }

  render() {
    return(
      <div>
        <AppBar
          title="NASA - Udacity"
          iconElementLeft={<img src={camera} alt="camera icon"/>}
          style={{ backgroundColor: '#3F51B5' }}/>
        <ImageList images={this.state.images} />
      </div>
    )
  }
}

export default Home;
