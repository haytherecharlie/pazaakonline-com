import React, { Fragment } from "react"
import styled, { createGlobalStyle } from "styled-components"

export default function PageLayout({ children }) {
  return (
    <Fragment>
      <S.GlobalStyle />
      <S.Wrapper>{children}</S.Wrapper>
    </Fragment>
  )
}

const S = {
  GlobalStyle: createGlobalStyle`
    body, #___gatsby {
        margin: 0px;
    }
  `,
  Wrapper: styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: green;
  `,
}
