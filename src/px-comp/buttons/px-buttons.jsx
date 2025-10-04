import React from "react";
import "./index-btn.scss";

export function ButtonFilled({ btnLabel, btnLink, btnType, btnStyle, divClass }) {
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

export function ButtonRightIcon({ btnLabel, btnLink, btnType, btnStyle, btnIcon, btnIconAlt, divClass }) {
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