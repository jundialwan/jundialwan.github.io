import styled, { createGlobalStyle } from 'styled-components'
import { MediaQuery } from '../Utils'

export const GlobalStyle = createGlobalStyle({
  html: {
    width: '100%'
  },
  body: {
    fontFamily: `serif`,
    backgroundColor: '#EEE',
    color: '#212121',
    textAlign: 'start',
    margin: 0,
    width: '100%'
  }
})

export const GlobalContainer = styled.div({
  width: 'calc(50% - 32px)',
  padding: '16px',
  margin: 'auto',
  
  [`@media ${MediaQuery.device.mobileS}`]: {
    width: 'calc(100% - 32px)',
    fontSize: '1rem'
  },

  [`@media ${MediaQuery.device.mobileM}`]: {
    width: 'calc(100% - 32px)',
    fontSize: '1.4rem',
    lineHeight: '2.6rem'
  },

  [`@media ${MediaQuery.device.laptop}`]: {
    width: 'calc(50% - 32px)',
    fontSize: '1.4rem',
    lineHeight: '2.2rem'
  },
})

export const NavigationHeader = styled.div({
  display: 'flex',
  flexDirection: 'row'
})

export const LogoType = styled.div({
  padding: '4px 8px',
  backgroundColor: '#DDD',
  fontWeight: 'bolder',
  marginRight: '4px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  '& a': { color: '#212121', textDecoration: 'none' },
  '& a:hover': { color: '#212121' },
  '& a:visit': { color: '#212121' },
  '& a:active': { color: '#212121' }
})
