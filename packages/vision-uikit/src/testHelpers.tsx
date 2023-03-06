import React, { ReactNode } from "react";
import { render, RenderResult } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

export const setupMockIntersectionObserver = (): void => {
  /* eslint-disable class-methods-use-this */
  class MockIntersectionObserver {
    readonly root: Element | null;

    readonly rootMargin: string;

    readonly thresholds: ReadonlyArray<number>;

    constructor() {
      this.root = null;
      this.rootMargin = "";
      this.thresholds = [];
    }

    disconnect() {
      return jest.fn;
    }

    observe() {
      return jest.fn;
    }

    takeRecords(): IntersectionObserverEntry[] {
      return [];
    }

    unobserve() {
      return jest.fn;
    }
  }

  Object.defineProperty(window, "IntersectionObserver", {
    writable: true,
    configurable: true,
    value: MockIntersectionObserver,
  });
};
