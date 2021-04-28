import './App.css';
import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';
import Footer from './components/Footer/Footer.js';
import Nav from './components/Nav/Nav';
import Login from './components/Login/Login';
import Home from './components/Home/Home';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {

  let myBrand = "FyF"; // Hardcoded

  /* JSX */
  return (
    <div className="App">
        <Header myBrand={myBrand} />
        
        <Router>
        <Nav />
        <Switch>
          <Route  exact path="/" component={Home}> 
          {/* Al haber solo un componente se puede poner como component={nombreComp} */}
          </Route>
          <Route  path="/login">
            <Login />
          </Route>
          <Route  path="/list">
            <Main  />
          </Route>
        </Switch>
      </Router>

        <Footer brand={myBrand} />
    </div>
  );
}

export default App;