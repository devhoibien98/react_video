import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Content from "./Content";
import Footer from "./Footer";

export default function Day1() {
  return (
    <div className="row">
      <div>
        <Header />
      </div>
      <div className="col-4 pe-0">
        <Navbar />
      </div>
      <div className="col-8 ps-0">
        <Content />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
