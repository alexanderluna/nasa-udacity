import React from 'react';
import { CardMedia } from '@material-ui/core';

const Media = ({ type, url, title }) => (
  <div>
    {(type === 'video') && (
      <CardMedia className="card-media">
        <iframe title={title} src={url} controls />
      </CardMedia>
    )}
    {(type !== 'video') && (
      <CardMedia className="card-media">
        <img src={url} alt={title} />
      </CardMedia>
    )}
  </div>
);

export default Media;
