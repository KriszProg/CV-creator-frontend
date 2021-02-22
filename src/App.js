import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Main from './components/Main';
import SetupForm from './components/SetupForm';
import CVForm from './components/CVForm';
import CVTable from './components/CVTable';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Switch>
      <Route exact={true} path='/' component={Main}/>
      <Route exact={true} path='/add' component={SetupForm}/>
      <Route exact={true} path='/cv/all' component={CVTable}/>
      <Route exact={true} path='/cv/edit/:id' component={CVForm}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
