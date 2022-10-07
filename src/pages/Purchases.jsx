import React, { useEffect } from "react";
import { Container, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPurchasesThunk } from "../store/slice/Purchases.slice";

const Purchases = () => {
  const dispatch = useDispatch();
  const purchases = useSelector((state) => state.purchases);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getPurchasesThunk());
  }, []);
  return (
    <div className="purchases">
      <h1>Purchases</h1>
      <Container>
      {purchases.map((purchase) => (
        <div key={purchase.id}>
          {purchase.cart.products.map((purchaseDetail) => (
            <li
              style={{ listStyle: "none" }}
              onClick={() => navigate(`/products/${purchaseDetail.id}`)}
              Style={{ marginTop: "12px" }}
              key={purchaseDetail.id}
              className="list2"
            >
              <div className="list3">
                <p>Product: {purchaseDetail.title}</p>
                <br />
                <p>Price: {purchaseDetail.price}</p>
                <br />
                
              </div>
            </li>
          ))}
        </div>
      ))}
      </Container>
    </div>
  );
};

export default Purchases;
