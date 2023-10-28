import React from "react";
import About from "./Components/About";
import Blogs from "./Components/Blogs";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Homes from "./Components/Homes";
import Menu from "./Components/Menu";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Review from "./Components/Review";

function App() {
  return (
    <>
      <Navbar/>
     <Homes/>
     <About/>
     <Menu/>
     <Products/>
     <Review/>
     <Contact/>
     <Blogs/>
     <Footer/>
 
      
    </>
  );
}

export default App;
