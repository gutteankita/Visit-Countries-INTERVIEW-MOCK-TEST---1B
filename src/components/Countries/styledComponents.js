import styled from 'styled-components'

// import {CountriesContainer, Heading,CountriesVisitedSection,Ul,Li,Para,Button} from './styledComponents'
//ShowVistedCountriesSection

export const CountriesContainer = styled.div`
  background: #161624;
  min-height: 100vh;
`
export const Heading = styled.h1`
color: #f8fafc;
font-size: 34px;
padding: 20px;
`

export const CountriesVisitedSection = styled.div`
  background: #1e1e2c;
  border-radius: 10px;
  border: 1px solid #334155;
  margin: 20px;
  height: 300px; 
  overflow-y: auto;
 
`

export const Ul = styled.ul`
  list-style: none;
  padding: 0;
`
//
export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #334155;
  
   padding: 14px;
   
`

export const Para = styled.p`
color: #f1f5f9;
font-size: 23px;
margin-left: 10px;

`
export const Button = styled.button`
  width: 60px;
  height: 31px;
  background: #3b82f6;
  outline: none;
  border-style: none;
  color: #ffffff;
  font-size: 20px;
  margin-right: 10px;

`

export const ShowVistedCountriesSection = styled.div``
export const UlSection = styled.ul`
  display: flex;
  flex-wrap: wrap;
  
  list-style: none;
`


export const NoContentPara = styled.p`
color: #f1f5f9;
font-size: 23px;
margin-left: 10px;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 80px;
`