import React, { Component } from 'react';
import AppBar               from 'material-ui/AppBar';
import ImageList            from './ImageList';
import fetch                from 'isomorphic-fetch'
import camera               from '../camera.svg';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: []
    }
  }

  componentDidMount() {
    fetch("https://nasa-udacity.firebaseio.com/Images.json")
      .then(res => res.json())
      .then(json => Object.values(json))
      .then(images => this.setState({ images }))
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
