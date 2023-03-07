import React from "react";
import useVisionweb from "./useVisionweb";

export default {
  title: "Hooks/useVisionweb",
  argTypes: {},
};

export const Default: React.FC = () => {
  const { visionWeb, account, chainId } = useVisionweb();
  console.log(visionWeb)
  return (
    <div style={{ padding: "32px" }}>
      <div>{account}</div>
      <div>{chainId}</div>
    </div>
  );
};
