import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AdminNav from "../AdminNav/AdminNav";
import axiosCall from "../../utils/axiosCall";

export default function AgregarProducto() {
  const params = useParams();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [outstanding, setOutstanding] = useState(false);
  const [categoryId, setCategoryId] = useState(0);
  const [categories, setCategories] = useState(0);
  const token = useSelector((state) => state.user.token);

  //const category = categories.find(categ => categ._id==categoryId)

  useEffect(() => {
    axiosCall(`/admin/products/${params.slug}`, "get", token, null).then(
      (res) => {
        setId(res.data._id);
        setName(res.data.name);
        setDescription(res.data.description);
        setImage(process.env.REACT_APP_URL_S3 + res.data.image);
        setPrice(res.data.price);
        setStock(res.data.stock);
        setOutstanding(res.data.outstanding);
        setCategoryId(res.data.category);
      }
    );
    axiosCall("/categories", "get").then((res) => setCategories(res.data));
  }, []);

  async function handleUpdate(event) {
    event.preventDefault();
    const product = {
      _id: id,
      name: name,
      description: description,
      image: image,
      price: price,
      stock: stock,
      outstanding: outstanding,
      category: categoryId,
    };
    await axiosCall(
      `/admin/products`,
      "patch",
      token,
      null,
      product
    ).then((res) => console.log(res.data));
  }

  return (
    <div className="main">
      <header>
        <AdminNav />
      </header>

      <div className="formulario">
        <form className="formulario2" onSubmit={(e) => handleUpdate(e)}>
          <div className="form-group">
            <input
              class="form-control"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Titulo del producto"
            />
          </div>
          <div class="form-group">
            <label for="description"></label>
            <textarea
              class="form-control"
              id="description"
              name="description"
              value={description}
              placeholder="Ingresa la descripción del pedido"
              onChange={(e) => setDescription(e.target.value)}
              rows="3"
            ></textarea>
          </div>

          <div className="form-group">
            <label for="exampleFormControlFile1">
              Ingrese imagen del producto
            </label>
            <input
              type="file"
              className="form-control-file"
              id="exampleFormControlFile1"
            />
          </div>

          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="ingrese precio del producto"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                name="stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                placeholder="ingrese stock del producto"
              />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <label for="outstanding">
                Producto destacado:
                <select
                  name="outstanding"
                  id="outstanding"
                  onChange={(e) => setOutstanding(e.target.value)}
                  value={outstanding}
                >
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
              </label>
            </div>
            <div className="col">
              <label for="category">Categoría: </label>
              <select
                name="category"
                id="category"
                onChange={(e) => setCategoryId(e.target.value)}
                value={categoryId}
              >
                {categories &&
                  categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.type}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <button>Enviar</button>
        </form>
      </div>
    </div>
  );
}
