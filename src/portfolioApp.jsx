import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./blog";
import BlogDetial from "./blogdetail";
import Homepage from "./homepage";
import NavigationBar from "./navigationbar";
import ResumeShowPage from "./resume";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./ScrolltoTop";



function App() {

  

  return (
    <div className="bg-slate-800">
      <BrowserRouter>
      <NavigationBar/>
        <ScrollToTop/>
        <AnimatePresence initial={false} mode="wait">
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/blog" element={<Blog />} />
          <Route path="/resume" element={<ResumeShowPage />} />
          <Route path="/blog/blogs/:id" element={<BlogDetial/>} />
        </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </div>
  );
}

export default App;
