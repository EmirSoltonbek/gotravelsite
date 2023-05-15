import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { JSON_API_TRIPS } from "../components/helpers/consts";
import { useNavigate } from "react-router-dom";

export const tripContext = createContext();
export const useTrip = () => useContext(tripContext);

const INIT_STATE = {
  trips: [],
  tripDetails: {},
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_TRIP":
      return { ...state, trips: action.payload };
    case "GET_PRODUCT_DETAILS":
      return { ...state, tripDetails: action.payload };
    default:
      return state;
  }
};
const TripContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getTrips = async () => {
    const { data } = await axios.get(
      `${JSON_API_TRIPS}${window.location.search}`
    );
    console.log(data);
    dispatch({ type: "GET_TRIP", payload: data });
  };

  // console.log(state.trips);

  const addTrip = async (newTrip) => {
    await axios.post(JSON_API_TRIPS, newTrip);
  };

  const deleteTrip = async (id) => {
    await axios.delete(`${JSON_API_TRIPS}/${id}`);
    getTrips();
  };

  const getTripDetails = async (id) => {
    const { data } = await axios.get(`${JSON_API_TRIPS}/${id}`);
    dispatch({
      type: "GET_PRODUCT_DETAILS",
      payload: data,
    });
  };

  const saveEditedTrip = async (newProduct) => {
    await axios.patch(`${JSON_API_TRIPS}/${newProduct.id}`, newProduct);
    getTrips();
    navigate("/card");
  };

  const values = {
    addTrip,
    getTrips,
    trips: state.trips,
    deleteTrip,
    tripDetails: state.tripDetails,
    getTripDetails,
    saveEditedTrip,
  };
  return <tripContext.Provider value={values}>{children}</tripContext.Provider>;
};

export default TripContextProvider;