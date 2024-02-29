import axios from "axios";

import { BASE_URL } from "../../utils/constants";
import { fetchAdminTurnoSuccess, fetchHoursSuccess, fetchTurnoFail, fetchTurnoStart, fetchTurnoSuccess } from "../../redux/turno/turnoSlice";

export const getHours = async (date, dispatch) => {
  dispatch (fetchTurnoStart())
  try {
    const hours = await axios.post(
      `${BASE_URL}/turno/hours`,
      {date: `${date}`}
    );

    if(hours){
      console.log(hours.data.data)
      dispatch(fetchHoursSuccess(hours.data.data));
    }
   
    
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
  dispatch (fetchTurnoStart())
  try {
    const turnos = await axios.get(`${BASE_URL}/turno`, { 
      headers: {
        'x-token': token,
      },/* como segundo argumento le paso el headers con el token */
    });
    if (turnos) {
      console.log(turnos.data.data)
      dispatch(fetchTurnoSuccess(turnos.data.data));
    }
  } catch (error) {
    console.error({ error });

  }
};

export const AdminGetTurnos = async (token, data, dispatch) => {
  dispatch (fetchTurnoStart())
  try {
    const turnos = await axios.post(`${BASE_URL}/turno/adminturnos`,data, { 
      headers: {
        'x-token': token,
      },
    });
    if (turnos) {

      dispatch(fetchAdminTurnoSuccess(turnos.data.data));
    }
  } catch (error) {
    console.error({ error });

  }
};

export const UpdateTurno = async (token, statusUpdate) => {

  try {
    const turnos = await axios.patch(`${BASE_URL}/turno/adminturnos`,statusUpdate, { 
      headers: {
        'x-token': token,
      },
    });
    if (turnos) {
     alert("Turno actualizado con exito")
    }
  } catch (error) {
    console.error({ error });

  }
};

export const deleteTurno = async (token, turno) => {

  try {
    const turnos = await axios.post(`${BASE_URL}/turno/deleteturno`,turno, { 
      headers: {
        'x-token': token,
      },
    });
    if (turnos) {
     alert("Turno eliminado con exito")
    }
  } catch (error) {
    console.error({ error });

  }
};

