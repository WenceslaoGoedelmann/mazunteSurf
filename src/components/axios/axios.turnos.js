import axios from "axios";

import { BASE_URL } from "../../utils/constants";
import { fetchTurnoFail, fetchTurnoSuccess } from "../../redux/turno/turnoSlice";

export const getHours = async (date) => {
  try {
    const hours = await axios.post(
      `${BASE_URL}/turno/hours`,
      {date: `${date}`}
    );
   return hours.data
    
  } catch (error) {
    console.error({ error });
  }
};

export const createTurno = async (turno, currentUser) => {
  try {
    const response = await axios.post(`${BASE_URL}/turno`, turno, {
      headers: {
        'x-token': currentUser.token,
      }, /*  como segundo argumento le paso el body con la orden, como tercer argumento le paso el headers con el token */
    });
    if (response) {
      alert("Turno creado con exito"); /* luego de crear la nueva orden, llamo a la funcion anterior para que ya me traiga esta ultima orden y otras mas si las tuviese */
    }
  } catch (error) {
    console.error({ error });
  }
};

export const getUserTurnos = async (token, dispatch) => {
  try {
    const turnos = await axios.get(`${BASE_URL}/turno`, { 
      headers: {
        'x-token': token,
      },/* como segundo argumento le paso el headers con el token */
    });
    if (turnos) {
      dispatch(fetchTurnoSuccess(turnos.data.data));
    }
  } catch (error) {
    console.error({ error });

  }
};

export const AdminGetTurnos = async (token, dispatch) => {
  try {
    const turnos = await axios.post(`${BASE_URL}/turno`, { 
      headers: {
        'x-token': token,
      },/* como segundo argumento le paso el headers con el token */
    });
    if (turnos) {
      dispatch(fetchTurnoSuccess(turnos.data.data));
    }
  } catch (error) {
    console.error({ error });

  }
};


