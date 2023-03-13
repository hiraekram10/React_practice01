
import './App.css';
import Header from './components/Header';
import Body from './components/Body';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
}
from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='nav'><li><a href='#header'>About</a></li>
      <li><a href='#body'>Header</a></li></div>
      <Router>
      <Switch>
        <Route path='/header'>
        <Header name1="Hira Ekram" name2='Front-end Developer'/>
        </Route>
        <Route path='/body'>
        <Body contact='contact' number="03353191841" address ='A45 A1 COMPLEX PHASE 2'/>
        </Route>
        {/* <Route path='/'>
        <Home/>
        </Route> */}
      </Switch>
      </Router>
   
   
    </div>
  );
}

export default App;
