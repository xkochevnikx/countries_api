import React, { useState } from "react";
import styled from "styled-components";
import { CustomSelect } from "../UI/CustomSelect/CustomSelect";
import Search from "../UI/Search/Search";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const options = [
  { value: "Ukraine", label: "Ukraine" },
  { value: "Ingermanland", label: "Ingermanland" },
  { value: "Kyrgystan", label: "Kyrgystan" },
];
const Controls = () => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  return (
    <Wrapper>
      <Search />
      <CustomSelect
        options={options}
        placeholder="Filter by region"
        isClearable
        isSearchable={false}
        value={region}
        onChange={setRegion}
      />
    </Wrapper>
  );
};

export default Controls;
