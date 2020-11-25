import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { useParams } from "react-router-dom";
import axiosCall from "../../../utils/axiosCall";
import { useSelector } from "react-redux";

import AdminNAvBar from "../AdminNavBar/AdminNavBar";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),

    display: "flex",

    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  seeMore: {
    marginTop: theme.spacing(3),
  },
  input: {
    marginTop: 20,
  },
  button: {
    marginTop: 20,
  },
}));

export default function EditProductS() {
  const title = "Edit Product";
  const classes = useStyles();

  const params = useParams();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [outstanding, setOutstanding] = useState(false);
  const [categoryId, setCategoryId] = useState(null);
  const [categories, setCategories] = useState(null);
  const token = useSelector((state) => state.user.token);
  const [files, setFiles] = useState(null);

  //const category = categories.find(categ => categ._id==categoryId)

  useEffect(() => {
    axiosCall(`/admin/products/${params.slug}`, "get", token, null).then(
      (res) => {
        setId(res.data._id);
        setName(res.data.name);
        setDescription(res.data.description);
        setImage(res.data.image);
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
    const formData = new FormData();
    formData.append("_id", id);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("stock", stock);
    formData.append("outstanding", outstanding);
    formData.append("category", categoryId);

    // Update the formData object
    formData.append("image", files, files.name);

    console.log("FORMDATA: ", formData);
    await axiosCall(
      `/admin/products`,
      "patch",
      token,
      null,
      formData
    ).then((res) => console.log(res.data));
  }

  function uploadFiles(event) {
    setFiles(event.target.files[0]);
  }

  console.log("CATEGORIES: ", categories);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AdminNAvBar title={title} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container className={classes.container}>
          <Grid container spacing={3} justify="center">
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <form
                  onSubmit={(e) => handleUpdate(e)}
                  encType="multipart/form-data"
                >
                  <FormControl>
                    <InputLabel htmlFor="name"></InputLabel>
                    <Input
                      id="name"
                      type="text"
                      name="name"
                      arial-aria-describedby="name-helper"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <FormHelperText id="name-helper">
                      Name of the product
                    </FormHelperText>
                  </FormControl>

                  <FormControl>
                    <InputLabel htmlFor="description"></InputLabel>
                    <Input
                      id="description"
                      type="text"
                      name="description"
                      arial-aria-describedby="description-helper"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows="3"
                    />
                    <FormHelperText id="description-helper">
                      Description of this product
                    </FormHelperText>
                  </FormControl>
                  <FormControl>
                    <input
                      className={classes.input}
                      accept="image/*"
                      type="file"
                      multiple
                      onChange={(e) => uploadFiles(e)}
                      name="image"
                      id="image"
                      placeholder=""
                      aria-describedby="fileHelpId"
                    />
                  </FormControl>
                  <FormControl>
                    <InputLabel htmlFor="price"></InputLabel>
                    <Input
                      id="price"
                      type="number"
                      name="price"
                      arial-aria-describedby="price-helper"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                    <FormHelperText id="price-helper">
                      Price of the product
                    </FormHelperText>
                  </FormControl>
                  <FormControl>
                    <InputLabel htmlFor="stock"></InputLabel>
                    <Input
                      id="stock"
                      type="number"
                      name="stock"
                      arial-aria-describedby="stock-helper"
                      value={stock}
                      onChange={(e) => setStock(e.target.value)}
                    />
                    <FormHelperText id="stock-helper">
                      Stock of the product
                    </FormHelperText>
                  </FormControl>
                  <br></br>
                  <FormControl>
                    <InputLabel id="outstanding"></InputLabel>
                    <Select
                      labelId="outstanding"
                      name="outstanding"
                      id="outstanding"
                      type="boolean"
                      value={outstanding}
                      onChange={(e) => setOutstanding(e.target.value)}
                    >
                      <MenuItem value="true">True</MenuItem>
                      <MenuItem value="false">False</MenuItem>
                      ))
                    </Select>
                    <FormHelperText id="outstanding-helper">
                      Product is outstanding
                    </FormHelperText>
                  </FormControl>

                  <br></br>
                  <FormControl>
                    <InputLabel id="categoryId"></InputLabel>
                    <Select
                      labelId="categoryId"
                      name="categoryId"
                      id="categoryId"
                      value={categoryId}
                      onChange={(e) => setCategoryId(e.target.value)}
                    >
                      {categories &&
                        categories.map((category) => (
                          <MenuItem key={category._id} value={category._id}>
                            {category.type}
                          </MenuItem>
                        ))}
                    </Select>
                    <FormHelperText id="category-helper">
                      Category of the product
                    </FormHelperText>
                  </FormControl>
                  <br></br>
                  {/* <FormControl>
                    <InputLabel htmlFor="category"></InputLabel>
                    <Input
                      id="category"
                      type="text"
                      name="category"
                      arial-aria-describedby="category-helper"
                      value={categoryId}
                      onChange={(e) => setCategoryId(e.target.value)}
                    />
                    <FormHelperText id="category-helper">
                      Category of the product
                    </FormHelperText>
                  </FormControl> */}
                  <FormControl>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      type="submit"
                    >
                      Send
                    </Button>
                  </FormControl>
                </form>
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
