import styled from "styled-components";
import { IoSearch } from "react-icons/io5";

import React from "react";

const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  border-radius: var(--borRad);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1rem;

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`;

const Input = styled.input.attrs({
  type: "search",
  placeholder: "search for a country...",
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  color: var(--color-text);
  background-color: var(--colors-ui-base);
`;

const Search = ({ search, setSearch }) => {
  return (
    <>
      <InputContainer>
        <IoSearch />
        <Input value={search} onChange={e => setSearch(e.target.value)} />
      </InputContainer>
    </>
  );
};

export default Search;
