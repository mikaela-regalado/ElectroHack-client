import React from "react";
import NavBar from "../NavBar/NavBar";
import Banner from "../Banner/Banner";
import Lista from "../Lista/Lista";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Banner />
        <Lista />
      </main>
      <Footer />
    </>
  );
}
