import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AdminNav from "../AdminNav/AdminNav";
import axiosCall from "../../utils/axiosCall";
import "./AdminHome.css";

export default function ModificarCategoria() {
  const params = useParams();
  const [type, setType] = useState(null);
  const [code, setCode] = useState(null);
  const [description, setDescription] = useState(null);
  const [image, setImage] = useState(null);
  const [productList, setProductList] = useState(null);
  const [categories, setCategories] = useState(null);
  const [files, setFiles] = useState(null);
  const [id, setId] = useState(null);
  const [categoryId, setCategoryId] = useState(0);
  const token = useSelector((state) => state.user.token);

  //const category = categories.find(categ => categ._id==categoryId)

  useEffect(() => {
    axiosCall(`/admin/categories/${params.slug}`, "get", token, null).then(
      (res) => {
        console.log("RES: ", res.data);
        setId(res.data._id);
        setType(res.data.type);
        setCode(res.data.code);
        setDescription(res.data.description);
        setImage(process.env.REACT_APP_URL_S3 + res.data.image);
        /*  setProductList(...res.data.productList); */
        setCategoryId(res.data._id);
      }
    );
    axiosCall("/categories", "get").then((res) => setCategories(res.data));
  }, []);

  function uploadFiles(event) {
    setFiles(event.target.files[0]);
  }

  async function handleUpdate(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("code", code);
    formData.append("type", type);
    formData.append("description", description);
    /* formData.append("productList", productList); */
    // Update the formData object
    formData.append("image", files, files.name);

    console.log("FORMDATA: ", formData);
    await axiosCall(
      `/admin/categories`,
      "patch",
      token,
      null,
      formData
    ).then((res) => console.log(res.data));
  }

  return (
    <>
      <header>
        <AdminNav />
      </header>
      <div className="principal">
        <div className="formulario table">
          <h2>Modificar una Categoria</h2>
          <form
            className="formulario2"
            onSubmit={(e) => handleUpdate(e)}
            encType="multipart/form-data"
          >
            <div className="form-group">
              <label for="name">Nombre de la Categoría</label>
              <input
                className="form-control"
                type="type"
                id="type"
                name="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              />
            </div>
            {/* <div className="form-group">
                <label for="slug">Slug</label>
                <input
                  className="form-control"
                  type="slug"
                  id="slug"
                  name="slug"
                  onChange={(e) => setSlug(e.target.value)}
                  placeholder="Titulo de la Categoría"
                />
              </div> */}
            <div className="form-group">
              <label for="description">Descripción</label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="3"
              ></textarea>
            </div>

            <div className="form-group">
              <label for="exampleFormControlFile1">
                Ingrese imagen de la Categoría
              </label>
              <input
                type="file"
                multiple
                onChange={(e) => uploadFiles(e)}
                className="form-control-file upload-img"
                id="exampleFormControlFile1"
                name="image"
                id="image"
                placeholder=""
                aria-describedby="fileHelpId"
              />
            </div>

            <button className="btn btn-secondary enviar">Agregar</button>
          </form>
        </div>
      </div>
    </>
  );
}
