import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import FloatingPanel from "./components/FloatingPanel";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import Contacts from "./pages/Contact";
import NavBar from "./components/NavBar";
import Blog from "./pages/Blog";
import ImageUpload from "./pages/ImageUpload";
import ProjectAdmin from "./pages/ProjectAdmin";

function App() {
  return (
    <>
      <FloatingPanel />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/du-an" element={<Products />} />
          <Route path="/du-an/:id" element={<ProductDetail />} />
          <Route path="/gioi-thieu" element={<About />} />
          <Route path="/bao-gia" element={<Contacts />} />
          <Route path="/bai-viet" element={<Blog />} />
          <Route path="/uploads" element={<ImageUpload />} />
          <Route path="/project-admin" element={<ProjectAdmin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
