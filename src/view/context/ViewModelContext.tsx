import {createContext, FunctionComponent, ReactNode, useContext} from "react";
import {PokedexViewModel} from "../../view-model/PokedexViewModel";
import {PokemonService} from "../../model/PokemonService";

interface ViewModels {
  pokedex: PokedexViewModel,
}

const service = new PokemonService();
const instance = new PokedexViewModel(service);
const ViewModelContext = createContext<ViewModels | undefined>(undefined);

const ViewModelProvider: FunctionComponent<{children: ReactNode}> = ({ children }) => {
  const pokedex = instance;

  const value = {pokedex};
  return (
    <ViewModelContext.Provider value={value}>
      {children}
    </ViewModelContext.Provider>
  );
};

export const useViewModel = (): ViewModels => {
  const context = useContext(ViewModelContext);
  if (context === undefined) {
    throw new Error('useViewModel must be used within an ViewModelProvider');
  }

  return context;
};

export default ViewModelProvider;
