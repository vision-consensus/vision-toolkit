import React from "react";
import * as IconModule from ".";
import { SvgProps } from "./types";

const Icons = IconModule as unknown as { [key: string]: React.FC<SvgProps> };

const IconComponent: React.FC<{ iconName?: any; isActive?: boolean } & any> = ({ iconName, isActive, ...props }) => {
  const IconElement = Icons[`${iconName}Icon`];
  const IconElementFill = Icons[`${iconName}FillIcon`];
  return isActive ? <IconElementFill {...props} /> : IconElement ? <IconElement {...props} /> : null;
};

export default IconComponent;
