import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import Store from "./Store";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddPanCard from "./Components/PanCardComponent/AddPanCard";
import PanCardItem from "./Components/PanCardComponent/PanCardItem";
import PanBoard from "./Components/PanBoard";
import UpdatePanCard from "./Components/PanCardComponent/UpdatePanCard";
class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <NavBar />

        <Router>
          <Route exact path="/" component={PanBoard} />
          <Route exact path="/addPanCard" component={AddPanCard} />
          <Route exact path="/item" component={PanCardItem} />
          <Route exact path="/updatePanCard/:pt_id" component={UpdatePanCard} />
        </Router>
      </Provider>
    );
  }
}
export default App;
