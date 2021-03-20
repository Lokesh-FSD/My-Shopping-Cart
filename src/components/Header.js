import { Link } from "react-router-dom";

export function Header(props) {
  const decoration = { textDecoration: "none", color: "white" };
  return (
    <nav className="navbar navbar-light bg-success flex">
      <div className="text-center w-100 text-light d-flex">
        <Link to="/" className="w-100" style={decoration}>
          <h2>Shopping Cart</h2>
        </Link>
        <div className="d-flex me-5 align-items-center ms-auto">
          <Link
            to="/checkout"
            className="d-flex fa fa-shopping-cart"
            style={decoration}
          >
            <span className="ms-1">{props.cartItems.length}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
