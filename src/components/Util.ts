import styled, { createGlobalStyle } from 'styled-components'
import { MediaQuery } from '../Utils'

export const GlobalStyle = createGlobalStyle`
  html: {
    width: 100%;
  }

  body {
    font-family: 'Source Sans Pro', sans-serif;
    background-color: #fafbfc;
    color: #24292e;
    text-align: start;
    margin: 0;
    width: 100%;
  }
`

export const GlobalContainer = styled.div`
  width: calc(50% - 32px);
  padding: 16px;
  margin: auto;
  
  ${`@media ${MediaQuery.device.mobileS}`} {
    width: calc(100% - 32px);
    font-size: 1rem;
    line-height: 1.5;
  }

  ${`@media ${MediaQuery.device.mobileM}`} {
    width: calc(100% - 32px);
    font-size: 1rem;
    line-height: 1.5;
  }

  ${`@media ${MediaQuery.device.laptop}`} {
    width: calc(50% - 32px);
    font-size: 1rem;
    line-height: 1.5;
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
  font-weight: 900;
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
