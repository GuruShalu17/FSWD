import {Home} from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {LoginPage} from './pages/Login';
import {BrowserRouter as Router, Route, } from 'react-router-dom'


function App() {
  return (
    <>
    <Router>

    <Route exact path="/" render={()=><Home/>}/>

    <Route exact path="/login" render={()=><LoginPage/>}/>
   
    </Router>
  </>  
  )
}

export default App;
