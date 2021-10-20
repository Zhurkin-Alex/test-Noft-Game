import React,{useEffect} from 'react';
import './App.scss';
import Form from '../Form/Form'
import {useDispatch} from 'react-redux'
import {ThunkAddCash} from '../../redux/Thunk/ThuncTest'

function App() {
  
  const dispatch = useDispatch()
  useEffect(()=>{  
    dispatch(ThunkAddCash())   
  },[dispatch])
  


  return (
    
    <div className="App">
      <div className="container">
        <Form/>
      </div>    
    </div>
  );
}

export default App;
