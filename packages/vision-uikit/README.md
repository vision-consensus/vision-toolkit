# 🥞 VanSwap UIkit

[![Version](https://img.shields.io/npm/v/vanswap-uikit)](https://www.npmjs.com/package/vanswap-uikit) [![Size](https://img.shields.io/bundlephobia/min/vanswap-uikit)](https://www.npmjs.com/package/vanswap-uikit)

VanSwap UIkit is a set of React components and hooks used to build pages on VanSwap's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add vanswap-uikit`

## Setup

### Theme

Before using VanSwap UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from 'vanswap-uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from 'vanswap-uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](/)
