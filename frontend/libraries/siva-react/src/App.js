import {Home} from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {LoginPage} from './pages/Login';
import {BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import GetApi from './components/Api/GetApi';
import InsertApi from './components/Api/InsertApi';


function App() {
  return (
    <>
    <Router>

    <Switch>
    <Route exact path="/">
    <Home/>
    </Route>
    </Switch>

    <Switch>
    <Route exact path="/login">
    <LoginPage/>
    </Route>
    </Switch>

    <Switch>
    <Route exact path="/apiGet">
    <GetApi/>

    <InsertApi />  
    </Route>  
    </Switch>


    </Router>
  </>  
  )
}

export default App;
