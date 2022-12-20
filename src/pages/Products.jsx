import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, InputGroup, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import '../App.css'

const Products = () => {
  const products = useSelector((state) => state.products);
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [productFiltered, setProductFiltered] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  
  useEffect(() => {
    axios
      .get(
        "https://e-commerce-api.academlo.tech/api/v1/products/categories"
      )
      .then((res) => setCategories(res.data.data.categories));
  }, []);

  useEffect(() => {
    setProductFiltered(products);
  }, [products]);

   console.log(categories);

  const filterCategories = (categoryId) => {
    const filterId = products.filter((product) => product.category.id === categoryId);

    setProductFiltered(filterId);
  };

  const searchproducts = () => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setProductFiltered(filtered);
    // setSearchProducts(filtered)
  };
  return (
    <Row>
      <Col lg={5} xl={3}>
        <ListGroup>
          {categories.map((category) => (
            <ListGroup.Item
              key={category.id}
              onClick={() => filterCategories(category.id)}
              style={{ cursor: "pointer" }}
            >
              {category.name}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
      <Col>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Search Products"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <Button variant="outline-secondary" onClick={searchproducts}>
            Button
          </Button>
        </InputGroup>
        <Row xs={1} md={2} xl={3} className="g-4">
          {productFiltered.map((product) => (
            <Col  key={product.id}>
              <Card onClick={() => navigate(`/products/${product.id}`)} style={{height: "100%"}} className="cards">
                <Card.Img variant="top" src={product.productImgs[1]} alt="" width={"100px"} height={"200px"} style={{objectFit: "contain"}} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>
                    <p>price: {product.price}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default Products;
