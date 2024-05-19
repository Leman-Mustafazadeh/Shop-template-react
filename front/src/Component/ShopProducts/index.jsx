import React, { useContext, useEffect, useState } from "react";
import { deleteOne, getAll, getOne, patch } from "../../API";
import styles from "./index.module.scss";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFormik } from "formik";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import Product from "../../classes/addproduct";
import CardsContext from "../../context/CardsContext";
const ShopProducts = () => {
const {products,setProducts} =useContext(CardsContext)
// let localBasket = JSON.parse(localStorage.getItem("basket"))
// const[basketState,setBasketState] = useState(localBasket? localBasket.length :0)
// const [basket,setBasket] = useState(localBasket? localBasket : [])

  //delete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteOne(id);
        const del = products.filter((x) => x._id != id);
        setProducts(del);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  //search
  const [filter, setFilter] = useState(products);
 
  const handleSubmit = (inpValue) => {
    const filtered = products.filter((x) =>
      x.title.toLowerCase().trim().includes(inpValue.toLowerCase().trim())
    );
    setFilter(filtered);
  };
  useEffect(() => {
    setFilter(products);
  }, [products]);

  //sort
  const sorByPrice = (value) => {
    const select = [...filter];
    if (value == "a") {
      select.sort((a, z) => a.price - z.price);
    } else if (value == "z") {
      select.sort((a, z) => z.price - a.price);
    }
    setFilter(select);
  };

  //basket

const getBasket=(id)=>{
  const local = JSON.parse(localStorage.getItem("basket")) || []
  const idx = local.findIndex((item)=>item.id===id)
  if(idx!==-1){
    local[idx].count+=1
  }else{
    local.push({id:id,count:1})
  }
 localStorage.setItem("basket",JSON.stringify(local))
}



// const getBasket=(id)=>{
// products.map((item)=>{
//   if(id==item._id){
//     if(basket.includes(item)){
//       console.log(basket);
//       basket.map((pro)=>{
//         console.log(pro);
//         if(pro.id==id){

//           pro.count++
//           patch(id,pro)
//           return pro
//         }
//       })
//       setBasket(basket)
//       localStorage.setItem("basket",JSON.stringify(basket))
//     }
// console.log(basket);
//   }
// })
// }







  //update
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const [formikValue, setFormikValue] = useState({
    imgSrc: "",
    title: "",
    price: "",
  });
  const [openId, setOpenId] = useState(null);
  const handleOpen = (id) => {
    getOne(id).then((res) => {
      setOpenId(id);
     res.data.data&& setFormikValue(res.data.data);
      setOpen(true);
    });
  };

  const handleClose = () => setOpen(false);
  useEffect(() => {
    formik.setValues(formikValue);
}, [formikValue]);

  const formik = useFormik({
    initialValues: {
      imgSrc: formikValue.imgSrc || "", 
      title: formikValue.title || "",
      price: formikValue.price || ""
    },
    onSubmit: (values) => {
      const newUpdate = new Product(values.imgSrc, values.title, values.price);
      patch(openId, newUpdate);
     setProducts(products)
      formik.resetForm();
      handleClose();
    },
  });
  

  return (
    <>
      <section className={styles.shop_deal}>
        <div className="container">
          <h3>New realeased Products for Men</h3>
          <p>Who are in extremely love with eco friendly system.</p>
          <input
            type="text"
            placeholder="Search name..."
            onChange={(e) => handleSubmit(e.target.value)}
          />
          <select
            name=""
            id=""
            onChange={(e) => sorByPrice(e.target.value)}
            style={{ margin: "0 20px" }}
          >
            <option value="a">Min Price</option>
            <option value="z">Max Price</option>
          </select>
          <button
            style={{
              color: "white",
              textDecoration: "none",
              borderColor: "transparent",
              backgroundColor: "pink",
              margin: "20px 0",
            }}
          >
            <Link
              to={"/addproduct"}
              style={{
                color: "white",
                textDecoration: "none",
                borderColor: "transparent",
              }}
            >
              AddProduct
            </Link>
          </button>
          <div className={styles.shop_deal_img}>
            {filter && filter.map((item) => {
                return (
                  <div className={styles.shop_box} key={item._id}>
                    <img src={item.imgSrc} alt="" />
                    <div></div>
                    <h5>{item.title}</h5>
                    <h2>${item.price}</h2>
                    <button onClick={() => handleDelete(item._id)}>
                      Delete
                    </button>
                    <button>
                      <Link
                        style={{ color: "white", textDecoration: "none" }}
                        to={"/productdetail/" + item._id}
                      >
                        Detail
                      </Link>
                    </button>
                    <button onClick={()=>handleOpen(item._id)}>Update</button>
                    <button onClick={() => getBasket(item._id)}>Basket</button>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form
          action=""
          style={{ backgroundColor: "white", padding: "20px auto" }}
          onSubmit={formik.handleSubmit}

        >
          <h1>Update</h1>
          <TextField
            id="outlined-basic"
            label="imgSrc"
            variant="outlined"
            name="imgSrc"
            onChange={formik.handleChange}
            value={formik.values.imgSrc}
          />
          <TextField
            id="outlined-basic"
            label="title"
            variant="outlined"
            name="title"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          <TextField
            id="outlined-basic"
            label="price"
            variant="outlined"
            name="price"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
          <Button type="submit" variant="contained">
            
            Submit
          </Button>
        </form>
      </Modal>
    </>
  );
};
export default ShopProducts;
