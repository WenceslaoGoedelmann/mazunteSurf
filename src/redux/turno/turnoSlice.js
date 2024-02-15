import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  turnos: null,
  loading: false,
  error: null,
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
    clearTurnos
} = turnoSlice.actions;

export default turnoSlice.reducer;

/*   const initialState = {
    turnos: [],
    diahora:{},
    experience:{},
    ID: 0,
    
    };


  const turnoSlice = createSlice({
    name: 'turnos',
    initialState,
    reducers: {
        saveTurno: (state, action) => {
            return {
                ...state,
                turnos: [...state.turnos, action.payload]
            }
        },
        selectDate: (state, action) => {
            return {
                ...state,
                diahora: action.payload
            }
        },
        selectExperience: (state, action) => {
            return {
                ...state,
                experience: action.payload
            }
        },
        clearAllTurnos: (state) => {
            return {
                ...state,
                turnos: [],
                ID:0,
            }
        },
        increaseID: (state) => {
            
            return {
                ...state,
                ID: newID(state.ID)
            }
        },
        removeTurno: (state, action) => {
            return {
                ...state,
                turnos: removeItemTurno(state.turnos, action.payload)
            }
        },
        

    },
  });

  export const {saveTurno, selectDate, selectExperience, clearAllTurnos, increaseID, removeTurno} = turnoSlice.actions */
