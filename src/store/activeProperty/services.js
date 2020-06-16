/**
 * Dependencies
 */
import _ from "lodash";

export const getPropertyData = (dataSet, payload) => {
  const responseObject = new Promise((resolve, reject) => {
    setTimeout(
      () => resolve(_.find(dataSet, ["id", Number(payload)])),
      Math.random() * 1500 + 400
    );
  });

  return responseObject;
};
