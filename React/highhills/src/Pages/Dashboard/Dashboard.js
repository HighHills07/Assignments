import './Dashboard.css'
import {useState,useContext,useEffect} from 'react'
import Button from '../../Components/Button/Button'
import {MyContext} from '../../Store/Context'

function Dashboard(props){



      // let {username, setUsername } =useContext(MyContext)

      useEffect(() => {
            console.log ('message') ;
             
         
      })
      useEffect(() => {
            console.log ('message1') ;
             
         
      }, [] )

      
return(


      <div className="dbmain3">
            <div className="top">

                  {/* <p>Welcome:{username} </p> */}

            </div>
            {/* <Button
            buttonname="Welcome"
            bgColor="blue"
            /> */}
            
           


            <div className="down">

            </div>

      </div>





)





}




























export default Dashboard;