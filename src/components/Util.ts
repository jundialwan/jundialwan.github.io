import styled, { createGlobalStyle } from 'styled-components'
import { MediaQuery } from '../Utils'

export const GlobalStyle = createGlobalStyle`
  html {
    width: 100%;
    font-size: 18px;
    line-height: 1.6;
  }

  body {
    font-family: 'Source Sans Pro', sans-serif;
    background-color: #fafbfc;
    color: #24292e;
    text-align: start;
    margin: 0;
    width: 100%;
  }

  strong {
    font-weight: 600;
  }
  
  h1, h2, h3 {
    font-weight: 700;
  }

  ::selection {
    background-color: lightpink;
  }
`

export const GlobalContainer = styled.div`
  width: calc(50% - 32px);
  padding: 16px;
  margin: auto;
  
  ${`@media ${MediaQuery.device.mobileS}`} {
    width: calc(100% - 32px);
    /* font-size: 1rem;
    line-height: 1.6; */
  }

  ${`@media ${MediaQuery.device.mobileM}`} {
    width: calc(100% - 32px);
    /* font-size: 1rem;
    line-height: 1.6; */
  }

  ${`@media ${MediaQuery.device.laptop}`} {
    width: calc(50% - 32px);
    /* font-size: 1rem;
    line-height: 1.6; */
  }
`

export const NavigationHeader = styled.div({
  display: 'flex',
  flexDirection: 'row'
})

export const LogoType = styled.div`
  padding: 4px 8px;
  background-color: #dfe2e5;
  font-size: 1rem;
  font-weight: 400;
  margin-right: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;

  & a { 
    color: #212121; 
    text-decoration: none;

    &:hover {
      color: #212121;
    }

    &:visited { 
      color: #212121; 
    }

    &:active { 
      color: #212121; 
    }
  }

`