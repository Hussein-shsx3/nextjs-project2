import React from "react";
import Header from "./component/header";
import Home from "./component/home";
import About from "./component/about";
import Popular from "./component/popular";
import Explore from "./component/explore";
import Footer from "./component/footer";
const Page = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Popular />
      <Explore />
      <Footer />
    </div>
  );
};

export default Page;
