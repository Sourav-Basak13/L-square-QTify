import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";

function Header({ isSongPlayer }) {
  return (
    <>
      <Navbar searchData={[]} />
      {!isSongPlayer && <Hero />}
    </>
  );
}

export default Header;
