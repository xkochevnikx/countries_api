import React, { useEffect, useState } from "react";
import { IoMoonOutline, IoMoon } from "react-icons/io5";
import styled from "styled-components";
import { Container } from "../Container/Container";
import { Link } from "react-router-dom";

const HeaderElement = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled(Link).attrs({
  to: "/homepages",
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  font-weight: var(--fw-bold);
`;

const Header = () => {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => setTheme(theme === "light" ? "dark" : "light");

  //? в index.css я создал для body атрибуты и для каждого атрибута установил стили. эти атрибуты еще не установлены. Выше поставил флаг theme, этот флаг на противоположное значение меняет функция changeTheme при нажатии и дальше useEffect видит изменения в стейте и обращаясь к документу записывает новый атрибут и значение из стейта. а на каждый из этих атрибутов уже устанавливаются сразу стили записанные в начале в index.css
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  //? ниже отрисовка по значению флага выбираем иконку
  return (
    <>
      <HeaderElement>
        <Container>
          <Wrapper>
            <Title>Where is the world?</Title>
            <ModeSwitcher onClick={changeTheme}>
              {theme === "light" ? (
                <IoMoonOutline style={{ fontSize: "18px" }} />
              ) : (
                <IoMoon style={{ fontSize: "18px" }} />
              )}
              <span style={{ margin: "0.75rem" }}>{theme} theme</span>
            </ModeSwitcher>
          </Wrapper>
        </Container>
      </HeaderElement>
    </>
  );
};

export default Header;
