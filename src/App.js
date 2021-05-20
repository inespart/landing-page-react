import './App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Benefit from './Components/Benefit.js';
import Pricingbox from './Components/Pricingbox.js';
import vespa from './images/app-2.png';
import blogging from './images/blogging.png';
import check from './images/check.png';
import designwiz from './images/designwiz-logo.png';
import edreams from './images/edreams.png';
import fast from './images/fast.png';
import featureUpvote from './images/FeatureUpvote.png';
import flatFee from './images/flat-fee.png';
import howitworks from './images/howitworks.svg';
import kustomer from './images/kustomer.png';
import landingpage from './images/landing-page.png';
import relaxIcon from './images/relaxIcon.png';
import saberFeedback from './images/saberFeedback.png';
import saizmo from './images/saizmo.png';
import scalable from './images/scalable-1.png';
import unique from './images/scalable.png';
import signaturit from './images/signaturit.png';
import toldo from './images/toldo.png';
import topquality from './images/top-quality.png';
import unlimited from './images/unlimited.png';

// CSS-in-JS

// Nav Bar style
const navBarContainer = css`
  display: flex;
  margin: 0 250px;
  padding-top: 30px;

  img {
    width: 200px;
  }
`;

// Header style
const headerStyle = css`
  background-image: linear-gradient(167deg, #fff 53%, #fce8d1 0, #fce8d1 103%);
  height: 435px;
  padding-bottom: 160px;

  h1 {
    text-align: left;
  }
`;

const navBar = css`
  margin-left: auto;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  display: flex;
  align-items: center;

  span {
    padding: 0 15px;
    font-weight: 600;

    :hover {
      color: #066756;
      cursor: pointer;
    }
  }

  button {
    margin-left: 15px;
  }
`;

// Hero Section style
const heroStyle = css`
  margin-top: 115px;

  img {
    width: 120%;
    height: auto;
  }
`;

const flexContainer = css`
  display: flex;
  margin: 10px 250px;
`;

const largeBox = css`
  width: 60%;

  p {
    font-size: 18px;
    color: #696663;
    line-height: 28px;
    margin: 25px 0 15px;
  }

  span {
    color: #926f46;
    font-size: 14px;
  }
`;

const smallBox = css`
  width: 40%;
`;

export const buttonGreen = css`
  background-color: #066756;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  color: #fff;
  padding: 12px 17px;
  margin-top: 10px;
  font-size: 14px;
  font-family: 'Inter', sans-serif;
  cursor: pointer;

  :hover {
    background-color: #055c4d;
    box-shadow: rgb(0 0 0 / 12%) 0px 7px 50px 0px;
  }
`;

const buttonBrown = css`
  background-color: #d5c0a7;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  color: #fff;
  text-transform: uppercase;
  padding: 5px 11px;
  margin-right: 10px;
  font-size: 12px;
  font-family: 'Inter', sans-serif;
`;

// Hero Banner Customers style
const customersStyle = css``;

const customerStyleContainer = css`
  margin: 165px 250px;

  p {
    text-align: center;
    color: #d6c0a7;
    font-size: 14px;
  }
`;

const customerIconsStyle = css`
  display: flex;
  max-width: 100%;

  img {
    display: space-between;
    max-width: 15%;
    padding: 0 15px;
  }
`;

// Offers & Services style
const servicesContainer = css`
  margin: 0 250px;
  padding: 55px 0;

  p {
    font-size: 20px;
    font-weight: 600;
    text-align: left;
  }
`;

const columnsContainer = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  text-align: left;
  margin-top: 20px;
  font-size: 14px;
  padding-top: 15px;
  padding-bottom: 10px;
`;

const logo = css`
  img {
    width: 460px;
  }
`;

const offer = css`
  padding-top: 30px;
  padding-left: 60px;
  display: flex;
  flex-direction: column;
`;

const servicesBlockStyle = css`
  display: flex;
  margin-bottom: 20px;

  img {
    width: 32px;
    height: auto;
    padding-right: 10px;
  }

  div {
    display: inline-block;
    font-size: 20px;
    font-weight: 700;
  }
`;

// Our work style
const ourWorkStyle = css`
  background-color: #f5f5f4;
  padding: 100px 0;
`;

const ourWorkContainer = css`
  margin: 0 215px;
  text-align: center;
`;

const ourWorkItemsContainer = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  padding-top: 15px;
  padding-bottom: 35px;

  img {
    max-width: 100%;
  }
`;

// How it works style
const howItWorksStyle = css`
  background-color: white;
  padding: 60px 0;
`;

const stepsContainer = css`
  margin: 60px 350px;
`;

const stepStyle = css`
  background-color: #fde9d2;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 30px;
  margin-bottom: 60px;

  p {
    font-size: 16px;
    line-height: 24px;
    color: #4a4846;
  }
`;

const stepHeadingContainer = css`
  display: grid;
  grid-template-columns: 15% 80%;
  grid-gap: 15px;
  padding-top: 30px;
  padding-bottom: 20px;
`;

const number = css`
  font-size: 100px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  opacity: 0.3;
  text-align: center;
`;

const toggles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const toggleStyle = css`
  width: 90%;
  background-color: white;
  padding: 5px 10px;
  margin: 5px 0;
  box-shadow: 1px 1px 15px 0 rgb(19 19 19 / 15%);
  cursor: pointer;
  display: grid;
  grid-template-columns: 90% 10%;

  :hover {
    box-shadow: 1px 1px 15px 0 rgb(33 159 163 / 75%);
  }

  p {
    font-size: 16.8px;
    color: #232221;
    font-weight: 600;
  }

  span {
    font-size: 40px;
    text-align: center;
    font-weight: 700;
    color: #045e4f;
  }
`;

// Benefits styles
const benefitsStyle = css`
  padding-bottom: 100px;
  h2 {
    margin-bottom: 50px;
  }
`;

const benefitsContainer = css`
  margin: 0 250px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  img {
    height: 60px;
    width: auto;

    :hover {
      transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(5deg) rotateZ(5deg) skew(0deg, 0deg);
      transform-style: preserve-3d;
    }
  }

  span {
    color: #696663;
    font-size: 16px;
    line-height: 28px;
    font-weight: 400;
    text-align: left;
  }
`;

// Pricing style
const pricingStyle = css`
  background-color: #e6f0ee;
  padding: 100px 250px;

  span {
    color: black;
  }
`;

const pricingContainer = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
`;

// DesignWiz way style
const designWizWay = css`
  background-color: white;
  margin: 140px 350px;

  h1 {
    margin: 0;
  }
  h4 {
    margin-top: 10px;
    margin-bottom: 40px;
  }
  p {
    margin-top: 20px;
    margin-right: auto;
    margin-left: auto;
    font-family: 'Open Sans', sans-serif;
    color: #4a4846;
    font-size: 18px;
    line-height: 26px;
    font-weight: 400;
  }
`;

const argumentsDesignWizWay = css`
  margin-top: 50px;
  background-color: #e6f0ee;
  padding: 20px 40px;

  h3 {
    font-family: 'Open Sans', sans-serif;
  }

  p {
    margin: 0px auto 40px;
    font-family: 'Open Sans', sans-serif;
    color: #696663;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
  }

  span {
    text-decoration: line-through;
  }
`;

const relax = css`
  margin: 100px 350px 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    margin-top: 5px;
    color: #696663;
    font-size: 16px;
    line-height: 30px;
    font-weight: 400;
    text-align: center;
  }
`;

const designWizIcon = css`
  width: 200px;
  align-self: center;
`;

const relaxIconStyle = css`
  width: 300px;
  height: auto;
  align-self: center;
`;

const footerMenu = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-top: 30px;

  a {
    margin-left: 0px;
    padding-right: 0px;
    color: #066756;
    font-size: 18px;
    font-weight: 700;
    text-align: center;

    :hover {
      color: #232221;
    }
  }
`;

const legalText = css`
  margin: 0px 250px 30px;
  padding-top: 10px;
  border-top: 1px solid #e4e2e0;
  color: #696663;
  font-size: 12px;
  line-height: 25px;
  font-weight: 400;
  text-align: center;
`;

function App() {
  return (
    <>
      {/* Nav Bar */}
      <section css={navBarContainer}>
        <img src={designwiz} alt="Designwiz Logo" />
        <div css={navBar}>
          {' '}
          <span>How it works</span> <span>Our work</span> <span>About us</span>{' '}
          <span>Login</span> <button css={buttonGreen}>GET STARTED</button>
        </div>
      </section>
      {/* Hero */}
      <header css={headerStyle}>
        <section css={heroStyle}>
          <div css={flexContainer}>
            <div css={largeBox}>
              <div>
                <button css={buttonBrown}>New!</button>
                <span>Front-end development with Webflow</span>
              </div>
              <h1>
                We Are Your Reliable, Affordable & Experienced Startup Design
                Partner!
              </h1>
              <p>
                High-quality design work to help you grow your business.
                <br />
                Save time and money with an expert design partner.
              </p>
              <button css={buttonGreen}>GET STARTED</button>
            </div>
            <div css={smallBox}>
              <img src={blogging} alt="Blogging" />
            </div>
          </div>
          <section css={customersStyle}>
            <div css={customerStyleContainer}>
              <p>Trusted by these amazing brands</p>
              <div css={customerIconsStyle}>
                <img src={signaturit} alt="signaturit" />
                <img src={kustomer} alt="Kustomer" />
                <img src={featureUpvote} alt="FeatureUpvote" />
                <img src={saberFeedback} alt="SaberFeedback" />
                <img src={edreams} alt="eDreams" />
              </div>
            </div>
          </section>
        </section>
      </header>

      <main>
        {/* Offers & Services */}
        <section>
          <div css={servicesContainer}>
            <h2>Websites, landing pages, interfaces & more</h2>
            <div css={columnsContainer}>
              <div css={logo}>
                <img src={howitworks} alt="How it works logo" />
              </div>
              <div css={offer}>
                <div css={servicesBlockStyle}>
                  <img src={check} alt="check" />
                  <div>Websites</div>
                </div>
                <div css={servicesBlockStyle}>
                  <img src={check} alt="check" />
                  <div>Wireframes</div>
                </div>
                <div css={servicesBlockStyle}>
                  <img src={check} alt="check" />
                  <div>Mobile apps</div>
                </div>
                <div css={servicesBlockStyle}>
                  <img src={check} alt="check" />
                  <div>UI/UX design</div>
                </div>
                <div css={servicesBlockStyle}>
                  <img src={check} alt="check" />
                  <div>User interfaces</div>
                </div>
                <div css={servicesBlockStyle}>
                  <img src={check} alt="check" />
                  <div>Webflow dev</div>
                </div>
                <div css={servicesBlockStyle}>
                  <img src={check} alt="check" />
                  <div>Landing pages</div>
                </div>
                <div css={servicesBlockStyle}>
                  <img src={check} alt="check" />
                  <div>And more!</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Our work */}
        <section css={ourWorkStyle}>
          <div css={ourWorkContainer}>
            <h2>Our work</h2>
            <div css={ourWorkItemsContainer}>
              <div>
                <img src={toldo} alt="Toldo" />
              </div>
              <div>
                <img src={vespa} alt="Vespa" />
              </div>
              <div>
                <img src={saizmo} alt="Saizmo" />
              </div>
              <div>
                <img src={landingpage} alt="Landing Page" />
              </div>
            </div>
            <button css={buttonGreen}>See more work</button>
          </div>
        </section>
        {/* How it works */}
        <section css={howItWorksStyle}>
          <div>
            <h2>How it works</h2>
            <h4>
              Getting high quality designs without breaking the bank has never
              been easier.
              <br />
              No hiring, no contracts, cancel any time.
            </h4>
            <div css={stepsContainer}>
              <div css={stepStyle}>
                <div css={stepHeadingContainer}>
                  <div css={number}>1</div>
                  <div>
                    <h3>Request a design</h3>{' '}
                    <p>
                      Once you've become a member you'll get access to our
                      design requests tool where you'll be able to submit as
                      many job requests as you want, share your feedback and
                      download files, all in one software!
                    </p>
                  </div>
                </div>
                <div css={toggles}>
                  <div css={toggleStyle}>
                    <div>
                      <p>What type of designs can I request?</p>
                    </div>
                    <div>
                      <span>+</span>
                    </div>
                  </div>
                  <div css={toggleStyle}>
                    <div>
                      <p>How many designs can I submit at once?</p>
                    </div>
                    <div>
                      <span>+</span>
                    </div>
                  </div>
                  <div css={toggleStyle}>
                    <div>
                      <p>How long does a request take to complete?</p>
                    </div>
                    <div>
                      <span>+</span>
                    </div>
                  </div>
                </div>
              </div>
              <div css={stepStyle}>
                <div css={stepHeadingContainer}>
                  <div css={number}>2</div>
                  <div>
                    <h3>We work one request at a time</h3>
                    <p>
                      Receive your design, per your brand guidelines, within
                      48hrs on average - 7 days a week.
                    </p>
                  </div>
                </div>
                <div css={toggles}>
                  <div css={toggleStyle}>
                    <div>
                      <p>How many revisions I can request per task?</p>
                    </div>
                    <div>
                      <span>+</span>
                    </div>
                  </div>
                  <div css={toggleStyle}>
                    <div>
                      <p>How long does a request take to complete?</p>
                    </div>
                    <div>
                      <span>+</span>
                    </div>
                  </div>
                  <div css={toggleStyle}>
                    <div>
                      <p>How do I provide feedback to the designers?</p>
                    </div>
                    <div>
                      <span>+</span>
                    </div>
                  </div>
                </div>
              </div>
              <div css={stepStyle}>
                <div css={stepHeadingContainer}>
                  <div css={number}>3</div>
                  <div>
                    <h3>Complete and download</h3>
                    <p>
                      Once completed, you'll be able to download all the source
                      files instantly. We keep all the files in one convenient
                      location, no more emailing files.
                    </p>
                  </div>
                </div>
                <div css={toggles}>
                  <div css={toggleStyle}>
                    <div>
                      <p>Where can I download the source files</p>
                    </div>
                    <div>
                      <span>+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Benefits */}
        <section css={benefitsStyle}>
          <h2>Benefits</h2>
          <div css={benefitsContainer}>
            <Benefit
              icon={unlimited}
              alt="Unlimited icon"
              heading="Unlimited Requests"
              description="Make as many design requests or revisions as you wish."
            />
            <Benefit
              icon={fast}
              alt="Fast icon"
              heading="Speedy delivery"
              description="Get your designs in just a few days on average, 7 days a week."
            />
            <Benefit
              icon={flatFee}
              alt="Flat fee icon"
              heading="Fixed monthly price"
              description="No surprises here! Pay the same fixed price each month."
            />
            <Benefit
              icon={topquality}
              alt="Top quality icon"
              heading="Top-grade quality"
              description="Delightful design at your fingerprints whenever you need it."
            />
            <Benefit
              icon={scalable}
              alt="Scalable icon"
              heading="Flexible to scale"
              description="Scale up or down as you need. Cancel anytime you want."
            />
            <Benefit
              icon={unique}
              alt="Unique icon"
              heading="Unique and yours"
              description="Each design is made for you and is 100% yours - you own it."
            />
          </div>
        </section>
        {/* Pricing */}
        <section css={pricingStyle}>
          <div>
            <h2>Fair, simple pricing for all</h2>{' '}
            <h4>
              Get a <span>full refund in the first 14 days</span> if you decide
              we’re not a good fit.
            </h4>
          </div>
          <div css={pricingContainer}>
            <Pricingbox
              emoji="🌱"
              heading="Design Growth"
              oldPrice="1,199€/mo"
              newPrice="899€"
              planItems={[
                '40 h / mo work',
                'Unlimited requests',
                'Unlimited revisions',
                'Unlimited brands',
                'Free stock photos',
                'Source files',
                'Cancel anytime',
              ]}
            />
            <Pricingbox
              emoji="🔥"
              heading="Design Scale"
              oldPrice="1,799€/mo"
              newPrice="1,499€"
              planItems={[
                '80 h / mo work',
                'Unlimited requests',
                'Unlimited revisions',
                'Unlimited brands',
                'Free stock photos',
                'Source files',
                'Cancel anytime',
              ]}
            />
            <Pricingbox
              emoji="🚀"
              heading="Design + Webflow"
              oldPrice="2,399€/mo"
              newPrice="1,999€"
              listItem="All the Design Scale plan features plus"
              planItems={[
                'Webflow development',
                'Simple animations',
                'Premium illustrations',
                'Ongoing maintenance',
                'Cancel anytime',
              ]}
            />
          </div>
        </section>
        {/* The DesignWiz way */}
        <section css={designWizWay}>
          <div>
            <h1>The DesignWiz way</h1>
            <h4>The sustainable, low-stress way we do business</h4>
            <p>
              We know how important design is for all companies and startups.
              Having a good design can help you improve your branding, your
              position and delight your customers with an amazing experience
              using your product or service.
            </p>
            <p>
              But sometimes, achieving this quality is very expensive. And not
              all companies have the cash to make that happen.
            </p>
            <p>
              That is why, after a decade designing for all types of companies
              and startups, we've decided to create DesignWiz. To help you get
              high quality design the reliable and affordable way delivered by
              experts.
            </p>
          </div>
          <div css={argumentsDesignWizWay}>
            <div>
              <h3>No shenanigans</h3>
              <p>
                We treat you how we’d like to be treated as customers. Some
                concrete examples: you can cancel anytime with zero hassle, and
                upgrade or downgrade whenever you want.
              </p>
            </div>
            <div>
              <h3>We want you to be happy with our service.</h3>
              <p>
                Not <span>happy</span> delighted? Let us know and we’ll find a
                solution. If we can’t, we’ll refund your most recent payment.
              </p>
            </div>
            <div>
              <h3>We keep things simple</h3>
              <p>
                We strive for simplicity, something that is not easy to achieve.
                We want DesignWiz to always be helpful, and not a source of
                confusion of frustration.
              </p>
            </div>
            <div>
              <h3>We’re friendly and helpful</h3>
              <p>
                Got a problem? Let us know and we’ll do our best to solve it.
              </p>
            </div>
            <div>
              <h3>We do things well</h3>
              <p>
                Perfection is an unreachable target but we can still aim for it.
                We avoid half-solutions and stuff we don't believe it's not
                good.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <section css={relax}>
          <img src={designwiz} alt="logo" css={designWizIcon} />
          <p>
            Unlock a more affordable and convenient way of getting high-quality
            design work. <br />- so you can relax knowing you are in expert
            hands :)
          </p>
          <img src={relaxIcon} alt="relax" css={relaxIconStyle} />

          <div css={footerMenu}>
            <div>
              <a href="#1">How it works</a>
            </div>
            <div>
              <a href="#1">About us</a>
            </div>
            <div>
              <a href="#1">Contact us</a>
            </div>
            <div>
              <a href="#1">Schedule a call</a>
            </div>
          </div>
        </section>

        <section css={legalText}>
          <div>@Copyright 2021 · Made in Barcelona · Designwiz</div>
        </section>
      </footer>
    </>
  );
}

export default App;
