import products from "../products";
import { useParams } from "react-router-dom";

const ProductdescScreen = () => {
  const params = useParams();

  const product = products.find((product) => product.id == params.id);

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <div className="card p-3 m-3">
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
            <select>
              {[...Array(product.countInStock).keys()].map((x, i) => {
                return <option value={i + 1}>{i + 1}</option>;
              })}
            </select>
            <hr />
            <button className="btn btn-dark"> ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductdescScreen;
