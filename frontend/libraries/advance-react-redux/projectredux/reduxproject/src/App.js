import logo from './logo.svg';
import './App.css';
import {useDispatch,useSelector} from 'react-redux'
import {increaseNum,decreaseNum} from './actions/DisplayNum'

function App() {
    const myval=useSelector((state)=>state.stepsToChangeNum)
    const dispatch=useDispatch()
    return(
      <>
      <center>
      <button onClick={()=>dispatch(increaseNum())}>Click To Increase</button>
      <h1>{myval}</h1>
      <button onClick={()=>dispatch(decreaseNum())}>Click to Decrease</button>
      </center>
      </>
    )
}

export default App;
