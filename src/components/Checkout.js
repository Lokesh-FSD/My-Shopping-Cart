import styled from "styled-components";

export function Checkout(props) {
  const { cartItems, onAdd, onRemove, removeAll } = props;
  return (
    <Wrapper className="row">
      <div className="col-lg-12 col-md-8 col-sm-12">
        {cartItems.map((item) => {
          return (
            <div key={item.id} className="product col-12 col-sm-12">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <img src={item.img} alt={item.name}></img>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 m-auto">
                  <h5>
                    <strong>{item.name}</strong>
                  </h5>
                  <div>
                    {item.amount} x Rs. {item.price.toFixed(2)} ={" "}
                    {item.amount * item.price.toFixed(2)}
                  </div>
                  <button
                    id="btn"
                    className="btn-add"
                    onClick={() => onAdd(item)}
                  >
                    +
                  </button>
                  <span className="box me-2 ms-2">{item.amount}</span>
                  <button
                    id="btn"
                    className="btn-remove"
                    onClick={() => onRemove(item)}
                  >
                    -
                  </button>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 m-auto">
                  <button id="removeBTN" onClick={() => removeAll(item)}>
                    Remove item
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .product {
    width: 60%;
    min-height: 200px;
    margin: 10px auto;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }

  .product img {
    width: 200px;
    height: 200px;
  }
`;
