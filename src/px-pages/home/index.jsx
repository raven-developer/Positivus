/* Import Assets */
import './index-home.scss';

/* Import Components */
import { Btn, Card, Content, Section } from '@/px-components';

function HeroBanner() {
  return (
    <section className="px-section px-section--hero" data-variant="white" data-page="home-hero" id="home-hero">
      <div className="px-container px-container--base">
        <div className="px-section__content-block px-content-block px-flex px-flex--row px-flex--acenter gap-100">
          <div className="px-wrapper px-wrapper__left px-wrapper--base px-flex px-flex--col gap-30">
            <Content.HeroHeader
              heroHeading="Navigating the digital landscape for success"
            />
            <Content.SectionParagraph
              contentParagraph="Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation."
            />
            <Btn.ButtonFilled
              btnLabel="Book a Consultation"
              btnLink="/contact"
              btnType="primary"
              btnStyle="solid"
              divClass="px-animate"
            />
          </div>

          <div className="px-wrapper px-wrapper__right px-wrapper--base">
            <Content.SectionImage
              imageID="hero-image"
              fileName="home-hero-illustration.svg"
              imageAlt="Digital marketing concept with various digital icons"
            />
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
            <Content.SectionHeader
              sectionHeading="Services"
              extraClass="px-highlight--green"
            />
            <Content.SectionParagraph
              contentParagraph="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
            />
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

function SectionCTA() {
  return (
    <Section.FloatingSection
      FloatingVariant="white"
      FloatingID="home-cta"
      Gap="25"
      FloatingHeader="Let’s make things happen"
      FloatingHeaderClass="px-heading--small"
      FloatingParagraph="Contact us today to learn more about how our digital marketing services can help your business grow and succeed online."
      FloatingParagraphClass=""
      FloatingImageID="px-image--floating-01"
      FloatingImageFile=""
      FloatingImageAlt="Digital marketing concept with various digital icons"
    />
  );
}


export default function Home() {
  return (
    <>
      <HeroBanner />
      <ServicesSection />
      <SectionCTA />
    </>
  );
}