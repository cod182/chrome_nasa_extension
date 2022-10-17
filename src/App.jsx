import React from 'react';
import { Box, Button, Link } from '@mui/material';

import useStyles from './Style';

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p>Photo of the day componente</p>
      <p>Random Image Component</p>
      <Box>
        <Button variant="outlined" color="warning">
          Random Image
        </Button>
      </Box>
    </div>
  );
};

export default App;
