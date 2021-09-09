const initialState = {
  loading: false,
  error: false,
  data: [],
};

const initialStatePokemon = {
  loading: false,
  error: false,
  data: null,
};

const PokemonsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "DATA_LOAD_POKEMONS":
      return {
        loading: true,
        data: [],
        error: false,
      };
    case "DATA_SUCCESS_POKEMONS":
      return {
        loading: false,
        data: payload,
        error: false,
      };
    case "DATA_ERROR_POKEMONS":
      return {
        loading: false,
        data: [],
        error: true,
      };
    default:
      return state;
  }
};

const PokemonReducer = (state = initialStatePokemon, { type, payload }) => {
  switch (type) {
    case "DATA_LOAD_ONE_POKEMONS":
      return {
        loading: true,
        data: null,
        error: false,
      };
    case "DATA_SUCCESS_ONE_POKEMONS":
      return {
        loading: false,
        data: payload,
        error: false,
      };
    case "DATA_ERROR_ONE_POKEMONS":
      return {
        loading: false,
        data: null,
        error: true,
      };
    default:
      return state;
  }
};

export { PokemonsReducer, PokemonReducer };