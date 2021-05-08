import Signup from './Pages/Signup/Signup'
import Signin from './Pages/Signin/Signin'
import Dashboard from './Pages/Dashboard/Dashboard'
import {Switch, Route} from 'react-router-dom'
function App() {
  return (
    <Switch>
      
      <Route exact path='/' component={Signin}/>
      <Route exact path='/Signup' component={Signup}/>
      <Route exact path='/Dashboard' component={Dashboard}/>



    </Switch>
      
      
    
  )
}


export default App;
