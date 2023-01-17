import React from "react";
import Button from "../../components/Button/Button";
import Flex from "../../components/Box/Flex";
import useWalletModal from "./useWalletModal";
import WalletConnect from "../../components/Svg/Icons/WalletConnect";

import { Config, ConnectorNames } from "./types";

export default {
  title: "Widgets/WalletModal",
  argTypes: {},
};

export const Wallet: React.FC = () => {
  const connectors: Config[] = [
    {
      title: "WalletConnect",
      icon: WalletConnect,
      connectorId: ConnectorNames.WalletConnect,
      priority: 3,
    },

  ];
  const { onPresentConnectModal } = useWalletModal({
    login: () => null,
    logout: () => null,
    title: '',
    walletList: connectors,
  });
  const { onPresentConnectModal: onPresentConnectModalDark } = useWalletModal({
    login: () => null,
    logout: () => null,
    title: '',
    walletList: connectors,
    isDark: true
  });
  return (
    <Flex>
      <Button onClick={onPresentConnectModal}>Open connect modal(light)</Button>
      <Button onClick={onPresentConnectModalDark}>Open connect modal(dark)</Button>
    </Flex>
  );
};
