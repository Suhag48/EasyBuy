import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/Header";
import Contact from "./pages/contact/Contact";
import "./App.css";
import RegisterForm from "./pages/register/RegisterForm";
import LoginForm from "./pages/login/Login";
import Footer from "./components/Footer";
import About from "./pages/about/About";
import Products from "./pages/products/Products";
import SingleProduct from "./pages/singleProduct/SingleProduct";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
