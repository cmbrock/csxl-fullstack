import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from './components/link/Link';
import UserAvatar from './components/UserAvatar';

const NAME = "Colin";

// Base page formatting... feel free to edit!
const StyledApp = styled.div`
  background: linear-gradient(135deg, #68C32B, #7B2BC2);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  font-family: 'Poppins', sans-serif;
  gap: 16px;
`
const StyledH2 = styled.h2`
  margin 0px;
`

function App() {
  // TODO: fetch links from API and store them to display on our page!
  const [links, setLinks] = useState([]);

  function fetchLinks() {
    fetch("http://localhost:8000/api/links")
    .then(data => data.json())
    .then(result => {
      setLinks(result);
    })
  }

  useEffect(
    () => {
      fetchLinks();
    },
    []
  );

  return (
    <StyledApp>
      <StyledH2>{NAME}'s XLinks</StyledH2>
      <UserAvatar alt="Profile picture" src="https://c.tenor.com/evZ0NI7XMwMAAAAM/corgi-swimming.gif" />
      {links.map(link => (
        <Link url={link.url} title={link.display_name} />
      ))}
    </StyledApp>
  );
}

export default App;
