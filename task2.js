function getData(url) {
  return fetch(`${url}`).then((res) => {
    return res.json();
  });
}

getData("https://jsonplaceholder.typicode.com/posts/1")
  .then((data) => console.log(data))
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
