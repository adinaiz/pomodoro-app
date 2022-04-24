import styled from "styled-components";
import Timing from "./Timing";
import { useState, useEffect, useCallback, Fragment } from "react";

const Timer = () => {
   const [timer, setTimer] = useState(25);
   const [shortBreak, setShortBreak] = useState(5);
   const [longBreak, setLongBreak] = useState(10);
   const [content, setContent] = useState(0);
   const [minutes, setMinutes] = useState(0);
   const [seconds, setSeconds] = useState(0);
   const [begin, setBegin] = useState(true);

   const formToggle = (stage) => {
      setContent(stage);
   };
   const countdownTime = useCallback(() => {
      const timeStatus = {
         0: timer,
         1: shortBreak,
         2: longBreak,
      };
      const seconds = (timeStatus[content] * 60 * 60) / 60;
      const time = `${Math.floor(seconds / 60)}:${
         seconds % 60 > 9 ? seconds % 60 : `0${seconds % 60}`
      }`;
      const [minute, second] = time.split(":");
      setMinutes(+minute);
      setSeconds(+second);
   }, [timer, shortBreak, longBreak, content]);

   useEffect(() => {
      countdownTime();
   }, [countdownTime]);

   useEffect(() => {
      if (!begin) {
         const clock = setInterval(() => {
            if (minutes === 0 && seconds === 0) {
               alert("READY! TIME IS UP!");
            } else if (seconds === 0) {
               setMinutes(minutes - 1);
               setSeconds(59);
            } else {
               setSeconds((second) => second - 1);
            }
         }, 1000);
         return () => clearInterval(clock);
      }

      if (begin) {
         return;
      }
   }, [begin, minutes, seconds]);

   return (
      <Fragment>
         <StyledContent>
            <Timing
               begin={begin}
               setBegin={setBegin}
               content={content}
               formToggle={formToggle}
               countdownTime={countdownTime}
               minutes={minutes}
               seconds={seconds}
            />
         </StyledContent>
         <StyledCount>#1</StyledCount>
         <StyledSms>Time to focus!</StyledSms>
      </Fragment>
   );
};

const StyledContent = styled.div`
   text-align: center;
   width: 480px;
   margin: 0 auto;
   margin-top: 50px;
   background-color: rgba(255, 255, 255, 0.1);
   padding: 10px 0px;
   border-radius: 6px;

   padding-bottom: 16px;
`;
const StyledCount = styled.p`
   font-family: "ArialRounded", Arial;
   color: white;
   font-size: 16px;
   opacity: 0.6;
   margin-bottom: -8px;
   text-align: center;
   opacity: 0.6;
`;
const StyledSms = styled.h1`
   font-family: "ArialRounded", Arial;
   font-weight: 100;
   color: white;
   font-size: 1.125rem;
   font-weight: 400;
   text-align: center;
   overflow-wrap: break-word;
`;

export default Timer;
