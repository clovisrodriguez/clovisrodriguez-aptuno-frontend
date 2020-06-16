/**
 * Dependencies
 */
import React from "react";
import styled from "styled-components";

/**
 * Utils
 */
import { history } from "store/configureStore";

const Container = styled.div`
  position: fixed !important;
  z-index: 100;
  height: 60px;
  bottom: 0;
  top: unset;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
  width: 370px;
  background: white;
  margin: 0 auto;
  left: 0 !important;
  display: flex;
  border-radius: 5px;
  @media (min-width: ${(props) => props.theme.spacing.md}) {
    bottom: 2em;
  }
`;

const Button = styled.button`
  height: 100%;
  flex-grow: 1;
  cursor: pointer;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.base};
`;

const NumberButton = styled.button`
  height: 100%;
  flex-grow: 1;
  cursor: pointer;
  color: ${({ active, theme }) => (active ? theme.colors.primary : "#000000")};
  font-weight: ${({ active }) => (active ? "700" : "400")};
`;

const Pagination = ({ activePage, pages = [] }) => {
  const redirect = (id) => {
    history.push(`/results/${id}`);
  };
  const LeftArrow = () =>
    Number(activePage) !== 1 ? (
      <Button onClick={() => redirect(Number(activePage) - 1)}>&#9664;</Button>
    ) : null;
  const RightArrow = () =>
    Number(activePage) < pages.length ? (
      <Button onClick={() => redirect(Number(activePage) + 1)}>&#9654;</Button>
    ) : null;
  const Numeration = () =>
    pages.map((pageNumber, key) => (
      <NumberButton
        active={Number(activePage) === pageNumber}
        key={key}
        onClick={() =>
          Number(activePage) !== pageNumber
            ? redirect(Number(pageNumber))
            : null
        }
      >
        {pageNumber}
      </NumberButton>
    ));

  return (
    <Container>
      <LeftArrow />
      <Numeration />
      <RightArrow />
    </Container>
  );
};

export default Pagination;
