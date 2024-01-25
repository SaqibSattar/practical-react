import React, { useState } from "react";
import "./App.css";

import ReactPlayer from "react-player";

const App = () => {
  return (
    <div>
      <ReactPlayer 
      controls
      width="480px"
      height="240px"
      onReady={() => { console.log('onReady Callback')}}
      onStart={() => { console.log('onStart Callback')}}
      onPause={() => { console.log('onPause Callback')}}
      onEnded={() => { console.log('onEnded Callback')}}
      onError={() => { console.log('onError Callback')}}
      url="https://www.youtube.com/watch?v=LXb3EKWsInQ" />
    </div>
  );
};

export default App;
