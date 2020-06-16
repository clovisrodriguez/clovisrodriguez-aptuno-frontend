/**
 * Dependencies
 */
import axios from "axios";

/**
 * Constants
 */
const URL =
  "https://raw.githubusercontent.com/aptuno/code-challenge/master/challenges/data/properties.json";

export const getAppData = () => {
  return axios.get(URL);
};
