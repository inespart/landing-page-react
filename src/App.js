import './App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import vespa from './images/app-2.png';
import blogging from './images/blogging.png';
import check from './images/check.png';
import designwiz from './images/designwiz-logo.png';
import edreams from './images/edreams.png';
import featureUpvote from './images/FeatureUpvote.png';
import howitworks from './images/howitworks.svg';
import kustomer from './images/kustomer.png';
import landingpage from './images/landing-page.png';
import saberFeedback from './images/saberFeedback.png';
import saizmo from './images/saizmo.png';
import signaturit from './images/signaturit.png';
import toldo from './images/toldo.png';

// CSS-in-JS

// Navigation Bar
const navBarContainer = css`
  display: flex;
  margin: 0 250px;
  padding-top: 30px;

  img {
    width: 200px;
  }
`;

// Header
const headerStyle = css`
  background-image: linear-gradient(167deg, #fff 53%, #fce8d1 0, #fce8d1 103%);
  height: 435px;
  padding-bottom: 160px;
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

// Hero Section
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

const buttonGreen = css`
  background-color: #066756;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  color: #fff;
  /* text-transform: uppercase; */
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

// Hero Banner Customers
const customersStyle = css`
  /* background-color: #fbe7d0; */
  /* padding-bottom: 5px; */
`;

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

// How it works Style
const howItWorksStyle = css`
  margin: 0 250px;
  padding: 55px 0;

  p {
    font-size: 20px;
    font-weight: 600;
    text-align: left;
    /* margin-left: 55px; */
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
  /* display: flex; */

  img {
    width: 460px;
    /* justify-content: center; */
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
  /* align-items: center; */
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

function App() {
  return (
    <>
      <section css={navBarContainer}>
        <img src={designwiz} alt="Designwiz Logo" />
        <div css={navBar}>
          {' '}
          <span>How it works</span> <span>Our work</span> <span>About us</span>{' '}
          <span>Login</span> <button css={buttonGreen}>GET STARTED</button>
        </div>
      </section>
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
        {/* How it works */}
        <section>
          <div css={howItWorksStyle}>
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
                  <div>Websites</div>
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
      </main>
      {/* <footer></footer> */}
    </>
  );
}

export default App;
