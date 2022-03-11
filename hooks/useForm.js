import  {  useEffect, useState } from 'react'

export const useForm = (inicialState={}) => {
   // console.log('Entrando useForm--->');
    const [values, setValues] = useState(inicialState);
    const reset=()=>{
        setValues(inicialState);
    };

   
    const handleInputChange=({target})=>{
        setValues({
            ...values,
            [target.name]:target.value
        });
        };//fin handleInputChange

        return [ values, handleInputChange,reset];//regreso en forma de arreglo
};
