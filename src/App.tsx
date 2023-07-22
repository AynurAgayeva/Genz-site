import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Maps from "./components/Maps";
import Slider from "./components/Slider";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import BlogForm from "./components/admin/BlogForm";
import AddBlog from "./pages/update/AddBlog";
import EditBlog from "./pages/update/EditBlog";
import Dashboard from "./pages/Dashboard";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/loginform" element={<LoginForm />}></Route>
          {/* <Route path="/blogform" element={<BlogForm />}></Route> */}
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/dashboard/add" element={<AddBlog />}></Route>
          <Route path="/dashboard/edit/:id" element={<EditBlog />}></Route>
        </Routes>
        <Slider />
        <Maps />
        <Blog />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
