import { useState } from "react";
import { Button, Container, Nav, Navbar, Row, Col } from "react-bootstrap/";
import { useNavigate } from "react-router-dom";

function ProductList({ e }) {
  let navigate = useNavigate();
  return (
    <Col>
      <img
        width="80%"
        onClick={() => {
          navigate(`/detail/${e.id}`); 
        }}
        src={`https://codingapple1.github.io/shop/shoes${e.id + 1}.jpg`}
      />
      <h4>{e.title}</h4>
      <p>{e.content}</p>
      <p>{e.price}</p>
    </Col>
  );
}

export default ProductList;
