import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border-radius: var(--borRad);
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  overflow: hidden;
  cursor: pointer;
`;
const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
`;
const CardBody = styled.div`
  padding: 1rem 2rem;
`;
const CardTitle = styled.h3`
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
`;

const CardList = styled.ul`
  padding: 1rem 0 0;
`;

const CardListItem = styled.li`
  list-style: none;
  font-size: var(--fs-sm);
  font-weight: var(--fw-light);

  & > b {
    font-weight: var(--fw-bold);
  }
`;

const Card = ({ img, name, info, onClick }) => {
  console.log(info);
  return (
    <Wrapper onClick={onClick}>
      <CardImage src={img} alt={name} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardList>
          {info.map(elem => (
            <CardListItem key={elem.title}>
              <b>{elem.title}: </b>
              {elem.description}
            </CardListItem>
          ))}
        </CardList>
      </CardBody>
    </Wrapper>
  );
};

export default Card;
