import React from 'react';
import { Button } from '@mui/material';
import { Dots } from 'loading-animations-react';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';

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
        </>
      )}
      <Button
        color="warning"
        size="small"
        variant="contained"
        sx={{ width: 'fit-content !important' }}
      >
        <ChangeCircleIcon />
      </Button>
    </div>
  );
};

export default App;
