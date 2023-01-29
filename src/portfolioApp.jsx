import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./blog";
import BlogDetial from "./blogdetail";
import Homepage from "./homepage";
import NavigationBar from "./navigationbar";

function App() {
  return (
    <div className="bg-slate-800">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="blog" element={<Blog />} />
          <Route path="blog/blogs/:id" element={<BlogDetial />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
