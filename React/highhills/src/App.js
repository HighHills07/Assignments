// import Signup from './Pages/Signup/Signup'
// import Signin from './Pages/Signin/Signin'
// import Dashboard from './Pages/Dashboard/Dashboard'
import {Switch, Route} from 'react-router-dom'
import Signup2 from './Assignment3/Signup2'
import Dashboard2 from './Assignment3/Dashboard2'
import Profile from './Assignment3/Profile'
import Notifications from './Assignment3/Notifications'
function App() {
  return (
   <div>
   <Switch>
      
      {/* <Route exact path='/' component={Signin}/>
      <Route exact path='/Signup' component={Signup}/>
      <Route exact path='/Dashboard' component={Dashboard}/>
      
       */}
       <Route exact path='/' component={Signup2} />
       <Route exact path='/Dashboard' component={Dashboard2} />
       <Route exact path='/Profile' component={Profile} />
       <Route exact path='/Notifications' component={Notifications} />



    </Switch>

    <Signup2/>

    

    </div>
      
    
    
  )
}


export default App;
