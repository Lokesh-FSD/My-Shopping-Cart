import productsJSON from "./products.json";
export function Products(props) {
  function addToCartClickHandler(productItem) {
    const updateCartItems = props.updateCartItems;
    const cartItemsProps = props.cartItems;
    updateCartItems(() => [...cartItemsProps, productItem]);
  }
  function renderProducts() {
    if (productsJSON !== undefined) {
      return productsJSON.result.map(function (productItem) {
        return (
          <div
            key={productItem.id}
            id={productItem.id}
            className="d-flex justify-content-center col-md-4 col-sm-12"
          >
            <div className="card" style={{ width: "13rem" }}>
              <img src={productItem.img} alt={productItem.name}></img>
              <div className="card-body">
                <h5 className="card-title">{productItem.name}</h5>
                <p className="card-text">Price: {productItem.price}</p>
                <button
                  className="btn btn-success"
                  onClick={() => [
                    addToCartClickHandler(productItem),
                    props.onAdd(productItem)
                  ]}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        );
      });
    }
  }
  return (
    <div className="d-flex w-100 justify-content-center align-items-center mt-5">
      <div className="row">{renderProducts()}</div>
    </div>
  );
}
