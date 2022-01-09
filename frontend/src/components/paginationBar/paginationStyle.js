import styled from "styled-components";

export const PaginationBar = styled.div`
  display: inline-block;
  & > a {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color 0.3s;
    border: 1px solid #ddd;
    margin: 0 4px;
    &:hover {
      background-color: rgb(146, 146, 146);
    }
    &:active {
      color: white;
      border: 1px solid #4caf50;
    }
    &:focus {
      color: white;
      border: 1px solid #4caf50;
      background-color: rgb(146, 146, 146);
    }
  }
`;
