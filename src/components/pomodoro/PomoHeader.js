import React from "react";
import styled from "styled-components";
import logo from '../../assets/icons/logo.png'
import settings from '../../assets/icons/settings.png'

export const PomoHeader = () => {
    return (
      <StyledHeader>
         <StyledTitle>
            <img src={logo} alt="logo" />
            Pomofocus
         </StyledTitle>
         <Settings>
            <img src={settings} alt="settings"/>
            Setting
         </Settings>
      </StyledHeader>
    )
}

const StyledHeader = styled.header`
   /* background-color: rgb(219, 82, 77); */
   padding: 12px 12px;
   max-width: 640px;
   margin: auto;
   display: flex;
   justify-content: space-between;
   align-items: center;
`

const StyledTitle = styled.div`
   width: 132px;
   color: white;
   font-size: 20px;
   font-weight: 700;
   display: flex;
   align-items: center;
   & img {
      width: 25px;
      height: 25px;
      margin-right: 2px;
      color: black;
   }
`
const Settings = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   margin-left: 10px;
   font-size: 13px;
   padding: 5px 12px;
   min-width: 70px;
   border-radius: 4px;
   cursor: pointer;
   font-family: 'Varela Round', sans-serif;
   opacity: 0.8;
   background: rgba(255, 255, 255, 0.2);
   border: none;
   color: white;
   &:active {
      position: relative;
      top: 2px;
   }
   & img {
      width: 22px;
      height: 22px;
      margin-right: 2px;
   }
   &:hover {
      opacity: 1;
   }
`
