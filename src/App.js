import React from "react";
import Quotes from "./Quotes/Quotes";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Quotes />
      <Footer />
    </div>
  );
}

export default App;
