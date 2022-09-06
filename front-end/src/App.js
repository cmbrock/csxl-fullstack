import './App.css';
import Link from "./components/Link";
import UserAvatar from './components/UserAvatar';
import React, { useState, useEffect } from 'react';

const NAME = "Claire";

function App() {
  const [links, setLinks] = useState([]);

  function fetchLinks() {
    let response = fetch('http://localhost:8000/api/links')
      .then(result => result.json())
      .then(data => {
        setLinks(data);
        console.log({links})
      })
    
  }

  useEffect(() => {
    fetchLinks();
  }, []);
  
  return (
    <div className="App">
      <header id="stack" className="App-header">
        {NAME}'s LinkTree
        <UserAvatar alt={`Avatar for ${NAME}`} src='https://s.abcnews.com/images/Technology/jupiter-webb-telescope-01-ht-iwb-220822_1661177358675_hpMain_1x1_992.jpg' />
      </header>
      <div id="stack">
        {links.map(i => (
          <Link link={i.url} title={i.display_name} />
        ))}
      </div>
    </div>
  );
}

export default App;
