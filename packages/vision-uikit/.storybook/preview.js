import React from "react";
import { withThemesProvider } from "themeprovider-storybook";
import ResetCSS from "../src/ResetCSS";
import { ModalProvider } from "../src/widgets/Modal";

const globalDecorator = (StoryFn) => (
  <ModalProvider>
    <ResetCSS />
    <StoryFn />
  </ModalProvider>
);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
};

const themes = [

];

export const decorators = [globalDecorator];
