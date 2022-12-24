import React, { FC } from "react";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider/Divider";
import logoIcon from "../../../../assets/logoicon.png";
import SendIcon from "@mui/icons-material/Send";
import { Flight } from "../../../types";
import styles from "./FlightList.module.scss";

type Props = {
  flights: Flight[];
};

const FlightList: FC<Props> = ({ flights }) => {
  return (
    <div className={styles.listContent}>
      {flights?.map((el) => (
        <ListItem
          className={styles.flight}
          alignItems="flex-start"
          key={el.arrival_time}
        >
          <div className={styles.flightAction}>
            <img src={logoIcon} alt="TA icon" />
            <button>Купить за {el.price} &#8381;</button>
          </div>
          <Divider orientation="vertical" flexItem />
          <div className={styles.flightRoute}>
            <div className={styles.place}>
              <p className={styles.placeTime}>{el.departure_time}</p>
              <p className={styles.placeName}>{el.origin_name}</p>
              <p className={styles.placeDate}>{el.departure_date}</p>
            </div>
            <div className={styles.transfer}>
              <p className={styles.transferStops}>{el.stops} ПЕРЕСАДКИ</p>
              <div className={styles.transferLine}>
                <div className={styles.arrow} />
                <SendIcon />
              </div>
            </div>
            <div className={styles.place}>
              <p className={styles.placeTime}>{el.arrival_time}</p>
              <p className={styles.placeName}>{el.destination_name}</p>
              <p className={styles.placeDate}>{el.arrival_date}</p>
            </div>
          </div>
        </ListItem>
      ))}
    </div>
  );
};

export default FlightList;
