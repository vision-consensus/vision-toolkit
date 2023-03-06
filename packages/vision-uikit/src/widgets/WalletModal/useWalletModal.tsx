import React from "react";
import { useModal } from "../Modal";
import ConnectModal from "./ConnectModal";
import { Config, Login } from "./types";

interface ReturnType {
  onPresentConnectModal: () => void;
}

const useWalletModal = ({
  login,
  logout,
  title,
  walletList,
  cover,
  isDark
}: {login: Login, logout: () => void, title?: string, walletList?: Config[], cover?: boolean, isDark?: boolean}): ReturnType => {
  const [onPresentConnectModal] = useModal(<ConnectModal login={login} title={title} walletList={walletList} cover={cover} isDark={isDark} />);
  return { onPresentConnectModal };
};

export default useWalletModal;
