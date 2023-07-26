import React from "react";
import "./App.css";
import NotFoundPage from "./router/NotFoundPage";
import { Route } from "./router/Route";
import { Router } from "./router/Router";

const Home = React.lazy(() => import("./components/Home"));
const AttackDetail = React.lazy(() => import("./components/AttackDetail"));
const Settings = React.lazy(() => import("./components/Settings"));

function App() {
  return (
    <>
      <h1>Router test</h1>
      <Router fallback={<NotFoundPage />}>
        <Route path="/" component={<Home />} />
        <Route path="/attackDetail/:id" component={<AttackDetail />} />
        <Route path="/settings" component={<Settings />} />
      </Router>
    </>
  );
}

export default App;
