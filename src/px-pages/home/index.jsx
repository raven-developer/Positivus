/* Import Assets */
import './index-home.scss';

/* Import Components */
import * as Btn from '../../px-comp/buttons/px-buttons';
import * as Card from '../../px-comp/cards/px-cards';

function HeroBanner() {
  return (
    <section className="px-section px-section--hero" data-variant="white" data-page="home-hero" id="home-hero">
      <div className="px-container px-container--base">
        <div className="px-section__content-block px-content-block px-flex px-flex--row px-flex--acenter gap-100">
          <div className="px-wrapper px-wrapper__left px-wrapper--base px-flex px-flex--col gap-30">
            <div className="px-wrapper__header px-block--animate px-animate">
              <h1 className="px-section__heading px-heading--hero">Navigating the digital landscape for success</h1>
            </div>
            <div className="px-wrapper__content px-block--animate px-animate">
              <p className="px-section__paragraph">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
            </div>
            <Btn.ButtonFilled
              btnLabel="Book a Consultation"
              btnLink="/contact"
              btnType="primary"
              btnStyle="solid"
              divClass="px-animate"
            />
          </div>

          <div className="px-wrapper px-wrapper__right px-wrapper--base">
            <figure className="px-figure px-img-container px-img-0001" id="px-img-0001">
              <img src={`${import.meta.env.BASE_URL}px-assets/images/home-hero-illustration.svg`} alt="" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="px-section px-section--base px-section__home-services" data-variant="white" data-page="home-services" id="home-services">
      <div className="px-container px-container--base">
        <div className="px-section__content-block px-content-block px-flex px-flex--col gap-100">
          <div className="px-wrapper px-wrapper__top px-wrapper--800 px-flex px-flex--row gap-40">
            <div className="px-wrapper__header px-block--animate px-animate">
              <h2 className="px-section__heading px-heading--base px-highlight--green">Services</h2>
            </div>
            <div className="px-wrapper__content px-block--animate px-animate">
              <p className="px-section__paragraph">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
            </div>
          </div>

          <div className="px-wrapper px-wrapper__bottom px-wrapper--base">
            <div className="px-wrapper__cards px-grid px-grid--2col gap-40">
              <Card.ServicesCard
                cardTitle={["Search Engine", "Optimization"]}
                cardVariant="gray"
                cardImage="tokyo-magnifier-web-search.png"
                cardImgAlt="Magnifying glass over a webpage"
              />
              <Card.ServicesCard
                cardTitle="Pay-per-click advertising"
                cardVariant="green"
                cardImage="tokyo-magnifier-web-search.png"
                cardImgAlt="Magnifying glass over a webpage"
              />

              <Card.ServicesCard
                cardTitle="Social Media Marketing"
                cardVariant="dark"
                cardImage="tokyo-magnifier-web-search.png"
                cardImgAlt="Magnifying glass over a webpage"
              />

              <Card.ServicesCard
                cardTitle="Email Marketing"
                cardVariant="gray"
                cardImage="tokyo-magnifier-web-search.png"
                cardImgAlt="Magnifying glass over a webpage"
              />

              <Card.ServicesCard
                cardTitle="Content Creation"
                cardVariant="green"
                cardImage="tokyo-magnifier-web-search.png"
                cardImgAlt="Magnifying glass over a webpage"
              />

              <Card.ServicesCard
                cardTitle="Analytics and Tracking"
                cardVariant="dark"
                cardImage="tokyo-magnifier-web-search.png"
                cardImgAlt="Magnifying glass over a webpage"
              />


            </div>
          </div>
        </div>
      </div>

    </section>
  );
}


export default function Home() {
  return (
    <>
      <HeroBanner />
      <ServicesSection />
    </>
  );
}