/** @format */

import React from 'react';
import Main from './components/Main';
import Navbar from './components/Navbar';
import { SliderData } from './data/SliderData';
import GlobalStyle from './globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Main slides={SliderData}/>
    </>
  );
}

export default App;
