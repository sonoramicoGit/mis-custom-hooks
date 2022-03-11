import { useState } from 'react';


export const useCounter =( (initiaState=1) => {
 //   console.log("Entra useCounter"+initiaState);
  
const [state, setstate] = useState(initiaState);
//console.log(state);

const increment=(factor = 1)=>{
    //console.log("incrementa--->");
    setstate(state+factor);
   // console.log("incrementa sale--->");
}

const decrement=(factor = 1)=>{
    setstate(state-factor);
}
const reset=()=>{
    setstate(initiaState);
}
//voy a reresar la logica de mi contador
return {
    state,
    increment,
    decrement,
    reset
};

}
)
