import './App.css';
import Home from './Components/Home';
import Nav from './Components/nav.js';

export default function App() {
  return (
    <div className='App'>

      <div className='App-Header'>
        <Nav homenavtext='Home' aboutnavtext = 'About'  contactnavtext = 'Contact'/>
      </div>
      <div className='container'>
        <Home></Home>
      </div>
    </div>
      );
}
