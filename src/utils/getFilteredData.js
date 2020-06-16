/**
 * Dependencies
 */
import _ from "lodash";

export default (filters, dataSet) => {
  const { region = "", bedrooms = [] } = filters;

  if (region.length) {
    dataSet = _.filter(dataSet, (property) =>
      _.includes(property.regions, region)
    );
  }

  if (bedrooms.length) {
    dataSet = _.filter(dataSet, (property) =>
      _.includes(bedrooms, property.bedrooms)
    );
  }

  return dataSet;
};
