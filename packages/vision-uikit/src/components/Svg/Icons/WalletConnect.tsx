import React, { ImgHTMLAttributes } from "react";
import { StyledIconImage } from "../types";
// @ts-ignore
import WalletPng from './walletconnect.png';

const Icon: React.FC<any> = (props) => {
  return (
    <StyledIconImage {...props} src={WalletPng} alt="" />
  );
};

export default Icon;
