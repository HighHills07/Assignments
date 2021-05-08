import './Signup.css'
import{useHistory} from 'react-router-dom'
import {useState} from 'react'
function Signup(){
    const[password, setPassword] =useState('')
    const[confirm,setConfirm] =useState('')

    let history=useHistory();
    function signup (e) {
        console.log(password);
        console.log(confirm);
        e.preventDefault()
        if ((password=='2401SEE!') && (confirm=='2401SEE!')) {
            history.push('/Dashboard')
        }
        else{
             alert('Password does not match the confirmation.')
        }
       
        
    }


function updatePassword(e) {
    console.log(e.target.value);
    setPassword(e.target.value)
}

function updateConfirm(event) {
    console.log(event.target.value);
    setConfirm(event.target.value)
    
}




    return(
        <div className="baba">
           
                <form className="kuku">
                    <h3>We are glad to have you join us. Please sign up here.</h3>
                   
                    <input type="text" placeholder="Type your first name here" className="kk1"/>
                    <h4 className="k1">First Name</h4>
                    <input type="text" placeholder="Type your last name here" className="kk1"/>
                    <h4 className="k1">Last Name</h4>
                    <input type="text" name="email" placeholder="email@example.com" className="kk1" autoFocus/>
                    <h4 className="k1">Email</h4>
                    <input type="password" placeholder="Type your password here" onChange={updatePassword} value={password} className="kk1"/>
                    <h4 className="ki">Password</h4>
                    <input type="password" placeholder="Confirm password here" onChange={updateConfirm} value={confirm} className="kk1"/>
                    <h4 className="ki">Confirm Password</h4>
                   <button onClick={signup} class="kkb">
                        Signup
                    </button>



                </form>

               <h1 class="h1">This is High Hills Incoporated. Please fill the form on your right.</h1>
               
           
        </div>
    )

}

export default Signup;