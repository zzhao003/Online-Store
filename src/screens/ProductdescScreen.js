import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productByIdActions, cartActions } from "../storeTK";

import { useSelector, useDispatch } from "react-redux";

const ProductdescScreen = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const productid = params.id;

  const { loading, product, error } = useSelector((state) => state.productById);

  const [quantity, setQuantity] = useState(1);

  const addToCartHandelr = () => {
    const cartItem = { ...product, quantity: quantity };
    dispatch(cartActions.ADD_TO_CART(cartItem));
    dispatch(cartActions.ADD_TO_LOCALSTORAGE());
  };

  useEffect(() => {
    dispatch(productByIdActions.GET_PRODUCTBYID_REQUEST());
    axios
      .post("/api/products/getproductbyid", { productid })
      .then((res) => {
        // setProducts(res.data);
        dispatch(productByIdActions.GET_PRODUCTBYID_SUCCESS(res.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(productByIdActions.GET_PRODUCTBYID_FAILED(err));
      });
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Something went wrong</h1>
      ) : (
        <div className="row">
          <div className="col-md-6">
            <div className="card p-3 m-5 ">
              <h1>{product.name}</h1>
              <img src={product.image} className="img-fluid m-3 big-img" />
              <p>{product.description}</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="m-2">
              <h1>Price: {product.price}</h1>
              <hr />
              <h1>Select Quantity</h1>
              <select
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              >
                {[...Array(product.countInStock).keys()].map((x, i) => {
                  return (
                    <option value={i + 1} key={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <hr />
              <button className="btn btn-dark" onClick={addToCartHandelr}>
                {" "}
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductdescScreen;
