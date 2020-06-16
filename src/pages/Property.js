/* eslint-disable import/first */
/**
 * Dependencies
 */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

/**
 * Actions
 */
import { getPageByPropertyId } from "store/activeProperty/actions";

/**
 * Mockups
 */
import Mockup from "images/not-available-list.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  @media (min-width: ${(props) => props.theme.spacing.md}) {
    margin: 0 3em;
  }
  @media (min-width: ${(props) => props.theme.spacing.lg}) {
    margin: 0 17em;
    flex-direction: row;
  }
`;

const CarouselContainer = styled.div`
  width: 100%;
  * {
    top: unset;
    padding: unset;
    right: unset;
    border: unset;
  }
`;

const Description = styled.div`
  padding: 1em;
  max-width: 50em;
  h2 {
    font-size: 3em;
    margin-bottom: 2em;
  }
  hr {
    border-top: 1px solid rgba(0, 0, 0, 0.3);
    margin: 1em 0;
  }
  p {
    margin-bottom: 0.5em;
  }
`;

const Property = ({ match }) => {
  const propertyData = useSelector((state) => state.propertyData);
  const images = _.get(propertyData, "images", [Mockup]);
  const {
    title,
    description,
    bedrooms,
    bathrooms,
    pricing,
    area,
  } = propertyData;
  const pageID = _.get(match, "params.propertyId");
  const dispatch = useDispatch();
  dispatch(getPageByPropertyId(pageID));

  return (
    <Container>
      <CarouselContainer>
        <Carousel showIndicators={true} showThumbs={true}>
          {images.map((image, key) => (
            <LazyLoadImage src={image} effect="opacity" height={800} />
          ))}
        </Carousel>
      </CarouselContainer>
      <Description>
        <h2>{title}</h2>
        <p>{description}</p>
        <hr></hr>
        <p>Habitaciones: {bedrooms}</p>
        <p>Baños: {bathrooms}</p>
        <p>
          Area: {area}M<sup>2</sup>
        </p>
        <div>
          {pricing && (
            <>
              {" "}
              <p>precio</p>
              <p>
                Arriendo:{" "}
                {new Intl.NumberFormat("co-ES", {
                  style: "currency",
                  currency: "COP",
                }).format(pricing.rentalPrice)}
              </p>
              <p>
                Administración:{" "}
                {new Intl.NumberFormat("co-ES", {
                  style: "currency",
                  currency: "COP",
                }).format(pricing.administrativeFee)}
              </p>
            </>
          )}
        </div>
        <Link to={"/results/1"}>
          <button className="primary-button">Buscar más</button>
        </Link>
      </Description>
    </Container>
  );
};

export default Property;
