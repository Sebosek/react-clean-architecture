import ViewModelProvider from "./context/ViewModelContext";
import Pokedex from "./pages/Pokedex";

const App = () => {
  return (
    <ViewModelProvider>
      <div className="grid mt-5 mx-0">
        <div className="col-6 col-offset-3">
          <Pokedex />
        </div>
      </div>
    </ViewModelProvider>
  );
}

export default App;
