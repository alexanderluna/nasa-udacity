import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import getImageList from '../services';
import Image from './Image';
import Navigation from './Navigation';
import fire from '../fire';

const styles = {
  root: {
    flexGrow: 1,
    marginTop: '4rem',
  },
  item: {
    maxHeight: 300,
  },
  media: {
    borderWidth: 0,
    height: '100%',
  },
};


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { images: [], detail: true };
  }

  componentDidMount = async () => {
    if (this.props.match.params.id) {
      this.setState({ detail: false });
    }
    const imageList = await getImageList();
    this.setState({ imageList });
  }

  nextPage = (page) => page ? parseInt(page, 20) + 1 : 2;

  previousPage = (page) => (page && page > 1) ? parseInt(page, 20) - 1 : 1;

  filterByParams(id, page) {
    if (id) {
      return this.state.images.filter((img) => (img.id === id) ? img : false);
    }
    const end = page ? page * 20 : 20;
    const start = end > 20 ? end - 20 : 0;
    return this.sortByDate().reverse().slice(start, end);
  }

  render() {
    const { id, page } = this.props.match.params;
    const { classes } = this.props;
    return (
      <div className="">
        <Grid className={classes.root} container>
          {this.state.images.map((img, i) => (
            <Grid key={i} item xs={12} sm={6} md={3} className={classes.item}>
              {/* <Image info={img} /> */}
              {img.media_type === 'image'
                ? <img src={img.url} alt={img.title} />
                : <iframe src={img.url} title={img.title} className={classes.media} />
              }
            </Grid>
          ))}
        </Grid>
        {this.state.detail && (
          <Navigation
            prev={this.previousPage(page)}
            next={this.nextPage(page)}
          />
        )}
      </div>
    );
  }
}

export default withStyles(styles)(Home);
