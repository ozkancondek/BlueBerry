import styled from "styled-components";

export const BackgroundContainer1 = styled.div`
  background-image: url(${(props) => props.img});

  min-height: 95vh;
  color: black;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  opacity: 0.9;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;
  padding: 40px;
  flex-wrap: wrap;
`;

export const GridContainer = styled.div`
  margin: auto;
  margin-top: 20px;
  width: 80%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > img {
    width: 300px;
    height: 450px;
    box-shadow: 10px 10px 5px #ccc;
  }
  & > p {
    margin-top: 10px;
    font-family: "Playfair Display", serif;
    font-size: 1.2rem;
  }
`;

export const TextContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 0.8;
  align-items: flex-end;
  border-right: 4px solid;
  border-bottom: 4px solid;
  padding: 10px;
  opacity: 0.9;
  > * {
    font-size: 3rem;
    @media (max-width: 560px) {
      font-size: 1.5rem;
    }
    font-family: "Playfair Display", serif;
  }
`;
export const TextContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1;
  text-align: center;
  border: 2px solid grey;
  padding: 10px;
  width: 80%;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  > * {
    font-size: 1.5rem;
    font-family: "Roboto Condensed", sans-serif;
  }
`;

/* 
  &:hover {
    color: red;
  } */
