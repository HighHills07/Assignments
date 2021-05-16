import './Signin.css'
import{useHistory,Link} from 'react-router-dom'
import {useState} from 'react'
import Dashboard from '../Dashboard/Dashboard'
import Button from '../../Components/Button/Button'
function Signin(){
    
    let history=useHistory();
    const [username, setUsername] =useState('')
    const [password, setPassword] =useState('')
    
    function signin(e) {
        console.log(username);
        console.log(password);
        e.preventDefault()
        if ((username =='Ewura') && (password =='Sam') ){
            history.push('/Dashboard')
        }
        else{
            alert('Wrong username or password.')
        }
    
    }
   
  
 
   function updateUsername(e){
    console.log(e.target.value);
    setUsername(e.target.value)

   }


   function updatePassword(event){
       console.log(event.target.value);
       setPassword(event.target.value)

   }

       
   
    return(

        

        
        <div className='main'>
           
            <form className='f1'>
                <h3 className="welcome">Welcome Back!</h3>
                <input type="text" onChange={updateUsername} value={username} name="Username" placeholder="Username" className="ff1" />
                <h4 className="UN">Username</h4>
                <input type="password" onChange={updatePassword} value={password} name="Password" placeholder="Password" className="ff1"/>
                <h4 className="UN">Password</h4>
               <div className="mydiv">
                <button onClick={signin} className="Sib1">
                    Sign In

                </button>
                </div>
                <Link to='/Signup'>
            
                <a href="#" className="SignUpLink">Don't have an account? Sign up.</a>
                </Link>

                </form>
               
                {/* <Dashboard
          myname="Ewura Ama"
           myage="15"
             /> */}
              {/* <Button 
              buttonClick={}
              buttonname="Signin"
              bgColor="green"
              /> */}

    
       
        </div>


    )
}
export default Signin;