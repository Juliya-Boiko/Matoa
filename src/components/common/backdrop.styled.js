import styled from "styled-components";

export const Backdrop = styled.div`
  /* position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh; */
  display: flex;
  //flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;