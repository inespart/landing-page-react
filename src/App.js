import './App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import blogging from './images/blogging.png';
import designwiz from './images/designwiz-logo.png';

// CSS-in-JS

const navBarContainer = css`
  display: flex;
  margin: 0 250px;
  padding: 30px 0;

  img {
    width: 200px;
  }
`;

const navBar = css`
  margin-left: auto;
`;

const heroStyle = css`
  background-color: #6999be;
  background-image: linear-gradient(167deg, #fff 53%, #fce8d1 0, #fce8d1 103%);
  height: 100vh;
  margin-top: 115px;

  img {
    width: 120%;
    height: auto;
  }
`;

const flexContainer = css`
  display: flex;
  margin: 40px 250px;
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
  text-transform: uppercase;
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

function App() {
  return (
    <>
      <header>
        <section css={navBarContainer}>
          <img src={designwiz} alt="Designwiz Logo" />
          <div css={navBar}>
            {' '}
            How it works Our work About us Login GET STARTED
          </div>
        </section>
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
              <button css={buttonGreen}>Get Started</button>
            </div>
            <div css={smallBox}>
              <img src={blogging} alt="Blogging" />
            </div>
          </div>
        </section>
      </header>

      {/* <main></main>
      <footer></footer> */}
    </>
  );
}

export default App;
