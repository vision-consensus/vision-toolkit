import Metamask from "../../components/Svg/Icons/Metamask";
import Vtimes from "../../components/Svg/Icons/Vtimes";
import WalletConnect from "../../components/Svg/Icons/WalletConnect";

import { Config, ConnectorNames } from "./types";

const connectors: Config[] = [
  {
    title: "Metamask",
    icon: Metamask,
    connectorId: ConnectorNames.Injected,
    priority: 1,
  },
  {
    title: "Vtimes",
    icon: Vtimes,
    connectorId: ConnectorNames.Vtimes,
    priority: 2,
  }

];

export default connectors;
export const connectorLocalStorageKey = "vision_connectorId";
export const walletLocalStorageKey = "vision_wallet";
