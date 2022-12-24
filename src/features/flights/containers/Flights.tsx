import React, { useEffect, useMemo } from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import FilterSetting from "../components/filterSetting/FilterSetting";
import FlightList from "../components/flighList/FlightList";
import { fetchData, selectFlightsData } from "../flightSlice";
import bluePlane from "../../../assets/bluePlane.png";

import styles from "./Flights.module.scss";
import { Stops } from "../../types";
let rerend = false;

const Flights = () => {
  const flights = useAppSelector(selectFlightsData);
  const filter = useAppSelector((state) => state.flights.filter);
  const dispatch = useAppDispatch();

  const filteredFlights = useMemo(() => {
    let filteredList = flights ? [...flights] : [];
    switch (filter) {
      case Stops.DIRECT:
        filteredList = filteredList?.filter((el) => el.stops === 0);
        break;
      case Stops.ONE:
        filteredList = filteredList?.filter((el) => el.stops === 1);
        break;
      case Stops.TWO:
        filteredList = filteredList?.filter((el) => el.stops === 2);
        break;
      case Stops.THREE:
        filteredList = filteredList?.filter((el) => el.stops === 3);
        break;
    }
    return filteredList;
  }, [filter, flights]);

  useEffect(() => {
    if (!rerend) {
      dispatch(fetchData());
      rerend = true;
    }
  }, []);

  return (
    <div className={styles.flightsScreen}>
      <img className={styles.bluePlane} src={bluePlane} alt="blue Plane" />
      {flights ? (
        <div className={styles.flightsLists}>
          <FilterSetting />
          <FlightList flights={filteredFlights} />
        </div>
      ) : (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={!flights}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </div>
  );
};

export default Flights;
