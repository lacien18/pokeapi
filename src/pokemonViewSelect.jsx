
import React from "react";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grow from "@material-ui/core/Grow";

const usestyles = makeStyles(() => ({
  header: {
    height: 50,
    textAlign: "center",
  },
  c: {
    alignContent: "center",
    alignItems: "center",
  },
  container: {
    alignContent: "start",
    alignItems: "center",
  },
  img: {
    borderStyle: "solid",
    borderColor: "red",
  },
}));

const PokemonSelect = () => {
  const pokemonSTATE = useSelector((store) => store.pokemonState.data);
  const styles = usestyles();
  return (
    <Grid md={12}>
      <Grid justifyContent="center" md={12}>
        <h1 className={styles.header}>
          {pokemonSTATE == null ? "" : pokemonSTATE.name.toUpperCase()}
        </h1>
      </Grid>

      <Grow
        in={pokemonSTATE == null ? false : true}
        style={{ transformOrigin: "0 0 0" }}
        {...{ timeout: 1000 }}
      >
        <Grid container alignItems="center" justifyContent="center" md={12}>
          <img
            width="50%"
            src={pokemonSTATE == null ? "" : pokemonSTATE.sprites.front_default}
            alt="pokeImagen"
          />
        </Grid>
      </Grow>
      <Grid justifyContent="flex-start" md={12}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            Habilidad
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
};

export default PokemonSelect;
