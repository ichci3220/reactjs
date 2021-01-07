import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Projects from './pages/Projects';
import Teams from './pages/Team';
import Messages from './pages/Message';
import Footer from './components/Footer'
function App() {
  return (
    <>
    <Router>
      <Navbar/> 
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/reports' component={Reports}/>
        <Route path='/projects' component={Projects}/>
        <Route path='/team' component={Teams}/>
        <Route path='/messages' component={Messages}/>        
      </Switch>
    </Router>
    <footer>
     <Footer/>
   </footer>
   
   </>   
  );
}

export default App;
