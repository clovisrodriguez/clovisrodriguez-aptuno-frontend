/**
 * Utils
 */
import getFilteredData from "utils/getFilteredData";

export const getDataPage = (dataSet, payload) => {
  const { pageId: pageNumber, filters } = payload;
  const PAGE_SIZE = 12;
  let validPageNumber = pageNumber;

  dataSet = getFilteredData(filters, dataSet);

  if (pageNumber * PAGE_SIZE > dataSet.length)
    validPageNumber = Math.round(dataSet.length / PAGE_SIZE);

  const responseObject = new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve({
          data: dataSet.slice(
            (validPageNumber - 1) * PAGE_SIZE,
            validPageNumber * PAGE_SIZE
          ),
          filters,
          pages: Array.from(
            { length: Math.round(dataSet.length / PAGE_SIZE) },
            (_, i) => i + 1
          ),
          pageNumber,
        }),
      Math.random() * 1500 + 400
    );
  });

  return responseObject;
};
