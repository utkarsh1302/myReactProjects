//import logo from './logo.svg';
import './App.css';
import logo from './resources/images/logo-white.png';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <img href="#" src={logo} alt="OmniFoods logo" className="logo"></img>
          <ul className="main-nav">
            <li><a href="#">Food Delivery</a></li>
            <li><a href="#">How it works</a></li>
            <li><a href="#">Our Cities</a></li>
            <li><a href="#">Sign Up </a></li>
          </ul>
        </nav>
        <div className="hero-text-box"><h1>Goodbye junk food.<br></br> Hello super healthy meals.</h1>
          <a className="btn btn-full" href="#"> I’m hungry</a>
          <a className="btn btn-ghost" href="#"> Show me more</a>
          
        </div>
      </header>
    </div>
  );
}

export default App;
