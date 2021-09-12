import logo from './logo.svg';
import './App.css';
import {useDispatch,useSelector} from 'react-redux'
import {increamentNumer,decreamentNumer} from './actions/Numberplay'


function App() {
  const myval=useSelector((state)=>state.stepsToChaneNumber)
  const dispatch=useDispatch()
  return (
    <>
    <center>
    <button onClick={()=>dispatch(increamentNumer())}>clicik me increament</button>
    <h1>{myval}</h1>
    <button onClick={()=>dispatch(decreamentNumer())}>clicik me decreament</button>
    </center>
    </>
  );
}

export default App;