import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./routes/ROUTES";
import CardsContext from "./context/CardsContext";
import { useEffect, useState } from "react";
import { getAll } from "./API";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAll().then((res) => {
      setProducts(res.data.data);
    });
  }, []);
  const router = createBrowserRouter(ROUTES);
  return <>
  <CardsContext.Provider value={{products,setProducts}} >
  <RouterProvider router={router}></RouterProvider></CardsContext.Provider>
  </>;
}

export default App;
