import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "../Dashboard/Title";

import axiosCall from "../../../utils/axiosCall";
import { useSelector } from "react-redux";

import Orders from "../Dashboard/Orders";

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
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
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
}));

function preventDefault(event) {
  event.preventDefault();
}

export default function Dashboard() {
  const title = "Products";
  const classes = useStyles();

  const [productos, setProductos] = useState([]);
  const token = useSelector((state) => state.user.token);

  function handleDelete(id) {
    console.log(id);
    axiosCall("/admin/products", "delete", token, null, { _id: id });
    setProductos([...productos].filter((producto) => producto._id !== id));
  }

  useEffect(() => {
    axiosCall("/products", "get", null, null).then((res) =>
      setProductos(res.data)
    );
  }, []);

  console.log(productos);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AdminNAvBar title={title} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <React.Fragment>
                  <Title>Products</Title>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Slug</TableCell>
                        <TableCell>Edit</TableCell>
                        <TableCell align="right">Delete</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {productos.map((producto) => {
                        return (
                          <TableRow key={producto._id}>
                            <TableCell>{producto.name}</TableCell>
                            <TableCell>{producto.description}</TableCell>
                            <TableCell>{producto.slug}</TableCell>
                            <TableCell>
                              <Link
                                to={`/admin/productos/modificar/${producto.slug}`}
                                type="button"
                                className="text-primary "
                              >
                                <i class="fas fa-edit"></i>
                              </Link>
                            </TableCell>
                            <TableCell align="right">
                              <i
                                className=" mt-2 fas fa-trash-alt"
                                onClick={() => handleDelete(producto._id)}
                              ></i>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                  <div className={classes.seeMore}>
                    <Link color="primary" href="#" onClick={preventDefault}>
                      See more orders
                    </Link>
                  </div>
                </React.Fragment>
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
