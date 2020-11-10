import React from "react";
import NavBar from "../NavBar/NavBar";
import Banner from "../Banner/Banner";
import Lista from "../Lista/Lista";
import "./Home.css";

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
      <footer>Footer</footer>
    </>
  );
}
