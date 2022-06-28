import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FunctionComponent } from "react";
import PokemonList from "./pages/pokemon-list";
import PokemonsDetail from "./pages/pokemon-detail";
import PageNotFound from "./pages/page-not-found";
import PokemonEdit from "./pages/pokemon-edit";
import PokemonAdd from "./pages/pokemon-add";
import Login from "./pages/login";
import PrivateRoute from "./PrivateRoute";

const App: FunctionComponent = () => {
  //const [name, setName] = useState<String>("React");

  return (
    <BrowserRouter>
      <div>
        {/* La barre de navigation */}
        <nav>
          <div className="nav-wrapper teal">
            <Link to="/" className="brand-logo-center">
              Pokédex
            </Link>
          </div>
          {/* le système de gestion des routes de l'application */}
        </nav>
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<PokemonList />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/pokemons" element={<PokemonList />} />
          </Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/pokemons/:id" element={<PokemonsDetail />} />
          </Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/pokemon/edit/:id" element={<PokemonEdit />} />
          </Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/pokemon/add" element={<PokemonAdd />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
