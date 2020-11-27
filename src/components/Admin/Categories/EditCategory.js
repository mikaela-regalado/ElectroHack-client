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

export default function EditCategory() {
  const title = "Edit Category";
  const classes = useStyles();

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
        setImage(res.data.image);
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
                  className={classes.paper}
                  onSubmit={(e) => handleUpdate(e)}
                  encType="multipart/form-data"
                >
                  <FormControl>
                    <InputLabel htmlFor="type"></InputLabel>
                    <Input
                      id="type"
                      type="type"
                      name="type"
                      arial-aria-describedby="type-helper"
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                    />
                    <FormHelperText id="type-helper">
                      Type of this category
                    </FormHelperText>
                  </FormControl>

                  <FormControl>
                    <InputLabel htmlFor="description"></InputLabel>
                    <Input
                      id="description"
                      type="description"
                      name="description"
                      arial-aria-describedby="description-helper"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows="3"
                    />
                    <FormHelperText id="description-helper">
                      Description of this category
                    </FormHelperText>
                  </FormControl>
                  <FormControl>
                    <input
                      className={classes.input}
                      accept="image/*"
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
                  </FormControl>
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
