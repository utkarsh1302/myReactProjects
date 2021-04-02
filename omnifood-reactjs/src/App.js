import './App.css';
import { Route ,Switch} from "react-router-dom";
import Main from './components/Main/Main';
 import FoodDelivery from './components/FoodDelivery/FoodDelivery';
import HowItWorks from './components/HowItWorks/HowItWorks';
import OurCities from './components/OurCities/OurCities';
import SignUp from './components/SignUp/SignUp';
function App() {
  return (
    <div className="App">
      <Switch>
       <Route path="/" exact><Main /></Route>
        <Route path="/fooddelivery" component={FoodDelivery} />
      <Route path="/howitworks" component={HowItWorks} />
      <Route path="/ourcities" component={OurCities} />
      <Route path="/signup" component={SignUp} /> 
      
      </Switch>    
    </div>
  );
}

export default App;
