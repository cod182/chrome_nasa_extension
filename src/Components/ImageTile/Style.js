import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  outerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
    overflow: 'hidden',
  },
  imageContainer: {
    width: '400px',
    height: '80%',
    borderRadius: '10px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'flex-end',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    objectFit: 'cover',
    borderRadius: '10px'
  },
  title: {}

}));