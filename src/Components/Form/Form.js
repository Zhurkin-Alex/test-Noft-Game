import React,{useState,useEffect,useCallback} from 'react';
import './form.scss'
import Card from '../Card/Card'
import {useDispatch, useSelector} from 'react-redux'
import {ThunkAllCArd} from '../../redux/Thunk/ThuncTest'

function Form() {
    const[forms,setForms] = useState(true)
    const[numbers,setNumber] = useState()
    const[errorAdd, setErrorAdd] = useState()
    const[errorNumber, setErrorNumber] = useState(false)

    const dispatch = useDispatch()
    const store = useSelector(store=>store)
    const allList = store.testReducer.list
    const cash = store.testReducer.cash[0]
    const eth = (cash/10**18).toFixed(1)
    
    
    const [time,setTime] = useState(false)
    const [spiner, setSpiner] = useState(true)
    setTimeout(()=>{
        setTime(true)
        setSpiner(false)
    },5000)
    
     const formHandler =(e)=>{
        e.preventDefault()
        const form = e.target        
        const{number:{value:number}} = e.target
        

        
        let num = /0x+[A-Za-z0-9]{40}/
        if(time && (!(num.test(number)))){
            setErrorNumber(true)
            setForms(false)
            setErrorAdd(number)
            

        }else if(time){
            setErrorNumber(false)
            setNumber(number)
            setForms(true)
            
        
        }

        if(numbers || errorNumber) {
            form.reset()
            setErrorNumber(false)
            setForms(true)
            setNumber(false)
        }
    }
    
  useEffect(()=>{    
    numbers && dispatch(ThunkAllCArd(numbers))   
  },[numbers])   

    return (<>
            {spiner && <div className="spiner">
                <div className="spiner-box">                
                    <div className="spinner-grow text-muted"></div>
                    <div className="spinner-grow text-primary"></div>
                    <div className="spinner-grow text-success"></div>
                    <div className="spinner-grow text-info"></div>
                    <div className="spinner-grow text-warning"></div>
                    <div className="spinner-grow text-danger"></div>
                    <div className="spinner-grow text-secondary"></div>
                    <div className="spinner-grow text-dark"></div>
                    <div className="spinner-grow text-light"></div>
                </div>
                </div>}
           {forms && !spiner &&
            <form className="form" onSubmit={formHandler}>
                <input 
                    name="number" 
                    type="text" 
                    className="form__inputText" 
                    placeholder="Enter the wallet address"
                    defaultValue={numbers ===undefined || numbers ===false ?'' : numbers }                 
                />
                {!numbers ? <button className="form__btn" type="submit" >search</button>: <button className="form__btn form__btn-clear" type="submit" >clear</button> }
            </form>
            } 
            {errorNumber && !spiner &&
                <form className="form" onSubmit={formHandler}>
                    <div className="form__error-container">
                        <input 
                            name="number" 
                            type="text" 
                            className="form__inputText form__inputError" 
                            placeholder="Enter the wallet address" 
                            defaultValue={errorAdd ===undefined || errorAdd===false? '': errorAdd}  
                                          
                        />
                        <div className="form__inputError-text">
                            <p>The wrong wallet address format </p>
                        </div>
                    </div>
                    <button className="form__btn form__btn-clear form__error-btn" type="submit" >clear</button>
                </form>
            }         
       
        <div className="cardS"> 
            { allList[0]?.length>1 &&  allList[0]?.slice(0,5).map((el)=> <Card key={el.hash}  el={el} cash={eth} /> )} 
        </div>
    </>
    );

}

export default Form;