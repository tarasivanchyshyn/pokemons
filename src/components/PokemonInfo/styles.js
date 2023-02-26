const classes = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  infoName: {
    '::first-letter': { textTransform: 'capitalize' }
  },
  infoAbilityWrapper: {
    textAlign: 'center',
    mb: '1rem'
  },
  infoAbilityHeader: {
    color: 'primary.main',
    mb: '0.5rem'
  },
  infoTypeWrapper: {
    textAlign: 'center'
  },
  infoTypeHeadder: {
    color: 'primary.main',
    mb: '0.5rem'
  },
  msgWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  msgHeader: {
    color: 'primary.main',
    textAlign: 'center'
  }
};

export default classes;
