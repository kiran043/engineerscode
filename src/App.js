import React from "react";
import "./styles/App.scss";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/Home/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Home/Footer/Footer";
import About from "./Components/About/About";
import LReact from "./Components/React/LReact";
import Float from "./Components/Home/Float/Float";
import Game from "./Components/Game";
import Contact from './Components/Home/Contact/Contact'
function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Float />
      </div>
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path='/contact' component={Contact}/>
        <Route path="/react" component={LReact} />
        <Route path='/game' component={Game}/>
      </Switch>
     
      <Footer />
    </div>
  );
}

export default App;
