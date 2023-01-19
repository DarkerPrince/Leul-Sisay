import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Blog from "./blog";
import BlogDetial from "./blogdetail";
import Homepage from "./homepage";
import NavigationBar from "./navigationbar";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="blog" element={<Blog />} />
        <Route path="blogs" element={<BlogDetial />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
