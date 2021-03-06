import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import CountryInfo from './components/CountryInfo/CountryInfo';



function App() {
  return (
    <div >
      
      
      <Router>  
    
        <Switch>
        
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/name/:name">
            <CountryInfo></CountryInfo>
          </Route>
        
          <Route path="*">
            <NotFound></NotFound>

          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
