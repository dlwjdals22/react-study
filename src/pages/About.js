import { Outlet } from "react-router-dom";

export default function About() {
  return (
    <div>
      <Outlet></Outlet>
      어바웃이요
      <h4>회사정보임</h4>
    </div>
  );
}
