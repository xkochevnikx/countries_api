import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Controls from "../components/Controls/Controls";
import { ALL_CONTRIES } from "../components/Config/Config";
import Card from "../components/Card/Card";
import List from "../components/List/List";

const HomePages = () => {
  const [countries, setContries] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!countries.lenght)
      axios(ALL_CONTRIES).then(({ data }) => {
        setContries(data);
      });
  }, []);

  return (
    <>
      <Controls />
      <List>
        {countries.map(c => {
          const countryInfo = {
            img: c.flags.png,
            name: c.name,
            info: [
              {
                title: "Population",
                description: c.population.toLocaleString(),
              },
              {
                title: "Region",
                description: c.region,
              },
              {
                title: "Capital",
                description: c.capital,
              },
            ],
          };

          return (
            <Card
              key={c.name}
              {...countryInfo}
              onClick={() => navigate(`/country/${c.name}`)}
            />
          );
        })}
      </List>
    </>
  );
};

export default HomePages;
