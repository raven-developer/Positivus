export function SectionParagraph({ contentParagraph, extraClass }) {
  return (
    <div className="px-wrapper__content px-block--animate px-animate">
      <p className={`px-section__paragraph ${extraClass}`}>{contentParagraph}</p>
    </div>
  );
}

export function HeroHeader({ heroHeading, extraClass }) {
  return (
    <div className="px-wrapper__header px-block--animate px-animate">
      <h1 className={`px-section__heading px-heading--hero ${extraClass}`}>{heroHeading}</h1>
    </div>
  );
}

export function SectionHeader({ sectionHeading, extraClass }) {
  return (
    <div className="px-wrapper__header px-block--animate px-animate">
      <h2 className={`px-section__heading px-heading--base ${extraClass}`}>{sectionHeading}</h2>
    </div>
  );
}

export function SectionImage({ imageID, fileName, imageAlt }) {
  return (
    <figure className={`px-figure px-img-container ${imageID}`} id={imageID}>
      <img src={`${import.meta.env.BASE_URL}px-assets/images/${fileName}`} alt={imageAlt} />
    </figure>
  )
}