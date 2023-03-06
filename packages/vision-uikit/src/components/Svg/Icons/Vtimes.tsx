import React, { ImgHTMLAttributes } from "react";
import { StyledIconImage } from "../types";
// @ts-ignore
import VtimesPng from './vtimes.png';

const Icon: React.FC<any> = (props) => {
  return (
    <StyledIconImage {...props} src={VtimesPng} alt="" />
  );
};

export default Icon;
