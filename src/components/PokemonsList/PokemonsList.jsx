import { Button, List, ListItem } from '@mui/material';
import classes from './styles';

function PokemonsList({ currentItems, onPokemonClick }) {
  return (
    <List sx={classes.list}>
      {currentItems.map((item) => (
        <ListItem key={item} sx={classes.listItem}>
          <Button
            variant='contained'
            sx={classes.btn}
            onClick={() => onPokemonClick(item)}
          >
            {item}
          </Button>
        </ListItem>
      ))}
    </List>
  );
}

export default PokemonsList;
