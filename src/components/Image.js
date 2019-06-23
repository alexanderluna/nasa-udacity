import React from 'react';
import {
  Avatar, Button, Card, CardHeader, CardContent, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Media from './Media';
import nasa from '../assets/nasa.png';

const useStyles = makeStyles(() => ({
  cardPaper: {
    maxHeight: 600,
  },
  image: {
    width: '100%',
  },
}));

const Image = ({ info }) => {
  const classes = useStyles();

  return (
    <Card className={classes.cardPaper}>
      <CardHeader
        title={`Credit: ${info.copyright}`}
        subheader={info.date}
        avatar={(
          <Avatar
            aria-label="nasa iod"
            src={nasa}
            alt="nasa icon"
          />
        )}
      />
      <Media
        type={info.media_type}
        url={info.url}
        title={info.title}
      />
      <CardContent>
        <Button
          fullWidth
          variant="contained"
          color="secondary"
        >
          <Link to={`/image/${info.id}`}>View Image</Link>
        </Button>
        <Typography
          className="card-text"
          variant="body2"
          color="textSecondary"
          component="p"
        >
          {info.explanation}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Image;
