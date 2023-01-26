import { BrowserRouter as Router} from "react-router-dom";
import { Switch, Route, Routes } from "react-router-dom";
import React from "react";
import Blog from "./blog";
import BlogDetial from "./blogdetail";
import Homepage from "./homepage";
import NavigationBar from "./navigationbar";

function App() {
  return (
    <div className="bg-slate-800">
 <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogs" element={<BlogDetial />} />
      </Routes>
    </Router>
    </div>
   
  );
}

export default App;
