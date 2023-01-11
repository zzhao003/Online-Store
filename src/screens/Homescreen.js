import Product from "../components/Product";
import axios from "axios";
import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { productsActions } from "../storeTK";

const Homescreen = () => {
  const dispatch = useDispatch();

  const { loading, products, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(productsActions.GET_PRODUCTS_REQUEST());
    axios
      .get("/api/products/getallproducts")
      .then((res) => {
        // console.log(res);
        // setProducts(res.data);
        dispatch(productsActions.GET_PRODUCTS_SUCCESS(res.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(productsActions.GET_PRODUCTS_FAILED(err));
      });
  }, []);

  return (
    <div>
      <div className="row justify-content-center">
        {loading ? (
          <h1>loading</h1>
        ) : error ? (
          <h1>Something went wrong</h1>
        ) : (
          products.map((product) => {
            return <Product product={product} key={product._id} />;
          })
        )}
      </div>
    </div>
  );
};

export default Homescreen;
