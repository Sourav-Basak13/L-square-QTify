import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";

function Header({ showHero }) {
  return (
    <>
      <Navbar searchData={[]} />
      {showHero && <Hero />}
    </>
  );
}

export default Header;
