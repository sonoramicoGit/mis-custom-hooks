import  { useEffect, useRef, useState } from 'react'
//import {renderHook} from'@testing-library/react-hooks';
export const useFech = (url) => {

 // console.log("Entra useFech");

 const isMounted = useRef(true);
  
const [state, setstate] = useState({data:null, loading:true,error:null});

//este efecto realizara el cambio de ref y esto ocurrira al desmontarse este componente
useEffect(()=>{
   
   return ()=> isMounted.current=false;
},[]);


useEffect(() => { 
 // console.log("Entra useEffect");
 setstate({data:null,loading:true,error:null});
//console.log("sale setstate loading false useEffect");
     fetch(url).then(resp=>resp.json()).then(data=>{
      // console.log(data);
      //console.log("set state url-->");
        if(isMounted.current){
            setstate({data,loading:false,error:null});   
            
         }       
       //console.log("set state url sale-->");
     });
    
 }, [url]);
 
 return state; 

}//fin usseFech
