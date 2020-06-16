/**
 * Dependencies
 */
import React from "react";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Carousel } from "react-responsive-carousel";
import _ from "lodash";
import { Link } from "react-router-dom";

/**
 * Mockups
 */
import Mockup from "images/not-available-list.png";

const CardContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 1.5em 0;
  border-radius: 1em;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  flex-direction: column;
  .lazy-load-image-loaded img {
    height: 300px;
  }
  a {
    text-decoration: none;
  }
  @media (min-width: ${(props) => props.theme.spacing.md}) {
    margin: 1.5em 1em;
    width: 31%;
    .lazy-load-image-loaded img {
      height: 400px;
    }
  }
  @media (min-width: ${(props) => props.theme.spacing.lg}) {
    width: 23%;
  }
`;

const ImageContainer = styled.div`
  height: 100%;
  width: auto;
`;

const Description = styled.div`
  padding: 0.6em;
  height: 150px;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  color: black;
  justify-content: space-between;
  h5 {
    font-size: 1.2em;
    height: 50px;
  }
`;

const Card = ({ card }) => {
  const images = _.get(card, "images", [Mockup]);
  return (
    <CardContainer>
      <Carousel
        showArrows={true}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
      >
        {images.map((image, key) => (
          <ImageContainer key={key}>
            <LazyLoadImage src={image} effect="opacity" />
          </ImageContainer>
        ))}
      </Carousel>
      <Link to={`/property/${card.id}`}>
        <Description>
          <h5>{card.title}</h5>
          {/* <p>{card.type}</p> No viene la propiedad en el endpoint */}
          <div>
            <p>Habitaciones: {card.bedrooms}</p>
            <p>
              Area: {card.area} M<sup>2</sup>
            </p>
            <p>
              Precio:{" "}
              {new Intl.NumberFormat("co-ES", {
                style: "currency",
                currency: "COP",
              }).format(
                card.pricing.rentalPrice + card.pricing.administrativeFee
              )}
            </p>
          </div>
        </Description>
      </Link>
    </CardContainer>
  );
};

export default Card;
