import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Projects from './pages/Projects';
import Teams from './pages/Team';
import Messages from './pages/Message';
import Finance from './pages/Financedept';
import Community from './pages/Community';
import Personal from './pages/Personal';
import Club from './pages/Club';
import International from './pages/International';
import Public from './pages/Public';
import Greenlife from './pages/Green';
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
        <Route path='/finance' component={Finance}/>
        <Route path='/personaldevelopment' component={Personal}/>    
        <Route path='/communityservice' component={Community}/> 
        <Route path='/clubservice' component={Club}/> 
        <Route path='/internationalunderstanding' component={International}/>  
        <Route path='/publicrelations' component={Public}/> 
        <Route path='/greenlife' component={Greenlife}/>    
      </Switch>
    </Router>
    <footer>
     <Footer/>
   </footer>
   
   </>   
  );
}

export default App;
