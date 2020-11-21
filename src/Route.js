import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from "./components/navigation"
import Shoe from './components/Shoe';
import Hike from './components/hike';
import Ladies from './components/ladies';
import Sandals from './components/sandals';
import Skates from './components/skates';


function routeconfig(){     
    
   return( 
     <div>
       <Router>
         <Navigation />
       <Switch>
          <Route exact path="/" component={Shoe} exact/>
          <Route path="/Hike" component={Hike}/>
          <Route path="/ladies" component={Ladies}/>
        
         <Route path="/sandals" component={Sandals}/>

         <Route path="/skates" component={Skates}/>
         <Route path="*" components={()=><h2>404 Not Found !</h2>}/>
        </Switch>


       </Router>
        
     </div> 
 
     
   )
}
export default routeconfig;