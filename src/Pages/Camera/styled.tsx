import styled from "styled-components";

export const CameraContainer = styled.div`
  height: 100svh;
  position: relative;
  padding: 2rem;
  .card-content {
    width: 45rem;
    text-align: center;
    margin: 0 auto;
  }
  @media screen and (max-width: 1023px) {
    padding: 15px;
    .card-content {
      width: 100%;
    }
  }
`