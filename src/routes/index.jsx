import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../screens/Home";
import BlogSearchPage from "../screens/BlogSearchPage";
import BlogDetails from "../screens/BlogDetails";

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<BlogSearchPage />} />
        <Route path="/blog-details" element={<BlogDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default index;
