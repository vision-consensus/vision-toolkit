import { SVGAttributes } from "react";
import styled, { DefaultTheme } from "styled-components";
import { SpaceProps } from "styled-system";
import { Colors } from "../../theme";

export interface SvgProps extends SVGAttributes<HTMLOrSVGElement>, SpaceProps {
  theme?: DefaultTheme;
  spin?: boolean;
}

export type IconComponentType = {
  iconName: string;
  isActive?: boolean;
  height?: string;
  width?: string;
  activeColor?: string;
  activeBackgroundColor?: keyof Colors;
} & SvgProps;

export const StyledIconImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 12px;
`;
