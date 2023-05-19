import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebars from "./Sidebars";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Sidebars />
      <Footer />
    </>
  );
}
