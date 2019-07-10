import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles/';

const useStyles = makeStyles(() => ({
  item: {
    maxHeight: 300,
  },
  itemFull: {
    marginTop: '4rem',
    width: '100%',
    '& img': {
      width: '100%',
    },
  },
  smallImage: {
    width: '100%',
    height: 300,
  },
  media: {
    borderWidth: 0,
    width: '100%',
    height: 300,
  },
}));

const MediaItem = (props) => {
  const classes = useStyles();

  const handleClick = () => {
    props.handleClick(props.id);
  };

  return (
    <Grid
      item
      xs={props.xs || 12}
      sm={props.sm || 6}
      md={props.md || 3}
      className={props.fullSize ? classes.itemFull : classes.item}
      onClick={handleClick}
    >
      {
        props.media_type === 'image'
          ? (
            <img
              src={props.url}
              alt={props.title}
              className={!props.fullSize ? classes.smallImage : undefined}
            />
          )
          : (
            <iframe
              src={props.url}
              title={props.title}
              className={classes.media}
            />
          )
      }
    </Grid>
  );
};

export default MediaItem;
