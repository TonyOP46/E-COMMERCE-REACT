import React, { useEffect, useState } from "react";
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addCartThunk } from "../store/slice/cart.slice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const newProducts = useSelector((state) => state.products);
  const [rate, setRate] = useState(0);

  const productDetail = newProducts.find(
    (product) => product.id === Number(id)
  );
  console.log(productDetail);

  const relatedProducts = newProducts.filter(
    (product) => product.category.id === productDetail.category.id
  );
  const addProducts = () => {
    alert("Añadiendo products");
    const purchase = {
      id: id,
      quantity: rate,
    };
    dispatch(addCartThunk(purchase));
    console.log(purchase);
  };

  useEffect(() => {
    setRate(5);
  }, [id]);

  const ConditionMenor = () => {
    if (rate < 1) {
      ("disabled");
    } else {
      setRate(rate - 1);
    }
  };

  return (
    <Row>
      <Col>
        <h1>{productDetail?.title}</h1>
        <div className="rate">
          <Button className="me-3" onClick={ConditionMenor}>
            -
          </Button>
          <p>{rate}</p>
          <Button className="me-3" onClick={() => setRate(rate + 1)}>
            +
          </Button>
          <br />
          <Button onClick={addProducts}>Add to cart</Button>
        </div>
        <img className="img-fluid" src={productDetail?.productImgs[2]} alt="" />
        <p>price: {productDetail?.price}</p>
      </Col>
      <Col lg={3}>
        <p>description: {productDetail?.description}</p>
      </Col>
      <div className="more">
        <h3>Other Products</h3>
        <ul>
          {relatedProducts.map((product) => (
            <li key={product.id}>
              <Link to={`/products/${product.id}`}>
              <div className="imgs">
                <p>{product.title}</p>
                <img
                  src={product.productImgs[0]}
                  alt=""
                  width={"100px"}
                  className="img"
                />
              </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Row>
  );
};

export default ProductDetails;
