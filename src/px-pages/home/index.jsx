/* Import Assets */
import './index-home.scss';
import * as Btn from '../../px-comp/buttons/px-buttons';

function HeroBanner() {
  return (
    <section className="px-section px-section--hero" data-variant="white" data-page="home-hero" id="home-hero">
      <div className="px-container px-container--base">
        <div className="px-section__content-block px-content-block px-flex px-flex--row gap-100">
          <div className="px-wrapper px-wrapper__left px-wrapper--base px-flex px-flex--col">
            <h1 className="px-section__heading px-heading--hero">Navigating the digital landscape for success</h1>
            <p className="px-section__paragraph">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
            <Btn.Primary
              label="Book a Consultation"
              url="/contact"
            />
          </div>
          <div className="px-wrapper px-wrapper__right px-wrapper--base">
            <figure className="px-figure px-img-container px-img-0001" id="px-img-0001">
              <img src="/px-assets/images/home-hero-illustration.svg" alt="" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}


export default function Home() {
  return (
    <div className="px-content--home">
      <HeroBanner />
    </div>
  );
}