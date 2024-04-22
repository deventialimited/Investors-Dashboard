import { css } from "styled-components";
export const tabletPro = (props) => {
  return css`
    @media only screen and (max-width: 1330px) {
      ${props}
    }
  `;
};
export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 950px) {
      ${props}
    }
  `;
};
export const tabletMini = (props) => {
  return css`
    @media only screen and (max-width: 830px) {
      ${props}
    }
  `;
};

export const samsungTab = (props) => {
  return css`
    @media only screen and (max-width: 670px) {
      ${props}
    }
  `;
};
export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 480px) {
      ${props}
    }
  `;
};
