// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation, e.g., fetching data from an API
    setTimeout(() => {
      const data = fetchData();
      if (data) {
        resolve(data); // Fulfill the promise with the fetched data
      } else {
        reject("Error fetching data"); // Reject the promise with an error message
      }
    }, 1000);
  });
  
  // Consuming a Promise with then and catch
  myPromise
    .then((result) => {
      console.log("Promise fulfilled:", result);
    })
    .catch((error) => {
      console.error("Promise rejected:", error);
    });
  
  // Using Promise.all
  const promise1 = fetchDataFromAPI1();
  const promise2 = fetchDataFromAPI2();
  
  Promise.all([promise1, promise2])
    .then((results) => {
      console.log("All promises fulfilled:", results);
    })
    .catch((error) => {
      console.error("At least one promise rejected:", error);
    });
  
  // Using Promise.race
  const racePromise1 = fetchDataFromSource1();
  const racePromise2 = fetchDataFromSource2();
  
  Promise.race([racePromise1, racePromise2])
    .then((firstResult) => {
      console.log("The first promise fulfilled:", firstResult);
    })
    .catch((firstError) => {
      console.error("The first promise rejected:", firstError);
    });
  
  // Using async/await
  async function fetchDataWithAsync() {
    try {
      const result = await fetchDataFromAPI();
      console.log("Async/Await result:", result);
    } catch (error) {
      console.error("Async/Await error:", error);
    }
  }
  
  fetchDataWithAsync();
  