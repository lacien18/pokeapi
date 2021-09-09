import { Provider } from "react-redux";
import React from "react";
import PokemonsView from "./pokemonsView";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <PokemonsView/>
    </Provider>
  );
}

export default App;
