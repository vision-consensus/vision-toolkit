import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import Box from "../../components/Box/Box";
import Text from "../../components/Text/Text";
import Heading from "../../components/Heading/Heading";
import { ModalBody, ModalCloseButton, ModalContainer, ModalHeader, ModalTitle } from "../Modal";
import WalletCard from "./WalletCard";
import config, { walletLocalStorageKey } from "./config";
import { Config, Login } from "./types";
import useMatchBreakpoints from "../../hooks/useMatchBreakpoints";

interface Props {
  login: Login;
  onDismiss?: () => void;
  title?: string;
  walletList?: Config[];
  cover?: boolean;
  isDark?: boolean;
}

const WalletWrapper = styled(Box)`
  border-bottom:1px solid rgba(153,162,174,0.2);
  padding:24px 28px;
  width:100%;
  

`;

/**
 * Checks local storage if we have saved the last wallet the user connected with
 * If we find something we put it at the top of the list
 *
 * @returns sorted config
 */
const getPreferredConfig = (walletConfig: Config[]) => {
  const preferredWalletName = localStorage.getItem(walletLocalStorageKey);
  const sortedConfig = walletConfig.sort((a: Config, b: Config) => a.priority - b.priority);

  if (!preferredWalletName) {
    return sortedConfig;
  }

  const preferredWallet = sortedConfig.find((sortedWalletConfig) => sortedWalletConfig.title === preferredWalletName);

  if (!preferredWallet) {
    return sortedConfig;
  }

  return [
    preferredWallet,
    ...sortedConfig.filter((sortedWalletConfig) => sortedWalletConfig.title !== preferredWalletName),
  ];
};

const ConnectModal: React.FC<Props> = ({ login, onDismiss = () => null, title, cover, walletList, isDark = false }) => {
  const displayConfig = cover && walletList ? walletList : walletList ? config.concat(walletList) : config;
  const sortedConfig = getPreferredConfig(displayConfig);
  const { isMobile } = useMatchBreakpoints();
  console.log(isDark, 111111)
  return (
    <ModalContainer minWidth={isMobile ? '320px' : '510px'}>
      <ModalHeader background={isDark ? '#1F1F1F' : '#F4F3F8'}>
        <ModalTitle>
          <Heading fontSize="20px" color={isDark ? '#FFFFFF' : '#000000'} >{title || 'Connect Wallet'}</Heading>
        </ModalTitle>
        <ModalCloseButton isDark={isDark} onDismiss={onDismiss} />
      </ModalHeader>
      <ModalBody isDark={isDark} >
        <WalletWrapper>
          {sortedConfig.map((wallet) => (
            <Box key={wallet.title}>
              <WalletCard isDark={isDark} walletConfig={wallet} login={login} onDismiss={onDismiss} />
            </Box>
          ))}
        </WalletWrapper>
      </ModalBody>
    </ModalContainer>
  );
};

export default ConnectModal;
