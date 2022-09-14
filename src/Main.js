import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Nav, Navbar, Row, Col } from "react-bootstrap/";
import data from "./data";
import { useState } from "react";
import ProductList from "./ProductList";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import image1 from "./image1.jpg";
import Detail from "./pages/Detail";

function Main() {
  let [shoes, setShoes] = useState(data);
  return (
    <>
      {/* <div className="main-bg" style={{ backgroundImage: `url(${image1})` }}> */}
      <div className="main-bg" style={{ backgroundImage: `url(${image1})` }}>
        {/* <img className="main-bg" src={"img/image1.jpg"} /> */}
      </div>
      <div>
        <Container fluid="md">
          <Row>
            {shoes.map((e, i) => {
              return <ProductList key={i} e={e} />;
            })}
          </Row>
        </Container>
        <Routes>
          <Route path="/detail" element={<Detail shoes={shoes} />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default Main;
