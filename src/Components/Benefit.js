/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const benefitItem = css`
  margin-bottom: 50px;
`;

export default function Benefit(props) {
  return (
    <div css={benefitItem}>
      <img src={props.icon} alt={props.alt} />
      <h3>{props.heading}</h3> <span>{props.description}</span>
    </div>
  );
}
