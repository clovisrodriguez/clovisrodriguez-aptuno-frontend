/**
 * Dependencies
 */
import React, { useState } from "react";
import styled from "styled-components";
import _ from "lodash";

const Container = styled.div`
  position: fixed !important;
  z-index: 5;
  padding: 0.5em;
  color: white;
  height: 60px;
  top: 5em;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
  background: ${(props) => props.theme.colors.primary};
  margin: 0 auto;
  left: 0 !important;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (min-width: ${(props) => props.theme.spacing.md}) {
    flex-direction: row;
    height: 45px;
  }
  label {
    margin-right: 0.8em;
  }
  * {
    margin: 0 0.5em;
  }
`;

const DropDown = styled.select`
  padding-left: 0.5em;
  border-radius: 0.2em;
`;

const Option = styled.option``;

const CheckBoxCotainer = styled.div`
  display: flex;
`;

const Filters = ({ bedrooms, regions, changeFilter }) => {
  const [filters, setFilters] = useState({ region: "", bedrooms: [] });

  const updateRegion = (value) => {
    const newFilter = { ...filters, region: value };
    setFilters(newFilter);
    changeFilter(newFilter);
  };

  const updateBedrooms = (value, status) => {
    let newFilter = { ...filters };
    if (status) {
      newFilter.bedrooms = [...filters.bedrooms, Number(value)].sort();
    } else {
      newFilter.bedrooms = filters.bedrooms.filter(
        (number) => number !== Number(value)
      );
    }
    setFilters(newFilter);
    changeFilter(newFilter);
  };

  return (
    <Container>
      <div>
        <label>Sector:</label>
        <DropDown onChange={(e) => updateRegion(e.target.value)}>
          <Option value={""}>Ninguno</Option>
          {regions.map((region, key) => (
            <Option value={region} key={key}>
              {region}
            </Option>
          ))}
        </DropDown>
      </div>
      <CheckBoxCotainer>
        <p>Habitaciónes:</p>
        {bedrooms.map((number, key) => (
          <div key={key}>
            <input
              type="checkbox"
              value={number}
              checked={_.includes(filters.bedrooms, number)}
              onChange={(e) => updateBedrooms(e.target.value, e.target.checked)}
            />
            <label>{number}</label>
          </div>
        ))}
      </CheckBoxCotainer>
    </Container>
  );
};

export default Filters;
