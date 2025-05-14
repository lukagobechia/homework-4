async function getData(url, retries = 5) {
  return await fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .catch((error) => {
      if (retries > 0) {
        console.log(`Retrying...: ${retries}`);

        return new Promise((resolve) => {
          setTimeout(() => resolve(getData(url, retries - 1)), 2000);
        });
      }
      throw error;
    });
}

getData("https://jsonplaceolder.typicode.com/posts/1") // incorrect url provided so doesnot work
  .then((data) => console.log(data))
  .catch((error) => console.error("Failed after 5 retries:", error));
