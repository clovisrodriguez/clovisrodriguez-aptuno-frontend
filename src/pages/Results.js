/* eslint-disable import/first */
/**
 * Dependencies
 */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import styled from "styled-components";

/**
 * Actions
 */
import { getResultsByPageId } from "store/getResultsPage/actions";

/**
 * Components
 */
import Card from "components/Card";
import Pagination from "components/Pagination";
import Filters from "components/Filters";

/**
 * Others
 */
import { history } from "store/configureStore";
const DEFAULT_PAGE = 1;

const ResultsContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: flex-start;
`;

const Results = ({ match }) => {
  const appData = useSelector((state) => state.getAppData);
  const pageData = useSelector((state) => state.getResultPage) || [];
  const loader = useSelector((state) => state.loader);
  const dispatch = useDispatch();
  const pageID = _.get(match, "params.pageId") || DEFAULT_PAGE;
  const data = _.get(pageData, "data", []);

  const changeFilter = (filters) => {
    dispatch(getResultsByPageId(DEFAULT_PAGE, filters));
    history.push(`/results/${DEFAULT_PAGE}`);
  };

  if (_.get(pageData, "pageNumber") !== pageID) {
    dispatch(getResultsByPageId(pageID, pageData.filters));
  }

  return (
    <>
      <ResultsContainer>
        <Filters
          regions={appData.regions}
          bedrooms={appData.bedrooms}
          changeFilter={changeFilter}
        />
        {data.map((card, key) => (
          <Card card={card} key={key} />
        ))}
      </ResultsContainer>
      {data.length && !loader && (
        <Pagination {...{ activePage: pageID, pages: pageData.pages }} />
      )}
    </>
  );
};

export default Results;
