import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;
export const HomeWrapper = styled.div`
  position: relative;
  width: 66rem;
  height: 45rem;
  padding: 2rem;
  perspective: 250rem;
  animation: showAnimation 2s forwards;
  @keyframes showAnimation {
    0%,30% {
      opacity: 0;
      transform: rotate(-20deg)
    }
    100% {
      opacity: 1;
      transform: rotate(0)
    }
  }
`;
export const HomeCover = styled.div`
  position: absolute;
  top: 0%;
  left: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(45deg, #00abf0, #006e9a);
  box-shadow: 0 0 0.6rem rgba(0, 0, 0, 0.2);
  border-top-left-radius: 0.6rem;
  border-bottom-left-radius: 0.6rem;
  transform-origin: right;
  &.cover-left {
    z-index: -1;
  }
  &.cover-right {
    z-index: 10;
    transition: transform 1s cubic-bezier(0.645, 0.045, 0.355, 1);
    &.turn {
      transform: rotateY(180deg);
    }
  }
`;
export const HomeBook = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  perspective: 250rem;
  .book-page {
    position: absolute;
    width: 50%;
    height: 100%;
    background: linear-gradient(90deg, #fff, #ddd);
    box-shadow: 0 0 0.6rem rgba(0, 0, 0, 0.1);
    display: flex;
    padding: 2rem;
  }
  .profile-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      max-width: 180px;
      border: solid 0.25rem #00abf0;
      margin-bottom: 0.8rem;
    }
    h1 {
      font-size: 2.7rem;
      line-height: 1;
      margin-bottom: 0.3rem;
    }
    h2 {
      font-size: 1.5rem;
      color: #00abf0;
      margin-bottom: 0.3rem;
    }
    .list-social {
      margin-top: 0.6rem;
      margin-bottom: 0.3rem;
      a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 2.5rem;
        height: 2.5rem;
        background: transparent;
        border: solid 1px #00abf0;
        font-size: 1.3rem;
        color: #00abf0;
        margin: 0 0.2rem;
        transition: 0.5s;
        &:hover {
          background: #00abf0;
          color: #fff;
        }
      }
    }
    p {
      text-align: justify;
      margin-bottom: 1.2rem;
    }
  }
  .btn-box {
    display: flex;
    gap: 1.5rem;
  }
  .btn {
    width: 9.5rem;
    height: 3rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #00abf0;
    border: solid 1px #00abf0;
    border-radius: 0.3rem;
    font-size: 1rem;
    color: #fff;
    font-weight: 500;
    transition: all 0.5s ease;
    &:hover {
      background-color: #fff;
      color: #00abf0;
    }
    &:nth-child(2) {
      background: #fff;
      color: #00abf0;
      &:hover {
        background: #00abf0;
        color: #fff;
      }
    }
  }
  .page-right {
    position: absolute;
    right: 0;
    transform-style: preserve-3d;
    transform-origin: left;
    transition: transform 1s cubic-bezier(0.645, 0.045, 0.355, 1);
    .page-front,
    .page-back {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, #fff, #ddd);
      padding: 1.5rem 2rem;
      .title {
        text-align: center;
        font-size: 2.1rem;
        margin-bottom: 1rem;
      }
      .workeduc-box {
        border-left: solid 1px #00abf0;
      }
      .workeduc-content {
        position: relative;
        padding-left: 1.6rem;
        padding-bottom: 1.2rem;
        &:before {
          position: absolute;
          content: "";
          top: 0;
          left: -0.65rem;
          width: 1.2rem;
          height: 1.2rem;
          background-color: #00abf0;
          border-radius: 50%;
        }
      }
      .year {
        color: #00abf0;
        i {
          margin-right: 0.4rem;
        }
      }
      h3 {
        margin-bottom: 0.3rem;
        font-size: 1.2rem;
      }
      p {
        font-size: 0.9rem;
        margin-bottom: 0;
      }
    }
    .page-front {
      transform: rotateY(0deg) translateZ(1px);
    }
    .page-back {
      transform: rotateY(180deg) translateZ(1px);
    }
    .number-page {
      position: absolute;
      bottom: 1.2rem;
      left: 50%;
      transform: translateX(-50%);
    }
    .nextprev-btn {
      position: absolute;
      font-size: 2rem;
      width: 2rem;
      height: 2rem;
      right: 1.5rem;
      bottom: 0.9rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: #555;
      transition: all 0.5s ease;
      &:hover {
        color: #00abf0;
      }
      &.back {
        left: 1.5rem;
      }
    }
    &.turn {
      transform: rotateY(-180deg);
    }
  }
  .services-box {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    .services-content {
      flex: 1 1 10rem;
      border: solid 1px #00abf0;
      text-align: center;
      border-radius: 0.5rem;
      padding: 0.8rem 0.5rem 1.1rem;
      transition: all 0.26s ease;
      &:hover {
        box-shadow: 0 0 0.6rem rgba(0, 0, 0, 0.2);
      }
      i {
        font-size: 2.5rem;
        color: #00abf0;
      }
      h3 {
        font-size: 1.1rem;
        margin-bottom: 0;
      }
      p {
        margin: 0.2rem 0 0.8rem;
      }
      .btn {
        width: 8rem;
        height: 2.5rem;
      }
    }
  }
  .skills-box {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    .skills-content {
      flex: 1 1 20rem;
      h3 {
        font-size: 1.3rem;
        line-height: 1;
        margin-bottom: 0.6rem;
      }
      .content {
        display: flex;
        flex-wrap: wrap;
        gap: 0.8rem;
        span {
          display: inline-flex;
          flex-direction: column;
          width: 6rem;
          height: 5rem;
          align-items: center;
          justify-content: center;
          border: solid 1px #00abf0;
          border-radius: 0.3rem;
          font-weight: 600;
          transition: all 0.3s ease;
          &:hover {
            box-shadow: 0 0 0.6rem rgba(0, 0, 0.2);
          }
          i {
            font-size: 3rem;
            color: #00abf0;
          }
        }
      }
    }
  }
  .portfolio-box {
    .img-box {
      display: flex;
      width: 100%;
      height: 15rem;
      border: solid 1px #00abf0;
      border-radius: 0.5rem;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
        &:hover {
          transform: scale(1.1);
        }
      }
    }
    .info-box {
      margin: 1rem 0 1.5rem;
      .info-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        h3 {
          font-style: 1.3rem;
        }
        a {
          display: flex;
          align-items: center;
          color: #00abf0;
        }
        i {
          margin-left: 0.3rem;
        }
      }
      .text-tech {
        font-weight: 600;
      }
    }
    .btn-box {
      justify-content: center;
    }
  }
  .contact-box {
    text-align: center;
    .field {
      width: 100%;
      background: transparent;
      border: solid 1px #00abf0;
      border-radius: 0.3rem;
      padding: 0.8rem;
      font-size: 1rem;
      color: #333;
      margin-bottom: 1.5rem;
      &::placeholder {
        color: #333;
      }
    }
    textarea {
      height: 15rem;
    }
    .btn {
      cursor: pointer;
    }
  }
  .back-profile {
    position: absolute;
    bottom: 1.2rem;
    right: 2rem;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: solid 1px #00abf0;
    border-radius: 0.3rem;
    font-size: 1.1rem;
    color: #00abf0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    &:hover {
      background: #00abf0;
      color: #fff;
      p {
        opacity: 1;
        transform: translateX(-50%) scale(1);
        top: -1.8rem;
        color: #00abf0;
      }
    }
    p {
      width: 180%;
      text-align: center;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%) scale(0.5);
      font-size: 1rem !important;
      opacity: 0;
      transition: all 0.3s ease;
    }
    i {
      pointer-events: none;
    }
  }
`;
