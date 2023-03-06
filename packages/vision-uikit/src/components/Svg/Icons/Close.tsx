import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path fill="#8e16b4" d="M12,24A12,12,0,0,1,3.515,3.515,12,12,0,1,1,16.671,23.059,11.924,11.924,0,0,1,12,24Zm.02-10.767h0l3.036,3.041a.858.858,0,0,0,1.213-1.214l-3.037-3.041,3.03-3.035A.86.86,0,1,0,15.048,7.77L12.018,10.8,8.982,7.763a.856.856,0,0,0-1.212,0,.861.861,0,0,0,0,1.215l3.037,3.041-3.03,3.035A.86.86,0,0,0,8.99,16.27l3.03-3.035Z" transform="translate(0 0)" />
    </Svg>
  );
};

export default Icon;
