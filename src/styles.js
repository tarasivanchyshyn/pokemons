const classes = {
  container: {
    width: '100%',
    pt: '3rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: '15rem',
    mb: '2rem',
    opacity: 0.85
  },
  cardsWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: { xs: 'column', md: 'row' }
  },
  paper: {
    width: { xs: 1, sm: '80%', md: '50%' },
    maxWidth: { sm: 'none', md: '30rem' },
    minHeight: '350px',
    display: 'flex',
    alignItems: 'center',
    bgcolor: 'gray',
    border: 2,
    borderRadius: 3
  },
  leftCard: {
    width: '100%',
    height: '100%',
    p: '3rem 1rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  rightCard: {
    width: '100%',
    height: '100%',
    p: '1rem 1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default classes;
