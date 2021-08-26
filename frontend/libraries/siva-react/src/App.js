import {Home} from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {LoginPage} from './pages/Login';
import {BrowserRouter as Router, Route, Switch, } from 'react-router-dom'


function App() {
  return (
    <>
    <Router>
    <Switch>
    <Route exact path="/" render={()=><Home/>}/>
    </Switch>
    <Switch>
    <Route exact path="/login" render={()=><LoginPage/>}/>
    </Switch>
    </Router>
  </>  
  )
}

export default App;
