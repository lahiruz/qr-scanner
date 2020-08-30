import React from "react";

import { GlobalStyle, AppWrapper } from './App.style.js';
import Event from './events/event';

function App() {
  return (
    <AppWrapper>
      <GlobalStyle/>
      <Event></Event>
    </AppWrapper>
  );
}

export default App;
