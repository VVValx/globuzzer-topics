import React from "react";
import Topic from "./components/pages/topic/topic";
import ScrollTop from "./components/scrollTop/scrollTop";
import Footer from "./components/footer/footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ScrollTop />
      <Topic />
      <Footer />
    </div>
  );
}

export default App;
