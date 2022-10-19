import React, { useState } from 'react';
import { Button, Box } from '@mui/material';
import { Dots } from 'loading-animations-react';
import { ChangeCircle, House } from '@mui/icons-material';

import useStyles from './Style';
import { useGetAPODQuery } from './services/NASA';
import { useGetNasaImageQuery } from './services/ImagesNasa';

import { ImageTile } from './Components/index';

const App = () => {
  const classes = useStyles();
  const [randomImgSearch, setRandomImgSearch] = useState(false);

  const [randImg, setRandImg] = useState({});

  const query = 'planet';

  const [page, setPage] = useState(1);

  const { data: imageData, isLoading: imageLoading } = useGetNasaImageQuery({
    query,
    page,
  });

  const { data, isLoading } = useGetAPODQuery({});

  const getRandomImg = () => {
    setRandomImgSearch(true);
    // get total number of pages
    let totalPages = Math.ceil(
      imageData?.collection?.metadata?.total_hits / 100
    );
    // get a random page number and update page state
    setPage(Math.floor(Math.random() * totalPages));
    // length of the collection returned
    let pageLength = imageData?.collection?.items.length;
    // get a random item number from collection length
    let imageNumber = Math.floor(Math.random() * pageLength);

    setRandImg(imageData?.collection?.items?.[imageNumber]);
  };
  const getApod = () => {
    setRandomImgSearch(false);
  };

  return (
    <div className={classes.root}>
      {randomImgSearch ? (
        <>
          <ImageTile
            url={randImg.links[0].href}
            title={randImg?.data[0]?.title}
            copyright={randImg?.data[0]?.photographer}
            description={randImg?.data[0]?.explanation}
          />
          <Box>
            <Button
              sx={{ margin: '0 5px' }}
              onClick={getRandomImg}
              color="warning"
              size="small"
              variant="contained"
            >
              <ChangeCircle />
            </Button>
            <Button
              sx={{ margin: '0 5px' }}
              onClick={getApod}
              color="warning"
              size="small"
              variant="contained"
            >
              <House />
            </Button>
          </Box>
        </>
      ) : isLoading ? (
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
          <Button
            onClick={getRandomImg}
            color="warning"
            size="small"
            variant="contained"
          >
            <ChangeCircle />
          </Button>
        </>
      )}
    </div>
  );
};

export default App;
