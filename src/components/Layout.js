/**
 * Dependencies
 */
import React from "react";
import { useSelector } from "react-redux";
import { Transition } from "react-transition-group";
import styled from "styled-components";

/**
 * Components
 */
import Header from "./Header";
import Loader from "./Loader";

const BodyContainer = styled.section`
  margin-top: 6em;
  padding: ${(props) => props.theme.margin.sm};
  @media (min-width: ${(props) => props.theme.spacing.md}) {
    padding: ${(props) => props.theme.margin.md};
  }
  * {
    position: relative;
    left: unset;
  }
`;

const Layout = ({ children }) => {
  const loading = useSelector((state) => state.loader);

  return (
    <>
      <Transition in={loading} timeout={{ appear: 0, enter: 0, exit: 600 }}>
        {(state) => <Loader state={state} />}
      </Transition>
      <Header />
      <BodyContainer>{children}</BodyContainer>
    </>
  );
};

export default Layout;
