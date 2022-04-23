import styled from "styled-components";
import Timing from "./Timing";
import { useState, useEffect, useCallback, Fragment } from "react";

const Timer = () => {
    const [pomodoro, setPomodoro] = useState(25)
    const [shortBreak, setShortBreak] = useState(5)
    const [longBreak, setLongBreak] = useState(10)
    const [content, setContent] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [ticking, setTicking] = useState(true)
 
    const switchContent = (index) => {
       setContent(index)
    }
    const getTickingTime = useCallback(() => {
       const timeStage = {
          0: pomodoro,
          1: shortBreak,
          2: longBreak,
       }
       const seconds = (timeStage[content] * 3600) / 60
       const time = `${Math.floor(seconds / 60)}:${
          seconds % 60 > 9 ? seconds % 60 : `0${seconds % 60}`
       }`
       const [minute, second] = time.split(':')
       setMinutes(Number(minute))
       setSeconds(Number(second))
    }, [pomodoro, shortBreak, longBreak, content])
 
    useEffect(() => {
       getTickingTime()
    }, [getTickingTime])
 
    useEffect(() => {
       if (ticking) {
          return
       }
       if (!ticking) {
          const timer = setInterval(() => {
             if (minutes === 0 && seconds === 0) {
                alert('time up')
             } else if (seconds === 0) {
                setMinutes(minutes - 1)
                setSeconds(59)
             } else {
                setSeconds((second) => second - 1)
             }
          }, 1000)
          return () => clearInterval(timer)
       }
    }, [ticking, minutes, seconds])
 
    return (
        <Fragment>
       <TimeContent>
          <Timing
             content={content}
             switchContent={switchContent}
             getTickingTime={getTickingTime}
             minutes={minutes}
             seconds={seconds}
             ticking={ticking}
             setTicking={setTicking}
          />
       </TimeContent>
       <CountOfTimerLoop>#1</CountOfTimerLoop>
       <TimerMessage>Time to focus!</TimerMessage>
    </Fragment>
    )
}

const TimeContent = styled.div`
   background-color: rgba(255, 255, 255, 0.1);
   padding: 10px 0px;
   border-radius: 6px;
   text-align: center;
   width: 480px;
   margin: 0 auto;
   margin-top: 50px;
   padding-bottom: 16px;
`
const CountOfTimerLoop = styled.p`
   color: white;
   font-size: 16px;
   opacity: 0.6;
   margin-bottom: -8px;
   text-align: center;
   font-family:'ArialRounded', Arial;
   opacity: 0.6;
`
const TimerMessage = styled.h1`
   font-size: 1.125rem;
   font-weight: 400;
   text-align: center;
   font-family: 'ArialRounded', Arial;
   font-weight: 100;
   color: white;
   overflow-wrap: break-word;
`

export default Timer