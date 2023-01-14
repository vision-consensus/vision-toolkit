import React from "react";
import styled from "styled-components";
import Flex from "../../components/Box/Flex";
import { Box } from "../../components/Box";
import { ArrowBackIcon, CloseIcon, CloseNoWithCircleIcon } from "../../components/Svg";
import { IconButton } from "../../components/Button";
import { ModalProps } from "./types";

export const ModalHeader = styled.div<{ background?: string }>`
  align-items: center;
  /* background: ${({ theme }) => theme.isDark ? '#202839' : '#F4F3F8'}; */
  background: #F4F3F8;
  display: flex;
  padding: 12px 24px;
  border-radius: 20px 20px 0 0;
  margin: 1px 1px 0;

`;

export const ModalTitle = styled(Flex)`
  align-items: center;
  flex: 1;
`;

export const ModalBody = styled(Flex)`
  flex-direction: column;
  max-height: 90vh;
  overflow-y: auto;
  background: #ffffff;
  margin: 0px 1px 1px;
    overflow: hidden;
    border-radius: 0 0 20px 20px;
`;

export const ModalCloseButton: React.FC<{ onDismiss: ModalProps["onDismiss"] }> = ({ onDismiss }) => {
  return (
    <IconButton variant="text" onClick={onDismiss} style={{marginRight: '-24px'}} aria-label="Close the dialog">
      <CloseNoWithCircleIcon color="#000" width={32} style={{ marginTop: '20px' }} />
    </IconButton>
  );
};

export const ModalBackButton: React.FC<{ onBack: ModalProps["onBack"] }> = ({ onBack }) => {
  return (
    <IconButton variant="text" onClick={onBack} area-label="go back" mr="8px">
      <ArrowBackIcon color="primary" />
    </IconButton>
  );
};

export const ModalContainer = styled(Box) <{ minWidth: string }>`
  overflow: hidden;
  border: none;
  background-color: transparent;
  box-sizing:border-box;
  padding: 1px;
  width: 95%;
  max-height: 100vh;
  z-index: 999;
  border-radius: 20px;
  /* ${({ theme }) => theme.mediaQueries.xs} {
    width: auto;
    min-width: ${({ minWidth }) => minWidth};
    max-width: 100%;
  } */
  max-width: 510px;
  .content{
    width: calc(100% - 1px);
    background: #202839;
        height: 148px;
        padding:15px;
        color: #f1f1ee;
        display: flex;
        justify-content: center;
        align-items: center;
  }
`;
