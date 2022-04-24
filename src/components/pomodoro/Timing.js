import React, { Fragment } from "react";
import { Button } from "../UI/Button";
import styled from "styled-components";
import next from "../../assets/icons/next.png";
import {
   LONG_BREAK,
   POMODORO,
   SHORT_BREAK,
   START,
   STOP,
} from "../../utils/constants/general";

const Timing = ({ begin, setBegin, minutes, seconds, formToggle }) => {
   const status = [POMODORO, SHORT_BREAK, LONG_BREAK];
   return (
      <Fragment>
         <StyledButtons>
            {status.map((form, stage) => {
               return (
                  <Button
                     onClick={() => {
                        formToggle(stage);
                     }}
                  >
                     {" "}
                     {form}
                  </Button>
               );
            })}
         </StyledButtons>
         <StyledTitle>
            {minutes}:{" "}
            {`${seconds % 60 > 9 ? seconds % 60 : `0${seconds % 60}`}`}
         </StyledTitle>
         <StyledSwitch>
            <Button
               onClick={() => setBegin((prevState) => !prevState)}
               className="start"
            >
               {begin ? START : STOP}
            </Button>
            {!begin ? (
               <Button
                  onClick={() =>
                     alert(
                        "Are you sure you want to finish the round early? The remaining time will not be counted in the report"
                     )
                  }
                  className="nextbtn"
               >
                  <img src={next} alt="next" />
               </Button>
            ) : (
               ""
            )}
         </StyledSwitch>
      </Fragment>
   );
};

const StyledButtons = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;

   Button {
      font-size: 17px;
      border: none;
      cursor: pointer;
      background: none;
      box-sizing: border-box;
      color: white;
      padding: 7px 6px;
      margin: 5px;
      border-radius: 4px;
      &:hover {
         background: rgba(153, 153, 153, 0.324);
         opacity: 0.9;
      }
   }
`;
const StyledTitle = styled.span`
   color: white;
   font-size: 100px;
   margin-top: 15px;
`;
const StyledSwitch = styled.div`
   display: flex;
   justify-content: center;
   padding: 0 0 15px;
   .start {
      border-radius: 5px;
      position: relative;
      font-size: 24px;
      height: 55px;
      font-weight: bold;
      width: 200px;
      cursor: pointer;
      border: none;
      margin: 15px 0px 10px;
      background-color: white;
      font-family: "ArialRounded", Arial;
      letter-spacing: 0.5px;
      box-shadow: rgb(235, 235, 235) 0 6px 0;
   }
   .start:hover {
      opacity: 1;
   }
   .nextbtn {
      background: none;
      border: none;
      padding: 26px;
      opacity: 0.9;
      cursor: pointer;
      img {
         width: 30px;
      }
   }
`;
export default Timing;
