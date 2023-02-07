import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
// import Blogs from "./components/blogs";
// import OnePost from "./components/Blogslug";
import Quotes from "./components/quotes";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Home from "./home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/blogs/:slug" element={<OnePost />} /> */}
        {/* <Route path="/blogs" element={<Blogs />} /> */}
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
