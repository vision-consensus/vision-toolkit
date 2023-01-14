import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M113.7,123.463l4.886-4.888a.64.64,0,0,0,0-.9l-.027-.027a.639.639,0,0,0-.9,0l-4.886,4.895-4.886-4.895a.639.639,0,0,0-.9,0l-.027.027a.628.628,0,0,0,0,.9l4.886,4.888-4.886,4.888a.64.64,0,0,0,0,.9l.027.027a.64.64,0,0,0,.9,0l4.886-4.888,4.886,4.888a.64.64,0,0,0,.9,0l.027-.027a.64.64,0,0,0,0-.9Z" transform="translate(-106.775 -117.462)" />
    </Svg>
  );
};

export default Icon;
