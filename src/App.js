import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Main from './components/Main';
import CVForm from './components/CVForm';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Switch>
      <Route exact={true} path='/' component={Main}/>
      <Route exact={true} path='/add' component={CVForm}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
