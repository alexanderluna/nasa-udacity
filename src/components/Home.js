import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles/';
import { getImages } from '../actions';
import Navigation from './Navigation';
import MediaItem from './MediaItem';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    marginTop: '4rem',
  },
}));

const Home = ({ history, getImages, images, match: { params } }) => {
  const classes = useStyles();

  useEffect(() => {
    getImages();
  }, []);

  const nextPage = () => {
    const { page } = params;
    return page ? parseInt(page, 20) + 1 : 2;
  };

  const previousPage = () => {
    const { page } = params;
    return (page && page > 1) ? parseInt(page, 20) - 1 : 1;
  };

  const handleClick = (id) => {
    history.push(`image/${id}`);
  };

  return (
    <div>
      <Grid className={classes.root} container>
        {images.map((img) => (
          <MediaItem
            key={img.id}
            handleClick={handleClick}
            {...img}
          />
        ))}
      </Grid>
      <Navigation
        prev={previousPage(params.page)}
        next={nextPage(params.page)}
      />
    </div>
  );
};

const mapStateToProps = (state, prevProps) => {
  const { page = 0 } = prevProps.match.params;
  const currentPage = (page * 20);
  const limitTo = ((parseInt(page, 20) + 1) * 20);
  return {
    images: Object.values(state.images).reverse().slice(currentPage, limitTo),
  };
};

export default connect(mapStateToProps, { getImages })(Home);
