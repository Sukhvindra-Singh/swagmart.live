import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { addItemsToCart } from "../../actions/cartAction";
import { useDispatch } from "react-redux";
import { useAlert } from "react-alert";

const SpecialProduct = ({ product }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const addToCartHandler = () => {
    console.log("cart")
    dispatch(addItemsToCart(product._id,1));
    alert.success("Item Added To Cart");
  };
  let classname = `col-4 mb-3`;
  return (
    <Link className={classname} to={`/product/${product._id}`}>
      <div className="special-product-card">
        <div className="d-flex justify-content-space-around">
          <div>
            <img src="images/watch.jpg" alt="special product" />
          </div>
          <div className="special-product-content">
            <h5 className="brand">{product && product.brand}</h5>
            <h6 className="title">{product && product.name}</h6>
            <ReactStars
              count={5}
              size={24}
              value={product && product.ratings}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price">
              <span className="text-danger">{product && product.price}</span>{" "}
              &nbsp; <strike>$200000</strike>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p className="mb-0">
                <b>5 days</b>
              </p>
              <div className="d-flex gap-10 align-items-center">
                <span className="badge rounded-circle p-3 bg-danger">1</span>
                <span className="badge rounded-circle p-3 bg-danger">1</span>
                <span className="badge rounded-circle p-3 bg-danger">1</span>
              </div>
            </div>
            <div className="product-count mt-3">
              <p>Products : 5</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <Link to="/cart" className="button mt-3" onClick={addToCartHandler}>Add to Cart</Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SpecialProduct;
