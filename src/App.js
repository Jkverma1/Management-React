import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Add from "./components/Add";
import Home from "./components/Home";
import Update from "./components/Update";
import Select from "./components/Select";

const App = () => {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Routes>
          <Route exact path="/" element={<Select />} />
          <Route exact path="/squirrels" element={<Home />} />
          <Route exact path="/squirrels/add" element={<Add />} />
          <Route exact path="/squirrels/update" element={<Update />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
