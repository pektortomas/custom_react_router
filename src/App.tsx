import "./App.css";
import AttackDetail from "./components/AttackDetail";
import Home from "./components/Home";
import Setings from "./components/Setings";
import { Route } from "./router/Route";
import { Router } from "./router/Router";

function App() {
  return (
    <>
      <h1>Router test</h1>
      <Router>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/attackDetail/:id">
          <AttackDetail />
        </Route>
        <Route path="/settings">
          <Setings />
        </Route>
      </Router>
    </>
  );
}

export default App;
