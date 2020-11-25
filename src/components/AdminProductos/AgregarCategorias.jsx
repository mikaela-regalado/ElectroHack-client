import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import AdminNav from "../AdminNav/AdminNav";
import axiosCall from "../../utils/axiosCall";
import "./AdminHome.css";

export default function AgregarCategoria() {
  const [type, setType] = useState(null);
  const [code, setCode] = useState(null);
  const [description, setDescription] = useState(null);
  const [categories, setCategories] = useState(null);
  const [files, setFiles] = useState(null);
  
  const admin = useSelector((state) => state.user);

  useEffect( () => {
    axiosCall("/categories", "get")
    .then((res) => {
      setCategories(res.data);
      setCode(res.data.length + 1)});
    
  }, []);

  

  function uploadFiles(event) {
    setFiles(event.target.files[0]);
  }

  async function handleStore(event) {
    event.preventDefault();
 
    const formData = new FormData();
    formData.append("code", code);
    formData.append("type", type);
    formData.append("description", description);
    // Update the formData object
    formData.append("image", files, files.name);

    await axiosCall(
      "/admin/categories",
      "post",
      admin.token,
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
          <h2>Agregar una Categoria</h2>
          <form
            className="formulario2"
            onSubmit={(e) => handleStore(e)}
            encType="multipart/form-data"
          >
            <div className="form-group">
              <label for="name">Nombre de la Categoría</label>
              <input
                className="form-control"
                type="type"
                id="type"
                name="type"
                onChange={(e) => setType(e.target.value)}
                placeholder="Titulo de la Categoría"
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
                placeholder="Ingresa la descripción de la categoría"
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
