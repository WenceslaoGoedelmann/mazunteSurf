import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  turnos: null,
  adminTurnos:null,
  loading: false,
  error: null,
  hours:null,
};

const turnoSlice = createSlice({
  name: "turnos",
  initialState,
  reducers: {
    createTurnoFail: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    fetchTurnoSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        error: null,
        turnos: [...action.payload],
      };
    },
    fetchAdminTurnoSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        error: null,
        adminTurnos: [...action.payload],
      };
    },
    fetchHoursSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        error: null,
        hours: [...action.payload],
      };
    },
    fetchTurnoFail: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    fetchTurnoStart: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    clearError: (state) => {
      return {
        ...state,
        error: null,
      };
    },
    clearTurnos: (state) => {
      return {
        ...state,
        turnos: null,
      };
    },
  },
});

export const {
    createTurnoFail,
    fetchTurnoSuccess,
    fetchTurnoFail,
    fetchTurnoStart,
    clearError,
    clearTurnos,
    fetchAdminTurnoSuccess,
    fetchHoursSuccess
} = turnoSlice.actions;

export default turnoSlice.reducer;

