import { useState, useEffect } from 'react';
import { Container, Box, Paper } from '@mui/material';

import PokemonsList from './components/PokemonsList/PokemonsList';
import Paginationn from './components/Pagination/Pagination';
import PokemonInfo from './components/PokemonInfo/PokemonInfo';
import logo from './assets/logo.png';

import classes from './styles';

const App = () => {
  const [pokemonNames, setPokemonNames] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState('');

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=120')
      .then((response) => response.json())
      .then((data) => {
        const names = data.results.map((pokemon) => pokemon.name);
        setPokemonNames(names);
      })
      .catch((error) => console.error(error));
  }, []);

  const changePageHandler = (items) => setCurrentItems(items);
  const selectPokemon = (pokemon) => setSelectedPokemon(pokemon);

  return (
    <Container sx={classes.container}>
      <Box component='img' sx={classes.logo} src={logo} alt='logo' />
      <Box sx={classes.cardsWrapper}>
        <Paper elevation={8} sx={{ ...classes.paper, order: { xs: 1, md: 0 } }}>
          <Box sx={classes.leftCard}>
            <PokemonsList
              currentItems={currentItems}
              onPokemonClick={selectPokemon}
            />
            <Paginationn
              items={pokemonNames}
              onPageChange={changePageHandler}
            />
          </Box>
        </Paper>
        <Paper elevation={8} sx={classes.paper}>
          <Box sx={classes.rightCard}>
            <PokemonInfo item={selectedPokemon} />
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default App;
