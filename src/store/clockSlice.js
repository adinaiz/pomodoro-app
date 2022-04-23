import { createSlice } from "@reduxjs/toolkit"
import {POMODORO,LONG_BREAK,SHORT_BREAK} from '../utils/constants/general'


const initialState = {
    mode: POMODORO,
    round: 1,
    modes: {
      [POMODORO]: {
        id: POMODORO,
        name: "Pomodoro",
        time: 25,
      },
      [SHORT_BREAK]: {
        id: SHORT_BREAK,
        name: "Short Break",
        time: 5,
      },
      [LONG_BREAK]: {
        id: LONG_BREAK,
        name: "Long Break",
        time: 15,
      },
    },
  };

  export const clockSlice = createSlice({
    name: "timer",
    initialState,
    reducers: {
      setMode: (state, action) => {
        state.mode = action.payload;
      },
      incrementRound: (state) => {
        state.round += 1;
      },
      updateModeTime: (state, action) => {
        const { mode, time } = action.payload;
        state.modes[mode].time = time;
      },
    },
  });
  
  export const {
    setMode,
    incrementRound,
    updateModeTime,
  } = clockSlice.actions;
  
  export default clockSlice.reducer;