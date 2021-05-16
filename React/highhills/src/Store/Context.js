import {createContext,useState} from 'react'



const MyContext=createContext();

function MyProvider(props){
    const [username, setUsername]=useState('Ewura Ama')
    
return(


       <MyContext.Provider value={{username,setUsername}} >

           {
               props.children
           }



       </MyContext.Provider>






)





}

export {MyContext, MyProvider}