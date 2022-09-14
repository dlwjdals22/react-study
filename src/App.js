import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Nav, Navbar, Row, Col } from "react-bootstrap/";
import data from "./data";
import { useState } from "react";
import Main from "./Main";
import ProductList from "./ProductList";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./pages/Detail";
import About from "./pages/About";
import Event from "./pages/Event";
import image1 from "./image1.jpg";

function App() {
  let navigate = useNavigate();
  let [shoes, setShoes] = useState(data);

  function Sort() {
    let copy = [...shoes];
    console.log(copy);
    console.log(
      copy.sort((a, b) => {
        let x = a.title;
        let y = b.title;
        if (x < y) return -1;
        else if (x > y) return 1;
        return 0;
      })
    );
    console.log(copy);
    // setShoes(copy.sort());
  }

  return (
    <div className="App">
      {/*Routes는 페이지라고 생각.
      Route가 각각 한 페이지 라고 생각
      아래는 두 페이지만 있는 거*/}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">SportsShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/about")}>About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* <div className="main-bg" style={{ backgroundImage: `url(${image1})` }}> */}
              <div
                className="main-bg"
                style={{ backgroundImage: `url(${image1})` }}
              >
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
                <button onClick={Sort}>버튼</button>
              </div>
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />}></Route>
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<div>로케이션임</div>} />
        </Route>
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>
        <Route path="*" element={<div>없는 페이지입니다</div>} />
      </Routes>
    </div>
  );
}

export default App;
