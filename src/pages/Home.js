import Loading from "../layouts/Loading";
import styled, { css, keyframes } from "styled-components";
import Auth from "./Auth";
import Register from "./Register";
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const RotatingDiv = styled.div`
  float: left;
  transform: rotate(0deg);
  overflow: hidden;
  transform: ${(props) => (props.rotate ? `rotate(180deg)` : "")};
  animation: ${rotate} 2s linear infinite;
`;

function Home() {
  return (
    <>
      <h2>Home</h2>
      <RotatingDiv rotate={true}>
        <Loading />
      </RotatingDiv>
      <Auth />
      <p></p>
      <Register />
    </>
  );
}
export default Home;
