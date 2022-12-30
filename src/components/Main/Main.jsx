import React from "react";
import styled from "styled-components";
import { Container } from "../Container/Container";

//? все семантические контейнеры типо хедер, мэйн, фоотер служат обёрткой без ширины. Ширину задаёт контейнер в котором уже дальше всё лежит
const Wrapper = styled.main`
  padding: 2rem 0;

  @media (min-width: 767px) {
    padding: 4 rem 0;
  }
`;

const Main = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default Main;
