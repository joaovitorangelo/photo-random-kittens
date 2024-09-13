import React from "react";
// import { Outlet } from "react-router-dom"
import GenerateRandomCats from "./components/generate-random-cats";

import "./App.css"

function App() {
  return (
    <div className="App">
      <GenerateRandomCats />
      {/* <Outlet /> */}
    </div>
  )
}

export default App
