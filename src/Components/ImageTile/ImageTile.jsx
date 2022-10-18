import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const ImageTile = ({ url, hdurl, title, copyright, description }) => {
  return (
    <Box>
      <Link>
        <img src={url} alt={`Photo By ${copyright}`}></img>
      </Link>
    </Box>
  );
};

export default ImageTile;
