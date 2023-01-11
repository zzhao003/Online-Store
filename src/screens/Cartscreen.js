import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../storeTK";

const Cartscreen = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  let subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="row mt-3 justify-content-center">
      <div className="col-md-8 card">
        <h1 className="m-5">My Cart</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <select
                      value={item.quantity}
                      onChange={(e) => {
                        const cartItem = {
                          ...item,
                          quantity: e.target.value,
                        };
                        dispatch(cartActions.ADD_TO_CART(cartItem));
                      }}
                    >
                      {[...Array(item.countInStock).keys()].map((x, i) => {
                        return (
                          <option value={i + 1} key={i + 1}>
                            {i + 1}
                          </option>
                        );
                      })}
                    </select>
                  </td>
                  <td>{item.quantity * item.price}</td>
                  <td>
                    <i
                      className="fa fa-trash"
                      onClick={() => {
                        dispatch(cartActions.DELETE_FROM_CART(item._id));
                        dispatch(cartActions.ADD_TO_LOCALSTORAGE());
                      }}
                    ></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <hr />
        <h2>Subtotal: ${subtotal}</h2>
        <hr />
        <div>
          <button className="btn btn-dark m-3">PAY NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Cartscreen;
