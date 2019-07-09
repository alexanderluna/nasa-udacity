import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';
import { getImage } from '../actions';
import MediaItem from './MediaItem';


const Detail = (props) => {
  useEffect(() => {
    props.getImage(props.match.params.id);
  }, []);

  const handleClick = () => {
    window.open(props.image.url, '_blank');
  };

  const { image } = props;
  return (
    <div>
      <Grid container justify="center">
        {image && (
          <MediaItem
            key={image.id}
            handleClick={handleClick}
            {...image}
            xs={12}
            sm={12}
            md={12}
            fullSize
          />
        )}
        <Grid
          item
          md={6}
          sm={8}
        >
          <Typography
            variant="h5"
            color="textSecondary"
            style={{ padding: '1rem 0' }}
          >
            {image && image.title}
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            style={{ padding: '1rem 0' }}
          >
            {`
              Taken by ${image && image.copyright}
               on ${image && image.date}
            `}
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
          >
            {image && image.explanation}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => (
  { image: state.images[ownProps.match.params.id] }
);

export default connect(mapStateToProps, { getImage })(Detail);
