/**
 * Dependencies
 */
import React from "react";
import styled from "styled-components";
import Logo from "images/aptuno_logo_2colors.svg";

const Container = styled.header`
  width: 100%;
  padding: 1em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  height: 3em;
  background: ${(props) => props.theme.colors.base};
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
`;

const Header = () => (
  <Container>
    <img src={Logo} alt="neptuno" />
  </Container>
);

export default Header;
