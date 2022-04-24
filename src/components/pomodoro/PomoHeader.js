import React from "react";
import styled from "styled-components";
import logo from "../../assets/icons/logo.png";
import settings from "../../assets/icons/settings.png";

export const PomoHeader = () => {
   return (
      <StyledHeader>
         <StyledTitle>
            <img src={logo} alt="logo" />
            Pomofocus
         </StyledTitle>
         <StyledSettings>
            <img src={settings} alt="settings" />
            Setting
         </StyledSettings>
      </StyledHeader>
   );
};

const StyledHeader = styled.header`
   justify-content: space-between;
   align-items: center;
   margin: auto;
   display: flex;
   padding: 12px 12px;
   max-width: 650px;
`;

const StyledTitle = styled.div`
   width: 132px;
   color: white;
   align-items: center;
   font-size: 20px;
   font-weight: 700;
   display: flex;
   & img {
      margin-right: 2px;
      color: black;
      width: 25px;
      height: 25px;
   }
`;
const StyledSettings = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   margin-left: 10px;
   background: rgba(255, 255, 255, 0.2);
   border: none;
   font-size: 13px;
   padding: 5px 12px;
   min-width: 70px;
   border-radius: 4px;
   cursor: pointer;
   font-family: "Varela Round", sans-serif;
   opacity: 0.8;
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
      opacity: 3;
   }
`;
