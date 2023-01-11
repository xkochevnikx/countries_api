import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Controls from "../components/Controls/Controls";
import { ALL_CONTRIES } from "../components/Config/Config";
import Card from "../components/Card/Card";
import List from "../components/List/List";

const HomePages = ({ countries, setContries }) => {
  const [filterCountries, setFilterContries] = useState(countries);

  //? механизм фильтрации тут такой - создаеём функцию которую передаём в компонет controls. вызываем её там при изменении поисковой строки или региона и возвращаем сюда. тут она спредит массив со странами и по критериям фильтрует его перезаписывая data. потом полученный data записываем в стейт и отрисовываем
  const handleSearch = (search, region) => {
    let data = [...countries];

    if (region) {
      data = data.filter(item => item.region.includes(region));
    }

    if (search) {
      data = data.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilterContries(data);
  };

  //? навигейт тут для перехода с карточки на отдельную страницу details
  const navigate = useNavigate();

  //? при переходе на homepage срабатывает useEffect если в стейте countries проверяем если длинна массива null то отрабатывает запрос  на сервер. если нет то идёт отрисовка того что уже есть в стейте

  useEffect(() => {
    if (!countries.lenght)
      axios(ALL_CONTRIES).then(({ data }) => {
        setContries(data);
      });
  }, []);

  useEffect(() => {
    handleSearch();
  }, [countries]);

  return (
    <>
      <Controls onSearch={handleSearch} />
      <List>
        {filterCountries.map(c => {
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
