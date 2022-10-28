import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Nav, Navbar, Row, Col } from "react-bootstrap/";
import data from "./data";
import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./pages/Detail";
import About from "./pages/About";
import Event from "./pages/Event";
import image1 from "./image1.jpg";
import axios from "axios";

function App() {
  let navigate = useNavigate();
  let [shoes, setShoes] = useState(data);
  let [more, setMore] = useState([]);
  let [moreShow, setMoreShow] = useState(false);

  // let more = ["a", "b", "c"];

  function Sort() {
    let copy = [...shoes];
    console.log(shoes);
    console.log(
      copy.sort((a, b) => {
        let x = a.title;
        let y = b.title;
        if (x < y) return -1;
        else if (x > y) return 1;
        return 0;
      })
    );
    // console.log(copy);
    // setShoes(copy.sort());
  }

  useEffect(() => {
    axios.get("https://codingapple1.github.io/shop/data2.json").then((data) => {
      setMore(...more, data.data);
    });
  }, []);

  console.log("more : ", more);

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
            <div>
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
                <button onClick={Sort}>정렬버튼</button>
                <button
                  onClick={
                    () => {
                      if (moreShow === false) setMoreShow(true);
                      else if (moreShow === true) setMoreShow(false);
                    }
                    // axios
                    //   .get("https://codingapple1.github.io/shop/data2.json")
                    //   .then((data) => {
                    //     // console.log(data);
                    //   })
                    //   .catch(() => {
                    //     console.log("실패");
                    //   });
                  }
                >
                  버튼
                </button>
                {moreShow === false ? null : (
                  <Container fluid="md">
                    <Row>
                      {more.map((e, i) => {
                        return (
                          <Col key={i}>
                            <img
                              width="80%"
                              onClick={() => {
                                navigate(`/detail/${e.id}`);
                              }}
                              src={`https://codingapple1.github.io/shop/shoes${
                                e.id + 1
                              }.jpg`}
                            />
                            <h4>{e.title}</h4>
                            <p>{e.content}</p>
                            <p>{e.price}</p>
                          </Col>
                        );
                      })}
                    </Row>
                  </Container>
                )}
              </div>
            </div>
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
