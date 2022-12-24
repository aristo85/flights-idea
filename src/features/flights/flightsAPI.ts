import { dataBase } from "../../data";
import { Flight } from "../types";

const getData = () =>
  new Promise<Flight[]>((res, rej) =>
    setTimeout(() => {
      res(dataBase);
    }, 1000)
  );

export const fetchFlightsData = async () => {

  try {
    const response = await getData();
    return response;
  } catch (error) {
    console.error("data", error);
    // hardcoded the database here for demo purpose
  }
};
