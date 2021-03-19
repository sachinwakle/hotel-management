import {
  ROOM_DATA_REQUEST,
  ROOM_DATA_SUCCESS,
  ROOM_DATA_FAILURE,
} from "./roomActionTypes";
import api from "../../api";

const fetchRoomRequest = () => {
  return {
    type: ROOM_DATA_REQUEST,
  };
};

const fetchRoomSuccess = (roomData) => {
  return {
    type: ROOM_DATA_SUCCESS,
    payload: roomData,
    error: "",
  };
};

const fetchRoomFailure = (error) => {
  return {
    type: ROOM_DATA_FAILURE,
    payload: "",
    error: error,
  };
};

const fetchRoomData = () => {
  return (dispatch) => {
    dispatch(fetchRoomRequest());

    api
      .getRooms()
      .then((response) => {
        const roomData = response.data;
        dispatch(fetchRoomSuccess(roomData));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchRoomFailure(errorMsg));
      });
  };
};

export { fetchRoomData, fetchRoomRequest, fetchRoomSuccess, fetchRoomFailure };