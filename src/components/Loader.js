/**
 * Dependencies
 */
import React from "react";
import styled from "styled-components";
import Spinner from "react-loader-spinner";

const Container = styled.div`
  background: ${(props) => props.theme.colors.base};
  position: fixed;
  width: 100%;
  align-content: center;
  justify-content: center;
  align-items: center;
  z-index: 100;
  div {
    position: relative;
  }
`;

const AnimContainer = styled(Container)`
  opacity: ${({ state }) => (state === "exiting" ? 0.6 : 0)};
  display: ${({ state }) => (state === "exited" ? "none" : "flex")};
`;

const LoaderComponent = ({ state }) => {
  return (
    <AnimContainer {...{ state }}>
      <Spinner
        type="Bars"
        color="#00BFFF"
        height={100}
        width={100}
        visible={true}
      />
    </AnimContainer>
  );
};

export default LoaderComponent;
