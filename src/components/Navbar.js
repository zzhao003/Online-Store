import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="/">
        Online Shop
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/cart">
              <i className="fa-solid fa-cart-shopping"></i>
              {cartItems.length}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
