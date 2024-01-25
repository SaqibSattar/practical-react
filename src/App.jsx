import React, { useState } from "react";
import "./App.css";

import { BounceLoader, BarLoader, BeatLoader, MoonLoader } from "react-spinners";

const App = () => {
  return (
    <div>
    <BounceLoader
        color={'blue'}
        loading
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <BarLoader
        color={'green'}
        loading
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <BeatLoader
        color={'orange'}
        loading
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <MoonLoader
        color={'black'}
        loading
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
      
  );
};

export default App;
