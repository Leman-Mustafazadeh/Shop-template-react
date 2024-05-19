import React, { useContext, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import styles from "./index.module.scss";
import { useFormik } from "formik";
import { Button } from "@mui/material";
import Product from "../../classes/addproduct";
import { getAll, post } from "../../API";
import { useNavigate } from "react-router-dom";
import AddPrVal from "../../validation/AddProductValidat";
import { Helmet } from "react-helmet";
import CardsContext from "../../context/CardsContext";
const AddProduct = () => {
  const { products, setProducts } = useContext(CardsContext);

  const [addProduct, setaddProduct] = useState([]);
  useEffect(() => {
    getAll().then((res) => {
      setaddProduct(res.data.data);
    });
  }, []);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      imgSrc: "",
      title: "",
      price: "",
    },   

//tamam sen pushla bidene mene baxdimda plssxsi
    onSubmit: (values) => {
      console.log(values);
      const newProduct = new Product(values.imgSrc, values.title, values.price);
      post(newProduct);
      console.log(newProduct);
      formik.resetForm();
      navigate("/");
///koduma baxdaaaggggg ay qiz o boyda koda baxmaq varda
      setProducts((currenProduct) => [...currenProduct, newProduct]);
    },
    validationSchema: AddPrVal,
  });
  return (
    <div>
      <Helmet>
        <title>Add Product</title>
      </Helmet>
      <h1>Add Product</h1>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          onChange={formik.handleChange}
          type="url"
          value={formik.values.imgSrc}
          name="imgSrc"
          className={styles.textfield}
          id="outlined-basic"
          label="imgSrc"
          variant="outlined"
        />
        {formik.errors.imgSrc && (
          <span style={{ color: "red" }}>{formik.errors.imgSrc}</span>
        )}
        <TextField
          onChange={formik.handleChange}
          type="text"
          value={formik.values.title}
          name="title"
          className={styles.textfield}
          id="outlined-basic"
          label="title"
          variant="outlined"
        />
        {formik.errors.title && (
          <span style={{ color: "red" }}>{formik.errors.title}</span>
        )}
        <TextField
          onChange={formik.handleChange}
          type="number"
          value={formik.values.price}
          name="price"
          className={styles.textfield}
          id="outlined-basic"
          label="price"
          variant="outlined"
        />
        {formik.errors.price && (
          <span style={{ color: "red" }}>{formik.errors.price}</span>
        )}
        <Button type="submit" variant="contained">
          Add Product
        </Button>
      </form>
    </div>
  );
};

export default AddProduct;
