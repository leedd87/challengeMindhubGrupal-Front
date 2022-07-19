import React,{useEffect} from 'react'
import '../src/styles/App.css';
import shoesActions from './redux/actions/shoesActions';
import {useDispatch} from 'react-redux'

function App() {
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(shoesActions.getShoes())
    // eslint-disable-next-line
  },[])

  return (
    <div className="App">
      <h1>hola</h1>
    </div>
  );
}

export default App;
