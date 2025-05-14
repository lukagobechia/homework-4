async function getData(url) {
  return await fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
}

function downloadContents(urls) {
  return Promise.all(
    urls.map((url) => {
      return getData(url);
    })
  )
    .then((results) => {
      console.log("All data downloaded successfully");
      return results;
    })
    .catch((error) => {
      console.error("Error downloading data:", error);
    });
}
