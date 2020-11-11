import React, {useEffect, useState} from "react";
import NavBar from "../NavBar/NavBar";
import Banner from "../Banner/Banner";
import Lista from "../Lista/Lista";
import Footer from "../Footer/Footer";
import axios from "axios";

export default function Home() {
const [productos, setProductos] = useState([])

useEffect(() => {
  axios({
    method: 'get',
    url: `http://localhost:8000/products`
  }).then((res) => setProductos(res.data))
}, [])

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Banner />
        <Lista productos={productos} />
      </main>
      <Footer />
    </>
  );
}
