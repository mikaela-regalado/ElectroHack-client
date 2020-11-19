import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux"
import AdminNav from "../AdminNav/AdminNav";
import axiosCall from "../../utils/axiosCall"

export default function AgregarProducto() {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState(0)
  const [stock, setStock] = useState(0)
  const [outstanding, setOutstanding] = useState(false)
  const [category, setCategory] = useState("5faead6f5f6c071d9c96ffd6") 
  const [categories, setCategories] = useState(0) 
  const [files, setFiles] = useState(null)
  const admin = useSelector(state => state.user)
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYjJjNWIzMWMxZjA0MWY2YzcwYjA1ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYwNTU1MjY2NH0.sd5VJBW0-yqbE-bV2YuuSyCDxLL9sYCW3rK08FX5al4"

  useEffect(() => {
    axiosCall("/categories", "get").then((res) => setCategories(res.data));
  }, []);

  function uploadFiles(event) {
    setFiles(event.target.files[0]);
  }

  async function handleStore(event) {
event.preventDefault();
/* const product = {
  name: name,
  description: description,
  image:image,
  price:price ,
  stock:stock,
  outstanding:outstanding ,
  category:category,}
 */
  const formData = new FormData();
  formData.append("name", name);
  formData.append("description", description);
  formData.append("price", price);
  formData.append("stock", stock);
  formData.append("outstanding", outstanding);
  formData.append("category", category);
// Update the formData object
  formData.append("image", files, files.name);

await axiosCall("/admin/products", "post", token, null, formData ).then((res) => console.log(res.data));
  }

  

  return (
    <div className="main">
      <header>
        <AdminNav />
      </header>

      <div className="formulario">
        <form className="formulario2" 
        onSubmit={(e) => handleStore(e)}
        encType="multipart/form-data">
          <div className="form-group">
            <input
              class="form-control"
              type="text"
              id="name"
              name="name"
              onChange={e => setName(e.target.value)}
              placeholder="Titulo del producto"
            />
          </div>
          <div class="form-group">
            <label for="description"></label>
            <textarea
              class="form-control"
              id="description"
              name="description"
              placeholder="Ingresa la descripción del pedido"
              onChange={e => setDescription(e.target.value)}
              rows="3"
            ></textarea>
          </div>

          <div className="form-group">
            <label for="exampleFormControlFile1">
              Ingrese imagen del producto
            </label>
            <input
              type="file"
              multiple
              onChange={e =>uploadFiles(e)}
              className="form-control-file"
              id="exampleFormControlFile1"
              name="image"
                      id="image"
                      placeholder=""
                      aria-describedby="fileHelpId"
            />
          </div>

          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                name="price"
                onChange={e => setPrice(e.target.value)}
                placeholder="ingrese precio del producto"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                name="stock"
                onChange={e => setStock(e.target.value)}
                placeholder="ingrese stock del producto"
              />
              
            </div>
          </div>
          <div className="row mt-5">
          <div className="col">
          <label for="outstanding">Producto destacado: 
              <select name="outstanding" id="outstanding" onChange={e => setOutstanding(e.target.value)}>
                <option value="true">True</option>
                <option value="false">False</option>
              </select></label>
          </div>
          <div className="col">
          <label for="category">Categoría: </label>
              <select name="category" id="category" onChange={e => setCategory(e.target.value)}>
                {categories && categories.map(category => <option key={category._id} value={category._id}>{category.type}</option> )}
              </select>
          </div>
              
          </div>
          <button>Enviar</button>
        </form>
      </div>
    </div>
  );
}
