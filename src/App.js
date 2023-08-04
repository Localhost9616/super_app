import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "./components/page1";
import Page2 from "./components/page2";
import Page3 from "./components/page3";
import Page4 from "./components/page4";

const App = ()=>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1/>} />
          <Route path="/categories" element={<Page2/>} />
          <Route path="/dashboard" element={<Page3/>} />
          <Route path="/movies" element={<Page4/>} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
    // <>
    //   <Page1/>
    //   <Page2/>
    //   <Page3/>
    //   <Page4/>
    // </>
  ) 
};

export default App;
