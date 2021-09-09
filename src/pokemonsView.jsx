import { useDispatch, useSelector } from "react-redux";
import {
  fechDataPokemons,
  fechDataOnePokemon,
} from "./redux/actions/pokemons_actions";
import React from "react";
import { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import PokemonSelect from "./pokemonViewSelect";
import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

  const usestyles = makeStyles(() => ({
    hea: {
      height: "95vh",
      width: "100vw",
      overflow: "scroll",
      scrollbars: false,
    },
    c: {
    overflow:'hidden'}
  }));
const PokemonsView = () => {
  const dispatch = useDispatch();
  const styles = usestyles();
  const pokemonsSTATE = useSelector((store) => store.pokemonsState);

  const pokemonSelect = (urlPokemon) => {
    dispatch(fechDataOnePokemon(urlPokemon));
  };

  useEffect(() => {
    dispatch(fechDataPokemons());
  }, []);

  const _buildItemList = (state) => {
    return state.map((pokemon, key) => {
      return (
        <ListItem
          key={pokemon.name}
          button
          onClick={() => pokemonSelect(pokemon.url)}
        >
          <ListItemAvatar>
            <Avatar></Avatar>
          </ListItemAvatar>
          <ListItemText primary={pokemon.name} />
        </ListItem>
      );
    });
  };

  if (pokemonsSTATE.loading) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          alignSelf: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  return (
    <Grid container>
      <Grid container item md={12} justifyContent="center">
        <h2>hola</h2>
      </Grid>

      <Grid container item md={4}>
        <PokemonSelect />
      </Grid>
      <Grid container item md={8}>
        <Paper className={styles.hea} elevation={0}>
          <List>{_buildItemList(pokemonsSTATE.data)}</List>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default PokemonsView;
