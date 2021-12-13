import React, { Fragment } from "react"
import styled, { createGlobalStyle } from "styled-components"
import { mainStyles } from "src/styles/main.styles"

export default function PageLayout({ children }) {
  return (
    <Fragment>
      <S.GlobalStyle />
      <S.Wrapper>{children}</S.Wrapper>
    </Fragment>
  )
}

const S = {
  GlobalStyle: createGlobalStyle`${mainStyles}`,
  Wrapper: styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--bg-fallback);
    background: var(--bg-gradient);
  `,
}
