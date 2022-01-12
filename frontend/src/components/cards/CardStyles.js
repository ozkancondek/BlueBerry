import styled from "styled-components";

export const TextPhotoContainer = styled.div`
  display: flex;
  flex-direction: row;
 
  justify-content: center;
  width: auto
  border: 2px solid black;
  margin: auto;
  margin-top: 50px;
  
   
`;

export const ImageContainer = styled.div`
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 600px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.7);

  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.6s ease-in-out;
  transition: 0.6s ease-in-out;
  &:hover {
    filter: grayscale(100%);
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
`;

export const TextContainer = styled.div`
  & > p {
    color: white;
    margin-top: 10px;
    font-family: "Playfair Display", serif;
    font-size: 1.3rem;
    line-height: 2;
    text-align: center;
    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }
  & > h2 {
    text-decoration: underline;
    color: white;
    margin-top: 10px;
    font-family: "Playfair Display", serif;
    font-size: 1.6rem;

    text-align: center;
    @media (max-width: 600px) {
      font-size: 1.2rem;
    }
  }
  background-color: #6082fe;
  overflow: scroll;
  width: 300px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.7);
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.6s ease-in-out;
  transition: 0.6s ease-in-out;
  &:hover {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
`;

export const DetailsBar = styled.div`
  border-bottom: 4px solid #777777;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  width: 900px;
  margin: auto;
  padding: 10px;
  margin-bottom: 20px;
  @media (max-width: 900px) {
    width: 600px;
  }
  @media (max-width: 600px) {
    width: 500px;
  }
`;

export const IconContainer = styled.div`
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
  &:hover {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  border: 5px solid grey;
  border-radius: 5px;
  padding: 20px;

  width: 80%;
  margin: auto;
  margin-bottom: 20px;
`;

export const Comment = styled.div`
  border-bottom: 3px solid grey;
  font-family: "Playfair Display", serif;

  & > h4 {
    fonst-size: 1.3rem;
  }
  & > h4 {
    fonst-size: 1.2rem;
  }
`;
