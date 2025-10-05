import { Btn, Card, Content } from './';

export function FloatingSection({ FloatingVariant, FloatingID, Gap, FloatingHeader, FloatingHeaderClass, FloatingParagraph, FloatingParagraphClass, FloatingImageID, FloatingImageFile, FloatingImageAlt }) {
  return (
    <section className={`px-section px-section--base px-section--floating px-section__${FloatingID}`} data-variant={FloatingVariant} data-page={FloatingID} id={FloatingID}>
      <div className="px-container px-container--base">
        <div className="px-section__content-block px-content-block px-flex px-flex--row px-flex--acenter gap-100">
          <div className={`px-wrapper px-wrapper__left px-wrapper--base px-flex px-flex--col gap-${Gap}`}>
            <Content.SectionHeader
              sectionHeading={FloatingHeader}
              extraClass={FloatingHeaderClass}
            />
            <Content.SectionParagraph
              contentParagraph={FloatingParagraph}
              extraClass={FloatingParagraphClass}
            />
            <Btn.ButtonFilled
              btnLabel="Get your free proposal"
              btnLink="/contact"
              btnType="primary"
              btnStyle="solid"
              divClass="px-animate"
            />
          </div>
          <div className="px-wrapper px-wrapper__bottom px-wrapper--base">
            <Content.SectionImage
              imageID={FloatingImageID}
              fileName={FloatingImageFile}
              imageAlt={FloatingImageAlt}
            />
          </div>
        </div>
      </div>
    </section>
  );
}