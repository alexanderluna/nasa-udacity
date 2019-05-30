import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Navigation = ({ prev, next }) => (
  <div>
    <Button variant="contained" color="primary" className="pagination">
      <Link to={`/page/${prev}`}>Previous Page</Link>
    </Button>
    <Button variant="contained" color="primary" className="pagination">
      <Link to={`/page/${next}`}>Next Page</Link>
    </Button>
  </div>
);

export default Navigation;
