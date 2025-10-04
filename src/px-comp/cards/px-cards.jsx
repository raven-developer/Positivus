import React from "react";
import * as Btn from '../../px-comp/buttons/px-buttons';
import "./index-cards.scss";

export function ServicesCard({ cardTitle, cardVariant, cardImage, cardImgAlt }) {

  const titleMapping = Array.isArray(cardTitle) ? cardTitle : [cardTitle];

  return (
    <div className={`px-card px-card--service px-bgcolor--${cardVariant} px-flex px-flex-row gap-70`}>
      <div className="px-card__content px-flex px-flex--col gap-30">
        <h3 className="px-card__title px-section__heading px-heading--card">
          {titleMapping.map((word, i) => (
            <span key={i}>
              {word}{" "}
            </span>
          ))}
        </h3>
        <Btn.ButtonRightIcon
          btnLabel="Learn More"
          btnLink="/"
          btnType="tertiary"
          btnStyle="transparent"
          btnIconAlt="Arrow pointing 30 degrees to the right"
          btnIcon="arrow-30deg.svg"
          divClass="px-animate"
        />
      </div>
      <div className="px-card__image-container px-flex px-flex--center">
        <img src={`${import.meta.env.BASE_URL}px-assets/images/${cardImage}`} alt={cardImgAlt} />
      </div>
    </div>
  );
}