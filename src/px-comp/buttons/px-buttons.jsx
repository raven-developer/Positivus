import "./index-btn.scss";

export function Primary({ label, url }) {
  return (
    <div className="px-wrapper--button">
      <a href={url} className="px-btn px-btn--primary px-btn--solid">
        <div className="px-btn__content">
          <span className="px-section__paragraph px-btn__paragraph">
            {label}
          </span>
        </div>
      </a>
    </div>
  );
}