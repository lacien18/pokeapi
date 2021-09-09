import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { PokemonsReducer, PokemonReducer } from "./reducer/pokemons_reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const Reducers = combineReducers({
  pokemonsState: PokemonsReducer,
  pokemonState: PokemonReducer,
});

const store = createStore(Reducers,composeWithDevTools( applyMiddleware(thunk)));

export default store;
