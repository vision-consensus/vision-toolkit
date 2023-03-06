import React from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import { ButtonProps } from "../../components/Button";
import { connectorLocalStorageKey, walletLocalStorageKey } from "./config";
import { Login, Config, ConnectorNames } from "./types";

interface Props {
  walletConfig: Config;
  login: Login;
  onDismiss: () => void;
  isDark?: boolean;
}

const WalletButton = styled(Button).attrs({ width: "100%", variant: "text", py: "16px" })`
  width:100%;
  background: ${({isDark}) => isDark ? '#1D1D1D' : '#FBFBFB'} ;
  border: 1px solid ${({isDark}) => isDark ? '#1D1D1D' : '#FBFBFB'};
  border-radius: 10px;
  height: 60px;
  margin-bottom:14px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 20px;
  box-shadow:none;
  &:hover{
    border: 1px solid ${({isDark}) => isDark ? '#3C14AF' : '#9669EC'};
  }
`;

interface MoreWalletCardProps extends ButtonProps {
  t: (key: string) => string;
}

export const MoreWalletCard: React.FC<MoreWalletCardProps> = ({ t, ...props }) => {
  return (
    <WalletButton variant="tertiary" {...props}>
      <Text fontSize="16px">{t("More")}</Text>
    </WalletButton>
  );
};

const WalletCard: React.FC<Props> = ({ login, walletConfig, onDismiss, isDark }) => {
  const { title, icon: Icon } = walletConfig;
  return (
    <WalletButton
      isDark={isDark}
      variant="tertiary"
      onClick={() => {
        // @ts-ignore
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

        // Since iOS does not support Trust Wallet we fall back to WalletConnect
        if (walletConfig.title === "Trust Wallet" && isIOS) {
          login(ConnectorNames.WalletConnect);
        } else {
          login(walletConfig.connectorId);
        }

        localStorage.setItem(walletLocalStorageKey, walletConfig.title);
        localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId);
        onDismiss();
      }}
      id={`wallet-connect-${title.toLocaleLowerCase()}`}
    >
      <Icon width="26px" />
      <Text fontSize="16px" color={isDark ? '#FFFFFF' : '#000000'}>{title}</Text>
    </WalletButton>
  );
};

export default WalletCard;
