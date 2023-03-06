import React, { ImgHTMLAttributes } from "react";
import { StyledIconImage } from "../types";
// @ts-ignore
import MetaMaskPng from './metamask.png';

const Icon: React.FC<any> = (props) => {
  return (
    <StyledIconImage {...props} src={MetaMaskPng} alt="" />
  );
};

export default Icon;
