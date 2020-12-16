import './App.css';
import Landing from './landing/Landing'
import Projects from './projects/Projects'
import Contact from './contact/Contact'
import Footer from './Footer'
import React, {useEffect, useRef} from 'react'

function App() {

  let projects = useRef(null);
  let contact = useRef(null);

  useEffect(()=>{
    
  }, [])

  const clickedProjects = () => {
    projects.current.scrollIntoView({behavior: "smooth"});
  }

  const clickedContact = () => {
    contact.current.scrollIntoView({behavior: "smooth"});
  }

  return (
    
    <div className="App">
     <nav id="navbar">
            <ul>
                <li>Home</li>
                <li onClick={clickedProjects}>Projects</li>
                <li onClick={clickedContact}>Contact</li>
            </ul>
      </nav>
      <Landing/>
      <div ref={projects}><Projects/></div>
      <div ref={contact}><Contact/></div>
      <Footer/>
    </div>
  );
}

export default App;
