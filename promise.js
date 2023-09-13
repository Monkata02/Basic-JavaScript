const fetchData = () => {
  return new Promise((resolve, reject) => {
    // Asynchronous operation
    if (dataIsAvailable) {
      resolve(data);
    } else {
      reject('Data not available');
    }
  });
};
