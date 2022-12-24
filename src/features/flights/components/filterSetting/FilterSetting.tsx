import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormLabel from "@mui/material/FormLabel";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import styles from "./FilterSetting.module.scss";
import { Stops } from "../../../types";
import { setFilter } from "../../flightSlice";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";

type Props = {};

const FilterSetting = (props: Props) => {
  const dispatch = useAppDispatch();
  const checked = useAppSelector((state) => state.flights.filter);

  const handleCheckbox = (filter: Stops) => {
    if (checked !== filter) {
      dispatch(setFilter(filter));
    }
  };

  return (
    <div className={styles.filterSetting}>
      <p className={styles.currencyTitle}>ВАЛЮТА</p>
      <Stack spacing={0} direction="row">
        <Button variant="contained">RUB</Button>
        <Button variant="outlined">USD</Button>
        <Button variant="outlined">EUR</Button>
      </Stack>
      <br />
      <br />
      <FormGroup>
        <FormLabel>КОЛИЧЕСТВО ПЕРЕСАДОК</FormLabel>
        <FormControlLabel
          control={
            <Checkbox
              checked={checked === Stops.ALL}
              onClick={() => handleCheckbox(Stops.ALL)}
            />
          }
          label="Все"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checked === Stops.DIRECT}
              onClick={() => handleCheckbox(Stops.DIRECT)}
            />
          }
          label="Без пересадок"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checked === Stops.ONE}
              onClick={() => handleCheckbox(Stops.ONE)}
            />
          }
          label="1 пересадка"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checked === Stops.TWO}
              onClick={() => handleCheckbox(Stops.TWO)}
            />
          }
          label="2 пересадки"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checked === Stops.THREE}
              onClick={() => handleCheckbox(Stops.THREE)}
            />
          }
          label="3 пересадки"
        />
        {/* <FormControlLabel disabled control={<Checkbox />} label="Disabled" /> */}
      </FormGroup>
    </div>
  );
};

export default FilterSetting;
