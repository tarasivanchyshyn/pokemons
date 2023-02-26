import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

import classes from './styles';

function PokemonInfo({ item }) {
  const [info, setInfo] = useState(null);
  let img, abilities, type;

  if (info) {
    img = info.sprites.front_default;
    abilities = info.abilities.map((el) => el.ability.name).join(', ');
    type = info.types.map((el) => el.type.name).join(', ');
  }

  useEffect(() => {
    if (item) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${item}`)
        .then((response) => response.json())
        .then((data) => {
          setInfo(data);
        })
        .catch((error) => console.error(error));
    }
  }, [item]);

  const messsage = (
    <Box sx={classes.msgWrapper}>
      <Typography variant='h4' sx={classes.msgHeader}>
        Pokemon Info
      </Typography>
      <Typography sx={{ textAlign: 'center' }}>
        Select a pokemon name to show info
      </Typography>
    </Box>
  );

  return info ? (
    <Box sx={classes.wrapper}>
      <Typography variant='h4' sx={classes.infoName}>
        {info.name}
      </Typography>
      <Box component='img' src={img} width={100} alt='pokemon' />
      <Box sx={classes.infoAbilityWrapper}>
        <Typography variant='h5' sx={classes.infoAbilityHeader}>
          Abilities
        </Typography>
        <Typography>{abilities}</Typography>
      </Box>
      <Box sx={classes.infoTypeWrapper}>
        <Typography variant='h5' sx={classes.infoTypeHeadder}>
          Type
        </Typography>
        <Typography>{type}</Typography>
      </Box>
    </Box>
  ) : (
    messsage
  );
}

export default PokemonInfo;
