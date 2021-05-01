import styled from "styled-components";

export const AppBox = styled.body`
  margin: 0;
`;

export const ContainerBox = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding-right: 150px;
  width: 100%;
  height: 940px;
  background-color: black;

  /* Responsive */

  @media (max-width: 667px) {
    width: 100%;
    height: 720px;
    padding: 15px;
  }

  @media (max-width: 812px) {
    width: 100%;
    height: 720px;
    padding: 2px;
  }
  @media (max-width: 1024px) {
    width: 100%;
    height: 880px;
    padding: 15px;
  }

  @media (max-width: 1366px) {
    width: 100%;
    height: 880px;
    padding: 15px;
  }
`;

export const ChatBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px 10px 30px 10px;
  width: 35%;
  height: 650px;
  background-color: white;
  opacity: 0.8;
  -webkit-border-radius: 32px;
  -webkit-border-bottom-right-radius: 10px;
  -webkit-border-bottom-left-radius: 10px;
  -moz-border-radius: 32px;
  -moz-border-radius-bottomright: 10px;
  -moz-border-radius-bottomleft: 10px;
  border-radius: 32px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;

  /* Responsive */

  @media (max-width: 667px) {
    width: 100%;
    height: 670px;
    padding: 2px;
  }

  @media (max-width: 712px) {
    width: 100%;
    height: 750px;
  }

  @media (max-width: 1024px) {
    width: 100%;
    height: 840px;
    padding: 2px;
  }

  @media (max-width: 1366px) {
    width: 100%;
    height: 840px;
    padding: 2px;
  }
`;

//   ConatinerAvatar

export const ConatinerAvatar = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
  width: 100%;
  height: 120px;
  padding: 10px;
  -webkit-border-radius: 25px;
  -webkit-border-bottom-right-radius: 10px;
  -moz-border-radius: 25px;
  -moz-border-radius-bottomright: 10px;
  border-radius: 25px;
  border-bottom-right-radius: 10px;
  /* opacity: 0.7; */
  background-color: rgb(0, 0, 0);

  /* Responsive */

  @media (max-width: 667px) {
    width: 100%;
    height: 100px;
    padding: 8px;
  }

  @media (max-width: 812px) {
    width: 100%;
    height: 120px;
    padding: 4px;
    margin-bottom: 25px;
  }

  @media (max-width: 1024px) {
    width: 100%;
    height: 120px;
    margin-top: 20px;
    padding: 8px;
    margin-bottom: 25px;
  }

  @media (max-width: 1366px) {
    width: 100%;
    height: 190px;
    margin-top: 5px;
    padding: 8px;
    margin-bottom: 25px;
  }
`;

export const BoxImg = styled.img`
  width: 25%;
  margin-left: 100px;
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  border-radius: 100px;

  /* Responsive */

  @media (max-width: 667px) {
    width: 25%;
    margin-left: 30px;
  }

  @media (max-width: 812px) {
    width: 30%;
    margin-left: 10px;
  }

  @media (max-width: 1024px) {
    width: 25%;
    margin-left: 140px;
  }

  /* @media (max-width: 1366px) {
    width: 25%;
    margin-left: 170px;
  }  */
`;

export const Title = styled.h3`
  color: #ffff;
  font-size: 25px;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 30px;
  margin-left: 30px;

  /* Responsive */

  @media (max-width: 667px) {
    font-size: 20px;
    margin-top: 20px;
  }

  @media (max-width: 812px) {
    font-size: 20px;
    margin-top: 20px;
  }

  @media (max-width: 1024px) {
    font-size: 30px;
    margin-top: 25px;
  }
  /* @media (max-width: 1366px) {
    font-size: 40px;
     margin-top: 55px;
  }  */
`;

export const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 10px 20px 10px;
  width: 100%;
  height: 650px;
  background-color: #f2f9fd;
  opacity: 0.8;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;

  /* Responsive */

  @media (max-width: 667px) {
    height: 400px;
  }

  @media (max-width: 712px) {
    height: 500px;
  }

  @media (max-width: 1024px) {
    height: 600px;
  }

  @media (max-width: 1366px) {
    height: 700px;
  }
`;

export const ContainerMessage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  background-color: #eaa1d8;
  color: black;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;

  /* Responsive */

  @media (max-width: 667px) {
    width: 100%;
  }
`;
