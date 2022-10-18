import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import useStyles from './Style';

const ImageTile = ({ url, hdurl, title, copyright, description }) => {
  const classes = useStyles();

  return (
    <Box className={classes.outerContainer}>
      <Box className={classes.imageContainer}>
        <a
          href={hdurl}
          target="_blank"
          rel="noreferrer noopener"
          className={classes.imageLink}
        >
          <img
            className={classes.image}
            src={url}
            alt={`By ${copyright}`}
          ></img>
        </a>
      </Box>
      <Typography variant="body1" className={classes.title}>
        {title}
      </Typography>
      <Typography variant="body2" className={classes.copyright}>
        by: {copyright}
      </Typography>
    </Box>
  );
};

export default ImageTile;
