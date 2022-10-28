import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import styled from "styled-components";

function Detail(props) {
  let { id } = useParams();
  let ref = useRef();

  let [count, setCount] = useState(0);
  let [boolean, setBoolean] = useState(true);
  let [tap, setTap] = useState(0);

  useEffect(() => {
    console.log("마운트됐다");
    setTimeout(() => {
      setBoolean(false);
    }, 2000);
  }, []);

  let YellowBtn = styled.button`
    background-color: ${(props) => props.bg};
    color: ${(props) => (props.bg = "blue" ? "white" : "black")};
    padding: 10px;
  `;

  let Box = styled.div`
    background: gray;
    padding: 20px;
  `;

  // let NewBtn = styled.button(YellowBtn)`
  //   color : black;
  // `;

  // function movePage(){
  //   console.log();
  // }

  const notText = (e) => {
    if (e.key >= 0 && e.key <= 9) {
      return true;
    }
    ref.current.value = "";
    alert("그러지마세요");
  };

  // useEffect((e) => {
  //   if (notText(e) === true) {
  //     return;
  //   }
  // });

  return (
    <div className="container">
      {boolean === true ? (
        <div className="alert alert-warning">2초이내 구매시 할인</div>
      ) : null}

      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${
              Number(props.shoes[props.shoes[id].id].id) + 1
            }.jpg`}
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <YellowBtn bg="skyblue">버튼</YellowBtn>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            테스트
          </button>
          <input ref={ref} onKeyUp={(e) => notText(e)} />
          <div>{count}</div>
          {/* <NewBtn>asdf</NewBtn> */}
          <h4 className="pt-5">{props.shoes[props.shoes[id].id].title}</h4>
          <p>{props.shoes[props.shoes[id].id].content}</p>
          <p>{props.shoes[props.shoes[id].id].price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
        <Nav variant="tabs" defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link onClick={() => setTap(0)} eventKey="link0">
              버튼0
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => setTap(1)} eventKey="link1">
              버튼1
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => setTap(2)} eventKey="link2">
              버튼2
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <TapContent tap={tap} />
      </div>
    </div>
  );
}

export default Detail;

function TapContent({ tap }) {
  let [fade, setFade] = useState("");

  useEffect(() => {
    setFade("");
    setTimeout(() => {
      setFade("end");
    }, 100);
  }, [tap]);

  return (
    <div className={`start ${fade}`}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tap]}
    </div>
  );
  // if (tap === 0) {
  //   return <div>내용 0</div>;
  // } else if (tap === 1) {
  //   return <div>내용 1</div>;
  // } else if (tap === 2) {
  //   return <div>내용 2</div>;
  // }
}
