/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const pricingBox = css`
  background-color: white;
  text-align: center;
  border: 1px solid #ccdbd8;
  border-radius: 8px;
  padding: 40px 30px 60px;

  span {
    font-size: 25px;
  }

  p {
    color: #232221;
    font-size: 25px;
    margin-top: 5px;
    margin-bottom: 45px;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
  }

  h1 {
    font-size: 34px;
    font-weight: 800;
    margin-top: 0;
    margin-bottom: 0;
    font-family: 'Inter', sans-serif;
    display: inline-block;
  }

  span {
    display: inline-block;
    font-weight: 600;
    font-size: 26px;
  }

  ul {
    list-style-type: none;
    margin-left: 0;
    padding-left: 0;
    padding-bottom: 30px;
    height: 325px;

    div {
      margin-bottom: 15px;
      padding-top: 0px;
      color: #232221;
      font-size: 17px;
      line-height: 22px;
      font-weight: 700;
      font-family: 'Inter', sans-serif;
    }

    li {
      margin-bottom: 10px;
      color: #696663;
      font-size: 17px;
      line-height: 35px;
      font-weight: 400;
      text-align: center;
      font-family: 'Inter', sans-serif;
    }
  }
`;

const oldPrice = css`
  margin-top: 10px;
  color: rgba(35, 34, 33, 0.52);
  font-size: 18px;
  font-weight: 600;
  text-decoration: line-through;
`;

const deal = css`
  margin-bottom: 45px;
  color: #eeae46;
  font-weight: 600;
  font-size: 14px;
  font-family: 'Inter', sans-serif;
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

export default function Pricingbox(props) {
  return (
    <div css={pricingBox}>
      <div>
        <span role="img" aria-label="Icon">
          {props.emoji}
        </span>
        <br />
        <p>{props.heading}</p>
      </div>
      <div css={oldPrice}>{props.oldPrice}</div>
      <div>
        <h1>{props.newPrice}</h1>
        <span>/mo</span>
      </div>
      <div css={deal}>Save 20% for life!</div>
      <ul>
        <div>{props.listItem}</div>
        {props.planItems.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <button css={buttonGreen}>Get started</button>
    </div>
  );
}
