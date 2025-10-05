import React from "react";
import "./styles/index-btn.scss";

export function ButtonFilled({ btnLabel, btnLink, btnType = "primary", btnStyle, divClass }) {
  return (
    <div className={`px-wrapper__button px-block--animate ${divClass}`}>
      <a href={btnLink} className={`px-btn px-btn--${btnType} px-btn--${btnStyle}`}>
        <span className="px-section__paragraph px-btn__paragraph">
          {btnLabel}
        </span>
      </a>
    </div>
  );
}

export function ButtonRightIcon({ btnLabel, btnLink, btnType = "tertiary", btnStyle = "transparent", btnIcon = "arrow-30deg.svg", btnIconAlt, divClass }) {
  return (
    <div className={`px-wrapper__button px-block--animate ${divClass}`}>
      <a href={btnLink} className={`px-btn px-btn--${btnType} px-btn--${btnStyle} px-flex--acenter gap-15`}>
        <span className="px-btn__icon">
          <img src={`${import.meta.env.BASE_URL}px-assets/images/${btnIcon}`} alt={btnIconAlt} />
        </span>
        <span className="px-section__paragraph px-btn__paragraph">
          {btnLabel}
        </span>
      </a>
    </div>
  );
}

export function ButtonLeftIcon({ btnLabel, btnLink, btnType = "tertiary", btnStyle = "transparent", btnIcon = "arrow-stroke.svg", btnIconAlt, divClass }) {
  return (
    <div className={`px-wrapper__button px-block--animate ${divClass}`}>
      <a href={btnLink} className={`px-btn px-btn--${btnType} px-btn--${btnStyle} px-flex--acenter gap-15`}>
        <span className="px-section__paragraph px-btn__paragraph">
          {btnLabel}
        </span>
        <span className="px-btn__icon">
          <img src={`${import.meta.env.BASE_URL}px-assets/images/${btnIcon}`} alt={btnIconAlt} />
        </span>
      </a>
    </div>
  );
}