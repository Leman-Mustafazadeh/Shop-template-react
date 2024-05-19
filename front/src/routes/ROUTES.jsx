import ShopProducts from "../Component/ShopProducts";
import AddProduct from "../pages/AddProduct";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import ShopRouter from "../pages/ShopRouter";

export const ROUTES = [
  {
    path: "/",
    element: <ShopRouter />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "addproduct",
       element: <AddProduct /> },
       {
        path:"productdetail/:id",
        element:<ProductDetail/>
       },
       {
        path:"shopproducts",
        element:<ShopProducts/>
       }
      
    ],
  },
];
