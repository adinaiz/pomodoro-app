import React, { useId } from 'react'
import { Button } from '../UI/Button'
import styled from 'styled-components'
import next from '../../assets/icons/next.png'
import { LONG_BREAK, POMODORO, SHORT_BREAK, START, STOP } from '../../utils/constants/general'

const Timing = ({
   switchContent,
   setTicking,
   minutes,
   seconds,
   ticking,
}) => {
   const options = [POMODORO, SHORT_BREAK, LONG_BREAK]
   const id = useId()
   return (
      <>
         <Buttons>
            {options.map((option, index) => {
               return (
                  <Button
                     key={`${id + index}}`}
                     onClick={() => switchContent(index)}
                  >
                    {option}</Button> )
            })}
         </Buttons>
         <TimeTitle>
            {minutes}:
            {`${seconds % 60 > 9 ? seconds % 60 : `0${seconds % 60}`}`}
         </TimeTitle>
         <TimeToggle>
            <Button
               onClick={() => setTicking((prevState) => !prevState)}
               className="start"
            >
               {ticking ? START : STOP}
            </Button>
            {ticking ? ('') : (
               <Button
                  onClick={() =>
                     alert('Are you sure you want to finish the round early? (The remaining time will not be counted in the report.)')
                  }
                  className="next">
                  <img src={next} alt="next"/>
               </Button>
            )}
         </TimeToggle>
      </>
   )
}

const Buttons = styled.div`
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
`
const TimeTitle = styled.span`
   color: white;
   font-family:'ArialRounded', Arial;
   font-size: 120px;
   font-weight: bold;
   margin-top: 20px;
`
const TimeToggle = styled.div`
   display: flex;
   justify-content: center;
   padding: 0 0 15px;
   .start {
      cursor: pointer;
      border: none;
      margin: 15px 0px 10px;
      border-radius: 5px;
      /* box-shadow: ${({ isStarted }) =>
      isStarted ? 'rgb(235 235 235) 0px 6px 0px' : ''}; */
      position: relative;
      /* top: ${({ isStarted }) => (isStarted ? '0' : '7px')}; */
      font-size: 24px;
      /* color: ${({ color }) => color || ''}; */
      height: 55px;
      font-weight: bold;
      width: 200px;
      background-color: white;
      font-family: 'ArialRounded', Arial;
      letter-spacing: 0.5px;
      box-shadow: rgb(235, 235, 235) 0 6px 0;
   }
   .start:hover {
      opacity: 0.9;
      /* box-shadow: none; */
   }
   .next {
      /* box-shadow: none; */
      opacity: 0.9;
      cursor: pointer;
      background: none;
      border: none;
      padding: 26px;
      img {
         width: 30px;
      }
   }
`
export default Timing;
