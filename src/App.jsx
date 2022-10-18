import React from 'react';
import { Box, Button, Link } from '@mui/material';
import { Dots } from 'loading-animations-react';

import useStyles from './Style';
import { useGetAPODQuery } from './services/NASA';
import { ImageTile } from './Components/index';

const App = () => {
  const classes = useStyles();

  const { data, isLoading } = useGetAPODQuery({});
  console.log(data);
  return (
    <div className={classes.root}>
      {isLoading ? (
        <Dots />
      ) : (
        <>
          <ImageTile
            url={data.url}
            hdurl={data.hdurl}
            title={data.title}
            copyright={data.copyright}
            description={data.explanation}
          />
          <p>Random Image Component</p>
          <Box>
            <Button variant="outlined" color="warning">
              Random Image
            </Button>
          </Box>
        </>
      )}
    </div>
  );
};

export default App;
