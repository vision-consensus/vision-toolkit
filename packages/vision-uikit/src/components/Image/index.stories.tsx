import React from "react";
import { random, times } from "lodash";
import styled from "styled-components";
import Flex from "../Box/Flex";
import Box from "../Box/Box";
import Text from "../Text/Text";
import Img from "./Image";

export default {
  title: "Components/Image",
  argTypes: {},
};

export const Image: React.FC = () => {
  return (
    <div>
      <Img src="https://via.placeholder.com/800x400" width={800} height={400} alt="test" />
      <div>Image</div>
    </div>
  );
};

export const LazyImages: React.FC = () => {
  return (
    <Flex flexWrap="wrap">
      {times(40, (index) => (
        <Img
          key={index}
          src={`https://via.placeholder.com/${150 + index}`}
          width={150}
          height={150}
          mb="16px"
          mr="16px"
        />
      ))}
    </Flex>
  );
};

const StyledBox = styled(Box)`
  border: 1px solid '#ddd';
  flex-basis: 100px;
  text-align: center;
`;


export const ProfileAvatar: React.FC = () => {
  return (
    <div>
      <Text>Shows Placeholder until image is downloaded</Text>
      <Text>Shows placeholder if the image does not download</Text>
    </div>
  );
};
