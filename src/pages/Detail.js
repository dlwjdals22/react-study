import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

function Detail(props) {
  let { id } = useParams();

  let [count, setCount] = useState(0);
  let [boolean, setBoolean] = useState(true);

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
          <div>{count}</div>
          {/* <NewBtn>asdf</NewBtn> */}
          <h4 className="pt-5">{props.shoes[props.shoes[id].id].title}</h4>
          <p>{props.shoes[props.shoes[id].id].content}</p>
          <p>{props.shoes[props.shoes[id].id].price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
