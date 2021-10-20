import{addCashAC,addAllAC} from '../action/ActionCreator'

export const ThunkAddCash = ()=>{
 return(dispatch)=>{
    
        fetch(
            `https://api.etherscan.io/api?module=account&action=balance&address=0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a&tag=latest&apikey=YourApiKeyToken`
            )
            .then(res=>res.json())
            .then(data=>dispatch(addCashAC(data.result)))
            .catch(error=>console.log(error)
        ) 
    }
}

export const ThunkAllCArd = (numbers)=>{
    console.log("numbers",numbers);
    return(dispatch)=>{
          
           fetch(
        `https://api.etherscan.io/api?module=account&action=txlist&address=${numbers}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=YourApiKeyToken`
        )
        .then(res=>res.json())
        // .then(data=>console.log(data))
        .then(data=>dispatch(addAllAC(data.result)))
        .catch(error=>console.log(error))  
       }
   }